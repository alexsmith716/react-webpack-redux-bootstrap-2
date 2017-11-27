
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  text: { type: 'String', required: true },
  pageName: { type: 'String', required: true }
});

export default mongoose.model('pageSchema', pageSchema);