// dB structure for student, teacher
const mongodb = require("mongoose");
// student table: name, email, contact, class, cwa, gardian

// teacher table: name, email, contact, courses

// class table: it's id will be a foreign id in student's table. A student can belong to 1 class at a time
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
