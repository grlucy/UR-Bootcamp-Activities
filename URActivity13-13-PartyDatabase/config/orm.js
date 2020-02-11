const connection = require("./connection");

const orm = {
  selectColumn: function(column, table, cb) {
    const query = `SELECT ?? FROM ??`;
    connection.query(query, [column, table], function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  selectWhere: function(table, column, where, cb) {
    const query = `SELECT * FROM ?? WHERE ?? = ?`;
    connection.query(query, [table, column, where], function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  innerJoin: function(selection, table1, table2, join1, join2, cb) {
    const query = `SELECT ?? FROM ?? AS t1 INNER JOIN ?? AS t2 ON t1.?? = t2.??`;
    connection.query(query, [selection, table1, table2, join1, join2], function(
      err,
      res
    ) {
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;
