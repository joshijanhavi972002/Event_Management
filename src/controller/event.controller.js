"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findandSearchEvents = exports.findById = exports.deleteEvent = exports.updtaeEvent = exports.addEvent = void 0;
const event_service_1 = require("../service/event.service");
const addEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield (0, event_service_1.saveEvent)(req, res);
        res.status(201).json(newEvent);
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.addEvent = addEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield (0, event_service_1.editEvent)(req, res);
        res.status(201).json(newEvent);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
exports.updateEvent = updateEvent;
const deleteEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield (0, event_service_1.removeEvent)(req, res);
        res.status(201).json({newEvent , message:"Record Deleted Successfully"});
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.deleteEvents = deleteEvents;
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield (0, event_service_1.getEventById)(req, res);
        res.status(201).json(newEvent);
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.findById = findById;
const findandSearchEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield (0, event_service_1.searchEvent)(req, res);
        res.status(201).json(newEvent);
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.findandSearchEvents = findandSearchEvents;

const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield (0, event_service_1.getEventAll)(req, res);
        res.status(201).json(newEvent);
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.findAll = findAll;
