// const pg = require('pg');
// const { connect } = require('../src/agenda/routes');
// const pool = new pg.Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'photosano',
//   password: 'mojosari',
//   port: 5433,
// })

// pool.connect(function(err, client, done){
//   if(err){
//     console.log ('Tidak Bisa Connect' + err);
//   }
//   console.log ('Bisa Connect');
// })

// module.exports = pool

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'photosano',
  password: 'mojosari',
  port: 5433,
})
module.exports = pool