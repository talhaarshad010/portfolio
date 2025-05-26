import { UserModel, IUser } from "./models/User";
import { ContactModel, IContact } from "./models/Contact";

export const storage = {
  async getUser(id: string): Promise<IUser | null> {
    return await UserModel.findById(id).exec();
  },

  async getUserByUsername(username: string): Promise<IUser | null> {
    return await UserModel.findOne({ username }).exec();
  },

  async createUser(userData: {
    username: string;
    password: string;
  }): Promise<IUser> {
    const user = new UserModel(userData);
    return await user.save();
  },

  async createContact(contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<IContact> {
    const contact = new ContactModel(contactData);
    return await contact.save();
  },

  async getContacts(): Promise<IContact[]> {
    return await ContactModel.find().sort({ createdAt: -1 }).exec();
  },
};
