import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
    res.send("GraphQL is amazing!");
});

const root = {
    product: () => {
        return {
            id: 211121,
            name: "widget",
            description: "Widget for your garden",
            price: 21.21,
            soldout: false,
        };
    },
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(8080, () =>
    console.log("Running server on port localhost:8080/graphql")
);
