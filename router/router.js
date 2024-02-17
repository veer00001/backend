import express from 'express'

import { getworkdata, getmessgeData, deletemessage } from '../controller/workdata.js'

const router = express.Router();




router.get('/workdata', getworkdata)

router.get('/message', getmessgeData)

router.delete('/deletemessage/:_id', deletemessage);



export default router; 