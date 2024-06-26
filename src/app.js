"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const configuration_1 = __importDefault(require("./config/configuration"));
const event_1 = __importDefault(require("./routes/event"));
const app = (0, express_1.default)();
// Connect to the database
(0, configuration_1.default)();
app.use(body_parser_1.default.json());
app.use("/events", event_1.default);
exports.default = app;
