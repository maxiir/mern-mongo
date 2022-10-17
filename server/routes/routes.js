import { Router } from "express";
import controller from "../controllers/controller.js"

const router = Router()


router.post('/api/newempleado',controller.saveEmpleados)

export default router;