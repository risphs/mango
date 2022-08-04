import mongoose from "mongoose";
import { setDatabase } from './schema';

// Setup Server

export async function connectToDatabase(uri: string) {   
    if(setDatabase) {
        mongoose.connect(uri) // TODO: Fix this error
        console.log('Connected to database');
    }
}
