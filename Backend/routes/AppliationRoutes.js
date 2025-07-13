import express from 'express'
import { addDevice } from '../controllers/ApplicationControllers.js'

const router = express.Router();
router.post('/device', addDevice);

export default router