import express from 'express'
import { getDevices, deleteDevices } from '../controllers/DevicesControllers.js'

let router = express.Router();

router.get('/devices', getDevices);
router.delete('/devices/:id', deleteDevices);

export default router;