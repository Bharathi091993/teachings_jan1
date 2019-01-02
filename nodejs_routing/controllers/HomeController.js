class Home {
    constructor(router) {
        router.get('/', this.index);
    }

    index(req, res) {
        res.json({data:"Hello World"});
    }

}

module.exports = Home;