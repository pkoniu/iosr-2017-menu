const express = require('express');

module.exports = (mongodb) => {
    const app = express();

    const menuRepo = require('./repositories/menu')(mongodb.collection('menu-items'));
    app.use('/menu/items', require('./routes/menu')(menuRepo));

    return app;
};