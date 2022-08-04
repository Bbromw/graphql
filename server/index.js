const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

//Load schema and resolvers

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const mongoDataMethods = require("./data/db");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
  });
  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bbrowm:QWErty123@tutorial.cozkorh.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();
startApolloServer();
