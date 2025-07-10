import mongoose from 'mongoose';
const machineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
    img: {
        type: String,
        required: true,
        unique: true,
    }
}, {
  timestamps: true,
});
const Machine = mongoose.model('Machine', machineSchema);
export default Machine;