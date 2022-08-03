import * as mongoose from 'mongoose';
import { setDatabase } from './schema';

// Setup Server

export async function connectToDatabase(uri: string) {   
    if(setDatabase) {
        mongoose.connect(uri)
            .then((result) => {
                console.log('Connected to MongoDB') 
                // app.listen(port)
            })
            .catch((error) => console.log('An error occurred when trying to connect to MongoDB - ', error));
    }
}
