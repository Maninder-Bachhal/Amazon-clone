const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Jhf5PSIjT45MCbFV5iSL9vBJcEEYRC8NcYywzPqHVW9j5BBIjbgcNaCL6RSvx4Ny1ma4aF5tNLln5CYdVuXchaJ00RZv8yECv");
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));


// app.get("/next", (request, response) => response.status(200).send("hello world on next page"));
//i.e if we add /next in end of url it will generate the given text.


//  /payments/create is a end url generated in payment.js.

app.post("/payments/create", async (request, response) => {
    // total is vaiable inside /payments/create.
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);//it will be shown in VSCODE terminal.
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });

    // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// - Listen command
exports.api = functions.https.onRequest(app);
//Example endpoint
// we can run this by clicking on it.
// http://localhost:5001/challenge-7a130/us-central1/api
// http://localhost:5001/challenge-7a130/us-central1/api