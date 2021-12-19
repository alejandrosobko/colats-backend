const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

import { Routes } from './routes/location.routes';

const CORS_OPTIONS = {
    origin: '*',
    methods: [
        'POST',
    ],
    allowedHeaders: [
        'Content-Type',
    ],
};

export class App {

    private express;
    private router:Routes;

    constructor() {
        this.router = new Routes();
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Config Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json({limit: "50mb"}));
        this.express.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
        this.express.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors(CORS_OPTIONS));
    }

    // Init Routes.
    private routes(): void {
        this.router.init(express);
        this.express.use('/api/', this.router.getRoutes());
    }

    public getExpress: () => any = () => {
        return this.express;
    }
}
