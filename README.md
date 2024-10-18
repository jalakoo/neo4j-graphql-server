# Generic Neo4j GraphQL Endpoint

Simple GraphQL server for automatic schema generation and querying from a Neo4j database. See the official Neo4j [GraphQL Toolkit](https://neo4j.com/docs/graphql/current/getting-started/toolbox/) for more info.

## Try it out

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?target=_blank)

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
