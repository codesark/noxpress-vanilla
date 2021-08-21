import dotenv from 'dotenv';

// import the configs from .env file as process.env.VAR_NAME
dotenv.config()

export default {
    NODE_ENV            : process.env.NODE_ENV                              || 'development',
    PORT                : parseInt(<string>process.env.PORT)                || 3000,
    SITE_NAME           : process.env.SITE_NAME                             || 'NOXPRESS-VANILLA',
    // MONGODB_URL         : process.env.HOST                                  || 'mongodb://localhost/noxpress',
}