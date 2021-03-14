import { exec } from './App';

const fileName = process.argv[2] ?? undefined

console.log(exec(fileName));