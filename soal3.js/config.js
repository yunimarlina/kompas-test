const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'kompas_test',
  password: 12345,
  port: 5432,
})
client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

module.exports = client