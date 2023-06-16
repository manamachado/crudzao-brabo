import fs from 'fs';
const DB_FILE_PATH = './core/db';

console.log('[crud]');

interface Todo {
  date: string;
  content: string;
  done: boolean;
}

function create(content: string) {
  const todo: Todo = {
    date: new Date().toISOString(),
    content: content,
    done: false
  }

  const todos: Array<Todo> = [
    ...read(),
    todo
  ]

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
    todos,
    dogs: []
  }, null, 2));

  return todos;
}

function read(): Array<Todo> {
  const dbString = fs.readFileSync(DB_FILE_PATH, 'utf-8');
  const db = JSON.parse(dbString || '{}');

  if (!db.todos) {
    return [];
  }
  
  return db.todos;
}

function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, '');
}

// SIMULATION
CLEAR_DB();
console.log(create('Primeira TODO'));
console.log(create('Segunda TODO'));
console.log(read());