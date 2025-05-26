import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendEmail, createContactEmailHTML } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    console.log("Contact request body:", req.body);
    try {
      // Validate the request body
      const validatedData = insertContactSchema.parse(req.body);

      // Save to storage (both memory and potentially MongoDB)
      const contact = await storage.createContact(validatedData);

      // Send email notification
      const emailHtml = createContactEmailHTML(
        validatedData.name,
        validatedData.email,
        validatedData.subject,
        validatedData.message
      );

      const emailSent = await sendEmail({
        to: "talhaarshad010@gmail.com", // Your email
        from: "albert.mathews@softappsio.ca", // Verified sender email
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: emailHtml,
        text: `New contact from ${validatedData.name} (${validatedData.email}): ${validatedData.message}`,
      });

      res.json({
        success: true,
        message: "Message sent successfully!",
        emailSent,
        contactId: contact.id,
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  });

  // Get all contacts endpoint (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;

    console.log("Subscribe request body:", req.body);

    if (!email || typeof email !== "string") {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    try {
      // Simple email notification HTML
      const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Subscriber</h2>
        <p>You have a new newsletter/email subscriber:</p>
        <p><strong>Email:</strong> ${email}</p>
      </div>
    `;

      const emailSent = await sendEmail({
        to: "talhaarshad010@gmail.com", // your personal inbox
        from: "albert.mathews@softappsio.ca", // must be verified or match Gmail app credentials
        subject: "New Subscriber",
        html,
        text: `New subscriber: ${email}`,
      });

      return res.json({
        success: true,
        message: "Subscription notification sent",
        emailSent,
      });
    } catch (err) {
      console.error("Subscription email failed:", err);
      return res
        .status(500)
        .json({ success: false, message: "Failed to subscribe" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
