import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handler for POST requests
export const POST = async (req, res) => {
	const formData = await req.formData();

	// Extract the form data
	const comment = formData.get("comment");

	// Create a transporter object using the server SMTP details
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: parseInt(process.env.EMAIL_PORT, 10),
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	// Prepare the email content dynamically
	const mailContentHTML = `
        <p> ${comment}</p>
	`;

	// Prepare email data
	const mailOptions = {
		from: `"Wise Twin - noreply" <${process.env.EMAIL_USER}>`,
		to: process.env.EMAIL_RECEIVER,
		subject: "Comment from user",
		html: mailContentHTML,
	};

	// Send email
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log("Message sent: %s", info.messageId);
		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Failed to send email:", error);
		return NextResponse.json(
			{ message: "Failed to send email" },
			{ status: 500 }
		);
	}
};
