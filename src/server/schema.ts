import mongoose from "mongoose";
import { connectToDatabase } from './connect'
import { uri } from '../main'

export let setDatabase: boolean = false;
export let Schema: any = null;

export function setSchema(schemaData: any, schemaName: string) {
    Schema = mongoose.model(schemaName, schemaData);
    setDatabase = true;
    connectToDatabase(uri);
    
}