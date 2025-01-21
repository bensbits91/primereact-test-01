const mongoose = require('mongoose');
const fastify = require('fastify')({ logger: true });
const routes = require('./routes');
const path = require('path');
const {
    parsed: { MONGO_ATLAS_PW }
} = require('dotenv').config();

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '..', 'dist')
    // prefix: '/public/', // optional: default '/'
    // constraints: { host: 'example.com' } // optional: default {}
});

// connect to mongodb atlas
const connectionString = `mongodb+srv://spambrooks:${MONGO_ATLAS_PW}@cluster4benspersonalpro.orplk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4BensPersonalProject01`;
mongoose
    .connect(connectionString, {})
    .then(() => console.log('MongoDB connected'))
    .catch((e) => console.log('MongoDB could not be connected due to ', e));

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
