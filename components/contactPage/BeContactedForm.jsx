import styles from "@/styles/contactPage/beContactedForm.module.css";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function BeContactedForm() {
	const [notification, setNotification] = useState({
		show: false,
		message: "",
		success: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const formRef = useRef(null);

	const searchParams = useSearchParams();
	const interest = searchParams.get("interest");

	async function handleSubmit(event) {
		event.preventDefault();

		setIsSubmitting(true);
		const formData = new FormData(event.target);

		const response = await fetch("/api/sendMailContact", {
			method: "POST",
			body: formData,
		});

		const data = await response.json(); // Parse JSON seulement après avoir vérifié le statut HTTP
		console.log(data);

		if (response.ok) {
			// Si le statut HTTP indique un succès
			setNotification({
				show: true,
				message: "Email sent successfully!",
				success: true,
			});
		} else {
			// Si le statut HTTP indique un échec
			setNotification({
				show: true,
				message: data.message || "Failed to send email.",
				success: false,
			});
		}

		// Réinitialisation du formulaire après l'envoi
		if (formRef.current) {
			formRef.current.reset();
		}

		setTimeout(() => {
			setIsSubmitting(false); // Réactiver le bouton après 5 secondes
		}, 5000);
	}

	useEffect(() => {
		let timer;
		if (notification.show) {
			timer = setTimeout(() => {
				setNotification((prev) => ({ ...prev, show: false }));
			}, 5000); // Notification disparaît après 5 secondes
		}

		return () => clearTimeout(timer); // Nettoyage du timer
	}, [notification.show]);

	return (
		<div className={styles.formContainer}>
			<div className={styles.title}>Book an introduction call </div>
			<div className={styles.subtitle}>
				Fill in the form below and we will contact you as soon as
				possible with the right person to help you.
			</div>

			<form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
				<input
					type="text"
					id="firstname"
					name="firstname"
					className={styles.input}
					placeholder="First Name *"
					required
				/>

				<input
					type="text"
					id="lastname"
					name="lastname"
					className={styles.input}
					placeholder="Last Name *"
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
					placeholder="Email *"
					required
				/>

				<input
					type="tel"
					id="phone"
					name="phone"
					className={styles.input}
					placeholder="Phone *"
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
					<option value="defaultValue">Choose your interest *</option>
					<option value="requestDemo">Request a free demo</option>
					<option value="service">Service information</option>
					<option value="support">Support</option>
					<option value="other">Other</option>
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
						Receive commercial email
					</label>
				</div>

				<button
					type="submit"
					className={styles.submitButton}
					disabled={isSubmitting}
				>
					Submit
				</button>
			</form>
			{notification.show && (
				<div
					className={`${styles.notificationBanner} ${
						notification.success
							? styles.successBanner
							: styles.errorBanner
					}`}
				>
					{notification.message}
				</div>
			)}
		</div>
	);
}
