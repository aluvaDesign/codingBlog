import { resolvers } from "./resolver/blog.resolver";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = importSchema("src/models/types/blog.gql");

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
