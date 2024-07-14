import express, { query } from "express"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import bodyParser from "body-parser"
import { prismaclient } from "../client/db"
import { User } from "./user"


export async function initGraphqlServer() {
    const app = express()

    app.use(bodyParser.json())



    const graphqlServer = new ApolloServer({
        typeDefs: `
        ${User.types}
        type Query {
       ${User.queries}
        }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
            },


        }
    })
    await graphqlServer.start();
    app.use("/graphql", expressMiddleware(graphqlServer));
    return app;
}