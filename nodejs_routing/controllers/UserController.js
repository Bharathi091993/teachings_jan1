class User {
    constructor(router) {
        router.post('/user/name', this.getUserName);
        router.post('/user/:val', this.getParamValue);
        router.delete('/user/:id', this.deleteById);
    }

    getUserName(req, res) {
        const name = req.body.name;
        res.json({data:{name}});
    }

    getParamValue(req, res) {
        const name = req.params.val;
        res.json({data:`Parameter value is ${name}`});
    }

    deleteById(req, res) {
        const id = req.params.id;
        res.json({data:`User ID to delete  is ${id}`});
    }

}

module.exports = User;