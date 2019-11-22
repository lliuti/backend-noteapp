module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgresdocker',
  database: 'NoteApp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}