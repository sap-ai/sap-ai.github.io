(async () => {
  // Load sql.js from CDN (or you could also host this JS file on your site)
  const initSqlJs = await import('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/sql-wasm.js');

  const SQL = await initSqlJs.default({
    locateFile: file => `https://sap-ai.github.io/${file}`  // Host .wasm here
  });

  // Create a database
  const db = new SQL.Database();

  // Create a table and insert some data
  db.run(`
    CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT);
    INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
    INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com');
  `);
  function post(te, nm) {
    db.run("INSERT INTO " + te + "(v) VALUES ('" + nm + "');");
  }
  // Query the data
  function look
  const result = db.exec("SELECT * FROM users");

  // Log the results
  if (result.length > 0) {
    const columns = result[0].columns;
    const values = result[0].values;
    console.log("Users:");
    values.forEach(row => {
      let user = {};
      row.forEach((val, i) => user[columns[i]] = val);
      console.log(user);
    });
  } else {
    console.log("No data found.");
  }

  // Optional: Export the database as binary
  const binaryArray = db.export();
  console.log("DB saved to memory:", binaryArray);
})();

