import {createConnection} from 'typeorm';
import {Film} from '../db/models/Film';

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables
export const connect = async () => {
  const connection = await createConnection();
};
