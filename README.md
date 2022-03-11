# NextStrapi

## GitHub

#### Add Repository Secrets

| KEY            | VALUE    |
| -------------- | -------- |
| APP_KEYS       | GUID [ ] |
| JWT_SECRET     | GUID     |
| API_TOKEN_SALT | GUID     |

## VPS Setup

1. Setup SSH
2. Install required packages
3. Setup GithubAction Runners

## Installation

1.  Run `yarn` to install all node_module
2.  Create a `.env` file and asign values

        cp apps/strapi/.env.example apps/strapi/.env

## Development

## Deployment

1. Setup SSL Certificates
2. Setup NGINX
3. Septup PM2
