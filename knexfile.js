module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './dev.sqlite3'
      },
     
      },
      migrations: {
        directory: "./migrations",
      },
      seeds: {
        directory: "./seeds",
      },
       pool: {
        afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done);
        },
    },

  };