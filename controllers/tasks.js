import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({count: tasks.length, tasks})
        // res.status(200).json('getAllTasks working properly.')
    } catch (error) {
        res.status(500).json(error)
    }
};

export const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json(error)
    }
};

export const createTask = async (req, res) => {
    try {
        const newTask = new Task({
            name: req.body.name,
            completed: req.body.completed
        })

        await newTask.save();

        const tasks = await Task.find();

        res.status(201).json({count: tasks.length, tasks})
    } catch (error) {
        res.status(500).json(error)
    }
};

export const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id, {
            name: req.body.name,
            completed: req.body.completed
        })
        res.status(201).json({task})
        // res.status(200).json('updateTask working properly.')
    } catch (error) {
        res.status(500).json(error)
    }
};

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json('Task has been deleted.')
    } catch (error) {
        res.status(500).json(error)
    }
};
