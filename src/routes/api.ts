import { Router } from 'express';
var router = Router();

//@ts-ignore
router.get('/getWebsites', (req, res) =>{
    res.send('Welcome to APIs')
});

export default router;