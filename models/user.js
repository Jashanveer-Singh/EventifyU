import { Schema, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    min: 2100000,
    max: 9999999,
    unique: true
  },
  phoneNo: {
    type: String,
  },
  college: String,
  course: String,
  branch: String,
  class: String,
  picture: Buffer,
  enrolledEvents: {
    type: Schema.Types.ObjectId,
    ref: 'Events'
  }
});

export default model(Users, schema);