import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://talhaarshad010:talhaarshad010@cluster0.mhxllmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

// Contact Schema for MongoDB
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite in development (useful in Next.js)
export const ContactModel =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// Connect to MongoDB
export async function connectToMongoDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI!);
      console.log("Connected to MongoDB successfully");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// Type definition for contact data
interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// MongoDB Storage Implementation
export class MongoStorage {
  private connected = false;

  constructor() {
    this.init();
  }

  private async init() {
    if (!this.connected) {
      await connectToMongoDB();
      this.connected = true;
    }
  }

  async saveContact(contactData: ContactData) {
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

// Export instance
export const mongoStorage = new MongoStorage();
