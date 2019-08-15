const { Definition } = require('../controllers');

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to API!',
    }));

    app.get('/api/definition/request', Definition.request);

    app.get('/api/definition', Definition.list);
    app.get('/api/definition/:id', Definition.get);
    app.post('/api/definition', Definition.create);
    app.put('/api/definition/:id/hit', Definition.hit);
}