const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { ApolloServer } = require("apollo-server-express");
const fs = require('fs');
const db = require("./db");

const port = process.env.PORT || 9000;
const app = express();

const typeDefs = fs.readFileSync("./schema.graphql", {encoding: 'utf-8'});
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

app.use(cors(), bodyParser.json());

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
    
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}${server.graphqlPath}`);
    });
}

startServer().catch((error) => {
    console.error("Error starting server:", error);
});
