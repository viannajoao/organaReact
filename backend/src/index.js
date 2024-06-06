/* eslint-disable no-unused-vars */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (res, req) =>{
  const filePath = path.join(__dirname, '..' ,'/index.html')
  res.sendFile(filePath)
})


app.listen("3000", ()=>{
  console.log("Server running in port 3000")
})