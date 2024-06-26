import { Router } from "express";
import {
  addEvent,
  deleteEvents,
  findById,
  findandSearchEvents,
  updateEvent,
  findAll
} from "../controller/event.controller";
const router = Router();

router.post("/add", addEvent);
router.put("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvents);
router.get("list/:id", findById);
router.get("/search", findandSearchEvents);
router.get("/allList",  findAll);

export default router;
