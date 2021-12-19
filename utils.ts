import { check, validationResult } from "express-validator"
import { LATLONG, LATLONG_ERROR } from './consts/index';


const validateCreateLocation = [
    check(LATLONG, LATLONG_ERROR).isLength({ min: 10, max: 50 }),
    (req, res,next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array().map(error => error.msg) });
        }
    next();
  },
]

export {
    validateCreateLocation
}