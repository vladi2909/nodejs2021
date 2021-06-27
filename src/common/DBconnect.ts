import options from './armconfig';
import { createConnection } from 'typeorm';
import { admin } from '../resources/admin/admin';

const connectToDB = async () => {
    let connection;
  
    try {
      connection = await createConnection(options);
      
      if (!connection.isConnected) {
        await connection.connect();
      }

      console.log('Succesfully connected');
    } catch (err) {
        console.error('Connection error!', err);
    }
};

export const TryDBConnect = async (cb: () => void): Promise<void> => {
  try {
    await connectToDB();
    await admin();
    cb();
  } catch (err) {
    console.error('DB connection error!', err);
    }
};
