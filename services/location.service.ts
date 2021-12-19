const GeoLocation = require('../model/geolocation.model');

export class LocationServices {

    public create = async (body) => {
        const newLocation = GeoLocation({
            lat_long: body.lat_long,
            date: new Date()
        })
        await newLocation.save()

        return newLocation;
    }

}