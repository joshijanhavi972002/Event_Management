import { Request, Response } from "express";
import { editEvent, getEventById, deleteEvent, saveEvent, searchEvent ,getEventAll} from "../service/event.service";

export const addEvent = async (req: Request, res: Response) => {
  try {

    const newEvent = await saveEvent(req, res);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = await editEvent(req, res);
    res.status(201).json(newEvent);
  } catch (err) {
    console.log( err)
    res.status(400).json(err);
  }
};

export const deleteEvents = async (req: Request, res: Response) => {
    try {
      const newEvent = await deleteEvent(req, res);
      res.status(201).json({newEvent ,message:"Record Deleted Successfully"});
    } catch (err) {
      res.status(400).json(err);
    }
  };

  export const findById = async (req: Request, res: Response) => {
    try {
      const newEvent = await getEventById(req, res);
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  export const findandSearchEvents = async (req: Request, res: Response) => {
    try {
      const newEvent = await searchEvent(req, res);
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  export const findAll = async (req: Request, res: Response) => {
    try {
      const newEvent = await getEventAll(req, res);
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(400).json(err);
    }
  };