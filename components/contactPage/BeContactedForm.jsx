import styles from "@/styles/contactPage/beContactedForm.module.css";
import { useSearchParams } from "next/navigation";

export default function BeContactedForm() {
	// Use the useState hook to create a state variable and a function to update it
	const searchParams = useSearchParams();
	const interest = searchParams.get("interest");

	async function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);

		const response = await fetch("/api/sendMailContact", {
			method: "POST",
			body: formData,
		}).then((res) => res.json());
	}

	return (
		<div className={styles.formContainer}>
			<div className={styles.title}>Ask for a call</div>
			<div className={styles.subtitle}>
				Fill in the form below and we will contact you as soon as
				possible with the right person to help you.
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="text"
					id="firstname"
					name="firstname"
					className={styles.input}
					placeholder="First Name"
					required
				/>

				<input
					type="text"
					id="lastname"
					name="lastname"
					className={styles.input}
					placeholder="Last Name"
					required
				/>

				<input
					type="text"
					id="position"
					name="position"
					className={styles.input}
					placeholder="Position"
				/>

				<input
					type="email"
					id="email"
					name="email"
					className={styles.input}
					placeholder="Email"
					required
				/>

				<input
					type="tel"
					id="phone"
					name="phone"
					className={styles.input}
					placeholder="Phone"
					required
				/>

				<input
					type="text"
					id="society"
					name="society"
					className={styles.input}
					placeholder="Society"
				/>

				<input
					type="number"
					id="employeeNumber"
					name="employeeNumber"
					className={styles.input}
					placeholder="Number of Employees"
				/>

				<input
					type="text"
					id="country"
					name="country"
					className={styles.input}
					placeholder="Country"
				/>
				<select
					id="interest"
					name="interest"
					className={styles.input}
					defaultValue={interest}
				>
					<option value="defaultValue"></option>
					<option value="requestDemo">Request a demo</option>
					<option value="product">Produit</option>
					<option value="service">Service</option>
					<option value="support">Support</option>
					<option value="other">Autre</option>
				</select>

				<div className={styles.checkboxContainer}>
					<input
						type="checkbox"
						id="receiveMail"
						name="receiveMail"
						className={styles.checkbox}
						defaultChecked
					/>
					<label
						htmlFor="receiveMail"
						className={styles.checkboxLabel}
					>
						Receive Commercial Mail
					</label>
				</div>

				<button type="submit" className={styles.submitButton}>
					Send Email
				</button>
			</form>
		</div>
	);
}
