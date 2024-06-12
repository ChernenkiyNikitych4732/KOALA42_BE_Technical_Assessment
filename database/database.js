const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://hvyvudcn:xvQqbJ22KEb7auJxdvpPyj5kbC@dontpanic.k42.app/postgres',
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => {
    console.error('Connection error', err.stack);
    process.exit(1);
  });

module.exports = client;