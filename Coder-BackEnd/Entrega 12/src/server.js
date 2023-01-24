// import express from 'express';
// import * as dotenv from 'dotenv';
// import { args } from "./config/procs.config.js";
// import cluster from "cluster"
// import os from "os"
const express=require("express");
const dotenv=require("dotenv");
const args=require("./config/procs.config.js");
const cluster= require("cluster");
const os = require("os")

dotenv.config();

const app = express();
const {modo,puerto} = args;

const numsCPUs=os.cpus().length;
// const cluster=args.cluster;



if (modo === "cluster" && cluster.isPrimary) {
  console.log(`Cantidad de nucleos del sistema: ${numsCPUs}`);
  console.log(`PID MASTER: ${process.pid}`);
  for (let i = 0; i < numsCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code) => {
    console.log(`Worker ${worker.process.pid} with code ${code}`);
    cluster.fork();
  });
} else {

  app.get('/api/randoms', (req, res) => {
    console.log('Resolving / endpoint');
    res.json({
      pid: process.pid,
      msg: `HOLA BIENVENIDO DESDE EL PUERTO ${PORT}`,
    });
  });
  
  app.get('/slow', function (req, res) {
    console.log(`PID => ${process.pid} will work slow`);
    let sum = 0;
    for (let i = 0; i < 6e9; i++) {
      sum += i;
    }
  
    res.json({
      pid: process.pid,
      sum,
    });
  });
  
  app.get('/dead', (req, res) => {
    res.json({ msg: 'OK' });
    console.log(`PID => ${process.pid} will die`);
    process.exit(0);
  });


  const PORT = puerto || 8080;
  
  app.listen(PORT, () =>
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
    )
  );
};