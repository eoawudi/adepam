// student's schema.
// Provides data structure for student in mongoose dB
const mongodb = require("mongoose");

const Schema = mongodb.Schema;

const studentSchema = new Schema(
  "student",
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    gardian: {
      type: String,
      required: true,
    },
    cwa: {
      type: Number,
      default: 0.0,
    },
  },

  { timestamp: true }
);

const Student = mongodb.model("Student", studentSchema);

module.exports = Student;
