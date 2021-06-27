import options from './armconfig';
import { createConnection } from 'typeorm';

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
    cb();
  } catch (err) {
    console.error('DB connection error!', err);
    }
};
