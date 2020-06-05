import express from "express";
import grapgqlHTTP from "express-graphql";
import { schema } from "./models";
import { ApolloServer } from "apollo-server-express";

const app = express();

app.get("/", (req, res) => {
  res.send("Servdior esta listo");
});

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

export default app;
