import { Router } from 'express';
import checkUser, { funcStatus } from '../functions/checkUser';
import register from '../functions/register';
import bcrypt from 'bcrypt';
var router = Router();

router.post('/register', async (req, res) => {
    const { email, pass } = req.body ?? {};
    if (!email || !pass) return res.status(400).send('Bad request');

    var check = await checkUser(email);
    if ((check === funcStatus.EXISTS))
        return res.status(409).send('User already exists');
    await register(email, pass);
    return res.send("Success")
});

router.post('/login', async (req, res) => {
    const { email, pass } = req.body ?? {};
    if (!email || !pass) return res.status(400).send('Bad request');

    let check = await checkUser(email);
    if ((check === funcStatus.NOT))
        return res.status(404).send('User Not Found');
    let userData = await checkUser(email, true);

    if(userData) {
        //@ts-ignore

        let data = await bcrypt.compare(pass, userData.password);
        if(data === false)
            return res.status(401).send("Access Denied")
        //@ts-ignore
        res.send(`{"email" : "${userData.email}"}`)
    } else {
        return res.status(404).send('User not found')
    }

});

export default router;
