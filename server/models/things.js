const { Int32 } = require('bson');
const mongoose = require('mongoose');
const { types, statuses } = require('../../constants');

const thingSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, enum: [...types] },
    status: { type: String, enum: [...statuses] },
    rating: { type: Int32, min: 0, max: 10 },
    isSoftDeleted: { type: Boolean, default: false, index: true }
});

const Thing = mongoose.model('Thing', thingSchema);

module.exports = { Thing };
