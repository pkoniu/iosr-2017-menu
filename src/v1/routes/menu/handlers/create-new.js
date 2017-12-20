const _ = require('lodash');

module.exports = (ordersRepo) => {
    return (req, res, next) => {
        const newOrderDetails = _.get(req, 'body', {});

        if (Object.keys(newOrderDetails).length === 0) {
            return next({
                status: 400,
                message: 'New order details cannot be empty.'
            });
        }

        return ordersRepo.createNew(newOrderDetails)
            .then(creationResult => {
                return res.status(201).json(creationResult);
            }).catch(next);
    };
};
