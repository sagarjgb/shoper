import express from "express"; // const express = require('express')
import data from "./data.js"; // .js in express

const app = express(); // express() is a function which returns a object

// respond with  when a GET request is made to the api/products
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 5000;

// server will be ready and start responding to frontend
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
