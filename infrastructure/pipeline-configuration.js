const {
    HEROKU_APP_NAME = 'iosr2017menu'
} = process.env;

module.exports = {
    name: 'iosr2017-menu-pipeline',
    apps: {
        staging: `${HEROKU_APP_NAME}-staging`,
        production: `${HEROKU_APP_NAME}-production`
    }
};