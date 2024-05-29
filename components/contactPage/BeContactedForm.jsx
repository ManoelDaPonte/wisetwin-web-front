import styles from "@/styles/contactPage/beContactedForm.module.css";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

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

		// Ensure receiveMail is correctly formatted
		if (formData.get("receiveMail") === null) {
			formData.set("receiveMail", "false");
		}

		// Ensure optional fields are included as empty strings
		const optionalFields = [
			"position",
			"society",
			"employeeNumber",
			"country",
			"interest",
		];
		optionalFields.forEach((field) => {
			if (!formData.has(field)) {
				formData.append(field, "");
			}
		});

		try {
			const response = await axios.post(
				"http://157.230.126.37:8888/send-email/",
				formData
			);

			console.log(response.data);

			setNotification({
				show: true,
				message: response.data.message || "Email sent successfully!",
				success: response.status === 200,
			});

			if (formRef.current) {
				formRef.current.reset();
			}
		} catch (error) {
			console.error("Error occurred:", error);
			setNotification({
				show: true,
				message:
					error.response?.data.message || "Failed to send email.",
				success: false,
			});
		} finally {
			setIsSubmitting(false);
			setTimeout(() => {
				setNotification((prev) => ({ ...prev, show: false }));
			}, 5000); // Notification disappears after 5 seconds
		}
	}

	return (
		<div className={styles.formContainer}>
			<div className={styles.title}>Book an introduction call</div>
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
