import passport from 'passport';
import { Router } from "express";
import { signUp, login, getHome } from '../controller/user.controllers.js';
import { isLoggedIn } from '../middlewares/user.middlewares.js';

import { infoProcess } from "../controller/infoProcess.js"
import { randoms } from "../controller/randomProcess.js";

const router = Router();

const passportOptions = { badRequestMessage: 'falta username / password' };

router.post('/signup', signUp);

router.post('/login', passport.authenticate('login', passportOptions), login);

router.get('/home', isLoggedIn, getHome )

router.use("/info", infoProcess);
router.use("/randoms", randoms);


export default router;