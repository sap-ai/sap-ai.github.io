const SQL = await initSqlJs({
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  // You can omit locateFile completely when running in node
  locateFile: file => `https://github.com/sap-ai/sap-ai.github.io/${file}`
});

// Create a database
const db = new SQL.Database();
function person(per) {
  db.run("CREATE TABLE name (a char); \
INSERT INTO hello VALUES ('" + per + "');");
}
