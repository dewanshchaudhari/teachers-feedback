const express = require('express');
const router = express.Router();
require('dotenv').config();
const monk = require('monk');
const db = monk('localhost/assignment-1');
const feedback = db.get('feedback');
const Joi = require('joi');
const schema = Joi.object({
    name: Joi.string().required(),
    subject: Joi.string().required(),
    Competency: Joi.number().integer().min(0).max(10).required(),
    'Teaching Skills': Joi.number().integer().min(0).max(10).required(),
    Punctuality: Joi.number().integer().min(0).max(10).required(),
    'Practical Knowledge': Joi.number().integer().min(0).max(10).required(),
    Approachability: Joi.number().integer().min(0).max(10).required(),
    'Class Control': Joi.number().integer().min(0).max(10).required(),
});

router.get('/', async (req, res, next) => {
    const feed = await feedback.find({});
    res.json(feed);
});
router.get('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const item = await feedback.findOne({
            _id: id
        });
        if (!item) return next();
        res.json(item);
    } catch (error) {
        next(error);
    }
});
router.post('/', async (req, res, next) => {
    try {
        const secret = req.query.secret === process.env.SECRET ? true : false;
        if (!secret)
            return next(error);
        const feed = await schema.validateAsync(req.body);
        const inserted = await feedback.insert(feed);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const feed = await schema.validateAsync(req.body);
        const {
            id
        } = req.params;
        const item = await feedback.findOne({
            _id: id
        });
        if (!item) return next();
        item['Competency'] += feed['Competency'];
        item['Teaching Skills'] += feed['Teaching Skills'];
        item['Punctuality'] += feed['Punctuality'];
        item['Practical Knowledge'] += feed['Practical Knowledge'];
        item['Approachability'] += feed['Approachability'];
        item['Class Control'] += feed['Class Control'];
        item['count']++;
        await feedback.update({
            _id: id
        }, {
            $set: item
        });
        res.json(item);
    } catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        feedback.remove({
            _id: id
        });
        res.json({
            message: 'SUCCESS'
        });
    } catch (error) {
        next(error);
    }
});
module.exports = router;