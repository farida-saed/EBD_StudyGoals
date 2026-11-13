const Exam = require("../models/Exam");

// Get the logged-in student's ID from Farida Sherif's auth middleware
const getUserId = (req) => req.user.id || req.user._id;

// 1. View all upcoming exams for this student
const getExams = async (req, res) => {
  try {
    const exams = await Exam.find({ user: getUserId(req) }).sort({
      date: 1,
      time: 1,
    });
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: "Failed to load exams", error: error.message });
  }
};

// 2. Add a new exam
const createExam = async (req, res) => {
  try {
    const { course, date, time, location } = req.body;

    if (!course || !date || !time || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExam = await Exam.create({
      user: getUserId(req),
      course,
      date,
      time,
      location,
    });

    res.status(201).json(newExam);
  } catch (error) {
    res.status(500).json({ message: "Failed to add exam", error: error.message });
  }
};

// 3. Edit an existing exam
const updateExam = async (req, res) => {
  try {
    const { id } = req.params;
    const { course, date, time, location } = req.body;

    const updatedExam = await Exam.findOneAndUpdate(
      { _id: id, user: getUserId(req) },
      { course, date, time, location },
      { new: true, runValidators: true }
    );

    if (!updatedExam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    res.status(200).json(updatedExam);
  } catch (error) {
    res.status(500).json({ message: "Failed to update exam", error: error.message });
  }
};

// 4. Delete an exam
const deleteExam = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExam = await Exam.findOneAndDelete({
      _id: id,
      user: getUserId(req),
    });

    if (!deletedExam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    res.status(200).json({ message: "Exam deleted", id });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete exam", error: error.message });
  }
};

module.exports = { getExams, createExam, updateExam, deleteExam };