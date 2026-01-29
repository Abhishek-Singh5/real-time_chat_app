// import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";
import transporter from "../lib/nodemailer.js";
import { ENV } from "../lib/env.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {

  try {
    const mailOptions = {
      from: `${ENV.EMAIL_FROM_NAME} <${ENV.EMAIL_FROM}>`,
      to: email,
      subject: "Welcome to Real-time Chat Application!",
      html: createWelcomeEmailTemplate(name, clientURL),
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Welcome email sent via Brevo");
  } catch (error) {
    console.error("❌ Brevo email error:", error);
    throw new Error("Failed to send welcome email");
  }
};
