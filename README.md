# Generic Neo4j GraphQL Endpoint

Simple GraphQL server for automatic schema generation and querying from a Neo4j database. See the official Neo4j [GraphQL Toolkit](https://neo4j.com/docs/graphql/current/getting-started/toolbox/) for more info.

## Try it out

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjalakoo%2Fneo4j-graphql-server%2F&env=NEO4J_URI,NEO4J_USERNAME,NEO4J_PASSWORD)

## Requirements

Environment variables need to be made available. One option is to rename the .env.example file to .env and add the required values.

Values used:

```
NEO4J_URI=
NEO4J_PASSWORD=
NEO4J_USERNAME=neo4j
READ_ONLY=true
```

## Local Running

```
npm install
node index.js
```
