import {v4 as uuidv4} from 'uuid';
import { Entity, Identifier } from '../io-manager/IOManager';

export default class Nugget extends Entity<NuggetPayload> {
    constructor(id: Identifier = uuidv4()) {
        super(id);
        this.payload = {
            title: "",
            details: "",
            priority: "MODERATE",
            dueDateTime: new Date()
        };
        this.version = 0;
    }
}

export type NuggetPayload = {
    title: String;
    details: String;
    priority: Priority;
    dueDateTime: Date;
}

export type Priority = "INSIGNIFICANT" | "LOW" | "MODERATE" | "SEVERE" | "CRITICAL";