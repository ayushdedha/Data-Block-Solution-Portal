import express from 'express'
import { getPolicy, updatePolicy } from '../controllers/PolicyControllers.js'

let router = express.Router();

router.get('/policy', getPolicy);
router.put('/policy/:id', updatePolicy);

export default router;