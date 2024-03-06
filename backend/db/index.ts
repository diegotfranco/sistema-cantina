import { Pool } from 'pg';
import { config } from 'dotenv';
config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, _client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const query = async (text: any, params: any) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('executed query', { text, duration, rows: res.rowCount });

  return res;
};

export const getClient = async () => {
  const client = await pool.connect();
  const query = client.query;
  const release = client.release;

  // set a timeout of 5 seconds, after which we will log this client's last query
  const timeout = setTimeout(() => {
    console.error('A client has been checked out for more than 5 seconds!');
    // console.error(`The last executed query on this client was: ${client.lastQuery}`);
  }, 5000);

  // // monkey patch the query method to keep track of the last query executed
  // client.query = (...args) => {
  //   client.lastQuery = args;

  //   return query.apply(client, args);
  // };

  client.release = () => {
    clearTimeout(timeout);

    client.query = query;
    client.release = release;
    return release.apply(client);
  };

  return client;
};
