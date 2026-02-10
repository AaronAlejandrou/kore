import { leads, type InsertLead, type Lead } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    if (!db) {
      throw new Error("Database not configured");
    }
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }
}

export class MemoryStorage implements IStorage {
  private leads: Lead[] = [];
  private nextId = 1;

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const lead: Lead = {
      id: this.nextId++,
      createdAt: new Date(),
      ...insertLead,
    };

    this.leads.push(lead);
    return lead;
  }
}

export const storage: IStorage = db ? new DatabaseStorage() : new MemoryStorage();
