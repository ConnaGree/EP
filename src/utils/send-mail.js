import nodemailer from "nodemailer";

// Configure the transporter
const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "", // Replace with your Gmail address
    pass: "", // Replace with your app password
  },
});

/**
 * Sends an email using Nodemailer.
 *
 * @param {string} to - Recipient's email address
 * @param {string} subject - Subject of the email
 * @param {string} message - HTML content of the email
 * @returns {Promise<void>} - Resolves on success, rejects on failure
 */
export async function sendMail(to, subject, message) {
  try {
    const info = await transporter.sendMail({
      from: '"Ebenezer Woldehana" <example@gmail.com>', // Customize the sender name
      to,
      subject,
      html: message,
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error; // Rethrow the error if needed
  }
}

/**
 * Sends the response to the client and notifies the developer.
 *
 * @param {string} clientEmail - The client's email
 * @param {string} clientName - The client's name
 * @param {string} queryDetails - The details of the client's query
 */
export async function sendQueryResponse(clientEmail, clientName, queryDetails) {
  // Send email to client
  const clientMessage = clientEmailTemplate(clientName, queryDetails);
  await sendMail(clientEmail, "Thank You for Reaching Out", clientMessage);

  // Send notification to developer
  const developerMessage = developerEmailTemplate(
    clientName,
    clientEmail,
    queryDetails
  );
  await sendMail(
    "developer@example.com",
    "New Query Submitted",
    developerMessage
  );
}
