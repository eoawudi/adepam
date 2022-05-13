// teacher's schema.
// Provides data structure for teachers in mongoose dB
const mongodb = require("mongoose");

const Schema = mongodb.Schema;

const teacherSchema = new Schema(
  "teacher",
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    subject: {
      type: Array,
      required: true,
    },
  },

  { timestamp: true }
);

const Teacher = mongodb.model("Teacher", teacherSchema);

module.exports = Teacher;
