var Sequelize = require('sequelize');

var db = new Sequelize('quicknote', 'root', 'zubur1', {
  host: "192.168.109.130"
});

var Note = db.define('notes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: Sequelize.STRING,
    field: 'text'
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: true
});

Note.sync();

module.exports = Note;
