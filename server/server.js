const mongoose = require('mongoose');
const fastify = require('fastify')({ logger: true });
const routes = require('./routes');
const path = require('path');
const {
    parsed: { DB_USER, DB_PW, DB_DOMAIN, DB_PROJECT }
} = require('dotenv').config({ path: '.env.local' });

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '..', 'dist')
});

// connect to mongodb atlas
const connectionString = `mongodb+srv://${DB_USER}:${DB_PW}@${DB_DOMAIN}.orplk.mongodb.net/?retryWrites=true&w=majority&appName=${DB_PROJECT}`;
mongoose
    .connect(connectionString, {})
    .then(() => console.log('MongoDB connected'))
    .catch((e) => console.log('MongoDB could not be connected due to ', e));

// Register models
// require('./models/Thing'); // todo: confirm this is the correct way to register models

// handles GET / request
fastify.get('/', async (request, reply) => {
    try {
        return reply.sendFile('index.html');
    } catch (e) {
        console.log(e);
    }
});

// iterating over all the routes and registering them with fastify
routes.forEach((route) => fastify.route(route));

// launching server at port : 3000 in local environment
fastify.listen(
    { port: process.env.PORT || 3000 },
    /* '0.0.0.0',  */ (err) => {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
        console.log(`server running at ${fastify.server.address().port}`);
    }
);
