import { Router } from "express";
import {getContactos , deleteContacto , getContactoById , postContacto ,putContacto} from '../Controllers/contactos.controller.js';

const router = Router();

router.get('/contactos', getContactos);
router.get('/contactos/:id', getContactoById);
router.post('/contactos', postContacto);
router.delete('/contactos/:id', deleteContacto);
router.put('/contactos/:id', putContacto);



export default router;