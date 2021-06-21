import postgresOptions from './armconfig';
import { createConnection } from 'typeorm';

const connectToDB = async () => {
    let connection;
  
    try {
      connection = await createConnection(postgresOptions);
      if (!connection.isConnected) {
        await connection.connect();
      }

      console.log('Connected postgresSql');
    } catch (err) {
        console.log('Error', err);
    }
};

export const TryDBConnect = async (cb: () => void): Promise<void> => {
  try {
    await connectToDB();
    cb();
  } catch (err) {
    console.log('DB connection error', err);
    }
}
