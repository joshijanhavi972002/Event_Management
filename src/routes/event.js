"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controller = require("../controller/event.controller");
const router = (0, express_1.Router)();

router.post("/add", event_controller.addEvent);
router.put("/update/:id", event_controller.updateEvent);
router.delete("/delete/:id", event_controller.deleteEvents);
router.get("/list/:id", event_controller.findById);
router.get("/search", event_controller.findandSearchEvents);
router.get("/allList",  event_controller.findAll);


exports.default = router;
