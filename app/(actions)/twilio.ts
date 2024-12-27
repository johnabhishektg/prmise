"use server";

import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function sendWhatsAppMessage() {
  try {
    const message = await client.messages.create({
      body: "Hello, there!",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+9741828041",
    });
    return { success: true, messageId: message.sid };
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}
