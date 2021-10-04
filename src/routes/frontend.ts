import { Router } from 'express';
var router = Router();

//@ts-ignore
router.get('/', (req, res) => {
    res.send('Welcome to Linky!');
});

export default router;
