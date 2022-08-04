import mongoose from "mongoose";
import * as schema from './schema';

export function addToDatabase(schemaData: any) { 
    const newSchema = new schema.Schema({})
    newSchema.save()
        .then((result: any) => { return result; });
}

export function retreiveFromDatabase() {

}


export function removeFromDatabase() {

}

export function updateDatabase() {
    
}