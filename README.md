# Generic Neo4j GraphQL Endpoint

Simple GraphQL server for automatic schema generation and querying from a Neo4j database. See the official Neo4j [GraphQL Toolkit](https://neo4j.com/docs/graphql/current/getting-started/toolbox/) for more info.

## Requirements

Environment variables need to be made available. One option is to rename the .env.example file to .env and add the required values.

Values used:

```
# Neo4j (Required)
NEO4J_URI=
NEO4J_PASSWORD=
NEO4J_USERNAME=neo4j

# Config (Optional)
READ_ONLY=false
HTTPS_REDIRECT=false
ALLOW_INTROSPECTION=true
AUTO_TYPEDEFS=false

# BASIC AUTH (Optional)
BASIC_AUTH_USERNAME=
BASIC_AUTH_PASSWORD=
```

Var details:
| Var | Description | Value Type | Default Value | Required/Optional |
| --- | ----------- | ---------- | ------------- | ----------------- |
| NEO4J_URI | URI for Neo4j database connection | String | | Required |
| NEO4J_PASSWORD | Password for Neo4j database | String | | Required |
| NEO4J_USERNAME | Username for Neo4j database | String | neo4j | Required |
| READ_ONLY | Sets the GraphQL endpoint to read-only mode. False permits mutations | Boolean | false | Optional |
| HTTPS_REDIRECT | Enables HTTPS redirect | Boolean | false | Optional |
| ALLOW_INTROSPECTION | Allows GraphQL schema introspection | Boolean | true | Optional |
| AUTO_TYPEDEFS | Enables automatic type definitions. If false, update the graphql schemal in typedefs.js | Boolean | false | Optional |
| BASIC_AUTH_USERNAME | Username for basic authentication. Leave empty to disable basic auth | String | | Optional |
| BASIC_AUTH_PASSWORD | Password for basic authentication. Leave empty to disable basic auth | String | | Optional |

## Local Running

```
npm install
node index.js
```
