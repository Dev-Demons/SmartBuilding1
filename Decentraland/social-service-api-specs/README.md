# Social Service API Definition

API definition for the Social Service implementation.  

Check out the public API docs [here](https://social-service-api-specs.pages.dev/)

## Working on the Social Service API Definition

### Install

1. Install [Node JS](https://nodejs.org/).
2. Clone this repo and run `npm install` in the repo root.

### Usage

#### `npm start`
Starts the reference docs preview server.

#### `npm run build`
Bundles the definition to the dist folder.

#### `npm test`
Validates the definition.

## Readocly
This repository uses [Redocly](https://redoc.ly/) to generate API reference documentation

The `.redocly.yaml` controls settings for various
tools including the lint tool and the reference
docs engine.  Open it to find examples and
[read the docs](https://redoc.ly/docs/cli/configuration/)
for more information.

## How to Contribute

To add an endpoint, you need to:

1. List the path in the openapi/paths directory at https://github.com/decentraland/social-service-api-specs/tree/main/openapi/paths.
2. Reference it in the social.yaml file at https://github.com/decentraland/social-service-api-specs/blob/main/openapi/social.yaml.
3. Define it in the friends (*) schema in the components directory at https://github.com/decentraland/social-service-api-specs/tree/main/openapi/components/schemas/friends.
4. Add an example in the friends (*) examples directory at https://github.com/decentraland/social-service-api-specs/tree/main/openapi/components/examples/friends.

Note: You may need to create new folders that align with your contribution.