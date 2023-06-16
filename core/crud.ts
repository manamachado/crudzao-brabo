import fs from 'fs';
const DB_FILE_PATH = './core/db';

console.log('[crud]');

function create(content: string) {
  fs.writeFileSync(DB_FILE_PATH, content);
  return content;
}

// SIMULATION
console.log(create('created!'));