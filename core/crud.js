const fs = require('fs');
const DB_FILE_PATH = './core/db';

console.log("[crud]");

function create(content) {
  fs.writeFileSync(DB_FILE_PATH, content)
  return content;
}

// SIMULATION
console.log(create('HOJE EU PRECISO GRAVAR AULAS hehe'));