import Event from "../models/event";
import { Router, Request, Response } from "express";

export const saveEvent = async (req: Request, res: Response) => {
  try {
    const { eventName, eventDate, organizer, email, phone, location } =
      req.body;

    const newEvent = await Event.create({
      eventName,
      eventDate,
      organizer,
      email,
      phone,
      location,
    });
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const editEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedEvent) {
      res.json(updatedEvent);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(400).json("something went wrong");
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (deletedEvent) {
      res.status(204).send();
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(400).json("something went wrong");
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(400).json("something went wrong");
  }
};

export const searchEvent = async (req: Request, res: Response) => {
  try {
    const { eventName, organizer, date } = req.query;
    let filter: any = {};

    if (eventName) {
      filter.eventName = new RegExp(eventName as string, "i");
    }

    if (organizer) {
      filter.organizer = new RegExp(organizer as string, "i");
    }

    if (date) {
      filter.eventDate = new Date(date as string);
    }

    const events = await Event.find(filter);
    res.json(events);
  } catch (err) {
    res.status(400).json("something went wrong");
  }
};

export const getEventAll = async (req: Request, res: Response) => {
  try {
    const event = await Event.find();
    if (event) {
      res.json(event);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(400).json("something went wrong");
  }
};
