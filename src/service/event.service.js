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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEvent = exports.getEventById = exports.removeEvent = exports.editEvent = exports.saveEvent = void 0;
const event_1 = __importDefault(require("../models/event"));
const saveEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventName, eventDate, organizer, email, phone, location } = req.body;
        const newEvent = yield event_1.default.create({
            eventName,
            eventDate,
            organizer,
            email,
            phone,
            location,
        });
        res.status(201).json(newEvent);
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.saveEvent = saveEvent;
const editEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedEvent = yield event_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedEvent) {
            res.json(updatedEvent);
        }
        else {
            res.status(404).send("Event not found");
        }
    }
    catch (err) {
        res.status(400).json("something went wrong");
    }
});
exports.editEvent = editEvent;
const removeEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedEvent = yield event_1.default.findByIdAndDelete(req.params.id);
        if (deletedEvent) {
            res.status(204).send();
        }
        else {
            res.status(404).send("Event not found");
        }
    }
    catch (err) {
        res.status(400).json("something went wrong");
    }
});
exports.removeEvent = removeEvent;
const getEventById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield event_1.default.findById(req.params.id);
        if (event) {
            res.json(event);
        }
        else {
            res.status(404).send("Event not found");
        }
    }
    catch (err) {
        res.status(400).json("something went wrong");
    }
});
exports.getEventById = getEventById;
const searchEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventName, organizer, date } = req.query;
        let filter = {};
        if (eventName) {
            filter.eventName = new RegExp(eventName, "i");
        }
        if (organizer) {
            filter.organizer = new RegExp(organizer, "i");
        }
        if (date) {
            filter.eventDate = new Date(date);
        }
        const events = yield event_1.default.find(filter);
        res.json(events);
    }
    catch (err) {
        res.status(400).json("something went wrong");
    }
});
exports.searchEvent = searchEvent;

const getEventAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield event_1.default.find();
        if (event) {
            res.json(event);
        }
        else {
            res.status(404).send("Event not found");
        }
    }
    catch (err) {
        res.status(400).json("something went wrong");
   
    }
});
exports.getEventAll = getEventAll;
