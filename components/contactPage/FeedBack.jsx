import React from "react";
import styles from "@/styles/contactPage/feedBack.module.css";

const FeedBack = () => {
	async function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);

		const response = await fetch("/api/sendMailComment", {
			method: "POST",
			body: formData,
		}).then((res) => res.json());
	}
	return (
		<div className={styles.cardContainer}>
			<div className={styles.title}>Leave a comment below !</div>
			<div className={styles.subtitle}>
				{" "}
				Good or bad, express yourself.{" "}
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label htmlFor="comment" className={styles.label}></label>
				<textarea
					id="comment"
					name="comment"
					className={styles.textarea} // Note the change of class name for styling purpose
					rows="4" // Default height of the textarea in lines
				></textarea>
				<button type="submit" className={styles.submitButton}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default FeedBack;
