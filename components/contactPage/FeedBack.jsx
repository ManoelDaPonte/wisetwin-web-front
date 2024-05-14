import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/contactPage/feedBack.module.css";

const FeedBack = () => {
	const [notification, setNotification] = useState({
		show: false,
		message: "",
		success: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const formRef = useRef(null);

	async function handleSubmit(event) {
		event.preventDefault();
		setIsSubmitting(true);
		const formData = new FormData(event.target);

		const response = await fetch("/api/sendMailComment", {
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
		<div className={styles.cardContainer}>
			<div className={styles.title}>Leave a comment below !</div>
			<div className={styles.subtitle}>
				Good or bad, express yourself.
			</div>
			<form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
				<textarea
					id="comment"
					name="comment"
					className={styles.textarea}
					rows="4"
				></textarea>
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
};

export default FeedBack;
