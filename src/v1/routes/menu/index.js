const express = require('express');

module.exports = (menuRepo) => {
    const app = express();

    app.get('/', require('./handlers/get-all')(menuRepo));
    app.get('/:id', require('./handlers/get-by-id')(menuRepo));
    app.post('/', require('./handlers/create-new')(menuRepo));
    app.delete('/:id', require('./handlers/delete-by-id')(menuRepo));
    app.patch('/:id', require('./handlers/update-by-id')(menuRepo));

    return app;
};
