import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

// Contact Schema for MongoDB
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const ContactModel = mongoose.model("Contact", contactSchema);

// Connect to MongoDB
export async function connectToMongoDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB successfully");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// MongoDB Storage Implementation
export class MongoStorage {
  constructor() {
    connectToMongoDB();
  }

  async saveContact(contactData: { name: string; email: string; subject: string; message: string }) {
    try {
      const contact = new ContactModel(contactData);
      const savedContact = await contact.save();
      return savedContact;
    } catch (error) {
      console.error("Error saving contact:", error);
      throw error;
    }
  }

  async getContacts() {
    try {
      const contacts = await ContactModel.find().sort({ createdAt: -1 });
      return contacts;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      throw error;
    }
  }
}

export const mongoStorage = new MongoStorage();