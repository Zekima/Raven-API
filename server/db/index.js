const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'si4jW.6lx.IcIOkJCd^lE1W=',
    user: 'u3_RNmdivdAPb',
    database: 's3_stats',
    host: 'panel.ravensmp.net',
    port: '3306',
});

let chirprdb = {};

chirprdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM leaderboard', (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

chirprdb.one = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM leaderboard WHERE name = ?', [name], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = chirprdb;