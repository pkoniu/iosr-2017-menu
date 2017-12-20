module.exports = (menuRepo) => {
    return (req, res, next) => {
        return menuRepo.getAll()
            .then(menuItems => {
                return res.status(200).json(menuItems);
            }).catch(next);
    };
};
