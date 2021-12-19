import { LocationController } from '../controller/location.controller';
import { validateCreateLocation } from '../utils';


export class Routes {
    private routes;
    private locationController: LocationController;

    constructor() {
        this.locationController = new LocationController();
    }

    public init(express) {
        this.routes = express.Router();

        this.routes
            .route('/location')
            .post(validateCreateLocation, this.locationController.create)
    }

    public getRoutes() {
        return this.routes;
    }
}
