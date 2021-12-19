import { Response } from 'express';
import { LocationServices } from '../services/location.service';

export class LocationController {

    private locationServices: LocationServices;

    constructor() {
        this.locationServices = new LocationServices();
    }

    public create = async (req: any, res: Response) => {
        const body = req.body;
        try {
            const data = await this.locationServices.create(body);
            res.status(200).send(data);
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    }
}