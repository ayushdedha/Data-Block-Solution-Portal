import express from 'express'
import { getDevices, postDevices, deleteDevices } from '../controllers/DevicesControllers.js'

let router = express.Router();

router.get('/devices', getDevices);
router.post('/devices', postDevices);
router.delete('/devices/:id', deleteDevices);

export default router;