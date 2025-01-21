const { Int32 } = require('bson');
const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['TV', 'Movie', 'Book', 'Video Game'] },
    // genre: [{ type: String, enum: ['comedy', 'drama', 'horror', 'action', 'adventure', 'rpg'] }],
    status: { type: String, enum: ['Past', 'Now', 'Future', 'Dropped', 'On Hold'] },
    rating: { type: Int32, min: 0, max: 10 },
    isSoftDeleted: { type: Boolean, default: false, index: true }
});

const Thing = mongoose.model('Thing', thingSchema);

module.exports = { Thing };
