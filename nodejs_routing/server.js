const express       = require('express'),
bodyParser      = require('body-parser'),
cors            = require('cors'),  
router          = require('./router'),
app             = express(),
port            = 3000;

class Server {

constructor() {
    this.initExpress();
    this.initRoutes();
    this.start();
}

start() {
    app.listen(port, (err) => {
        console.log(`Server is started on ${port}`);
    });
}

initExpress() {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    process.on('uncaughtException', (err) => {
        if (err) console.log(err, err.stack);
    });
}

initRoutes() {
   app.use('/',router);
}

}

new Server();