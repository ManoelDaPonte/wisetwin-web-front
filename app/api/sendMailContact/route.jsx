import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handler for POST requests
export const POST = async (req, res) => {
	const formData = await req.formData();

	// Extract the form data
	const firstname = formData.get("firstname");
	const lastname = formData.get("lastname");
	const position = formData.get("position");
	const email = formData.get("email");
	const phone = formData.get("phone");
	const society = formData.get("society");
	const employeeNumber = formData.get("employeeNumber");
	const country = formData.get("country");
	const interest = formData.get("interest");
	const receiveMail = formData.get("receiveMail");

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
        <p><strong>First Name:</strong> ${firstname}</p>
        <p><strong>Last Name:</strong> ${lastname}</p>
	    <p><strong>Email:</strong> ${email}</p>
	    <p><strong>Position:</strong> ${position}</p>
	    <p><strong>Phone:</strong> ${phone}</p>
	    <p><strong>Society:</strong> ${society}</p>
	    <p><strong>Number of Employees:</strong> ${employeeNumber}</p>
	    <p><strong>Country:</strong> ${country}</p>
	    <p><strong>Interest:</strong> ${interest}</p>
	    <p><strong>Opt-In for Mails:</strong> ${receiveMail ? "Yes" : "No"}</p>
	`;

	// Prepare email data
	const mailOptions = {
		from: `"Wise Twin - noreply" <${process.env.EMAIL_USER}>`,
		to: process.env.EMAIL_RECEIVER,
		subject: "Contact for a call back",
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
