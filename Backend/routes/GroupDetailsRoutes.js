import express from 'express'
import { getGroupDetails, postGroupDetails, updateGroupDetails, deleteGroupDetails } from '../controllers/GroupDetailsControllers.js'

let router = express.Router();

router.get('/groupDetails', getGroupDetails);
router.post('/groupDetails', postGroupDetails);
router.put('/groupDetails/:id', updateGroupDetails);
router.delete('/groupDetails/:id', deleteGroupDetails);

export default router;