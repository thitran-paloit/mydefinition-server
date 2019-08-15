const Definition = require('../models').Definition;
const sequelize = require('sequelize');
const Op = sequelize.Op;
const moment = require('moment');

function getById(id) {
    return Definition.findOne({
        where: {
            id: id
        }
    });
}

module.exports = {
    async get(req, res) {
        try {
            const defintion = await getById(req.params.id);
            return res.status(200).send(defintion);
        } catch (e) {
            return res.status(404).send({
                message: 'Definition not found',
                trace: e.message
            });
        }
    },
    async list(req, res) {
        const definitions = await Definition.findAll({});
        return res.status(200).send(definitions);
    },
    async request(req, res) {
        const definitions = await Definition.findAll({
            where: {
                lastCheckedAt: {
                    [Op.or]: [
                        {$lt:  sequelize.fn('dateCompute')},
                        null
                    ]
                }
            },
            limit: 10
        });

        return res.status(200).send(definitions);
    },
    async create(req, res) {
        const definition = await Definition.create({
            name: req.body.name,
            definition: req.body.definition
        });

        return res.status(201).send(definition);
    },
    async hit(req, res) {
        const defintion = await getById(req.params.id);
        Definition.update({
            counter: ++defintion.counter,
            lastCheckedAt: moment().add(defintion.counter, 'days').format('YYYY-MM-DD hh:mm:ss')
        }, {
            where: {
                id: defintion.id,
            }
        });

        res.status(200).send({
            success: true
        });
    }
}