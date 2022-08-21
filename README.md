# tjproxy
A simple proxy to extend osnova api

## How to run on local

1. `git clone https://github.com/ColdMagi/tjproxy.git`
2. `cd tjproxy`
3. `npm install`
4. `npm run start`

> runs local on port 5000, can be changed at [server-local.js#5](https://github.com/ColdMagi/tjproxy/blob/c27101be83a3e150a66ff0f46b97467e7e5c3521/server-local.js#L5)

## Deploy

1. Fork this repo
2. Log in at [Netlify](https://www.netlify.com/)
3. Select forked repo

> api proxy available at `https://{site}.netlify.app/.netlify/functions/server`, where {site} is auto-generated site name
