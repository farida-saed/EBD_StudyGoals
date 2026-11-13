const express = require("express");
const router = express.Router();
const {
  getExams,
  createExam,
  updateExam,
  deleteExam,
} = require("../controllers/examController");

// Farida Sherif's login middleware (we will double-check its exact filename once she pushes it)
const auth = require("../middleware/auth");

router.use(auth);

router.get("/", getExams);
router.post("/", createExam);
router.put("/:id", updateExam);
router.delete("/:id", deleteExam);

module.exports = router;