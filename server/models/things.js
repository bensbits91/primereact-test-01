const { Int32 } = require('bson');
const { Schema, model } = require('mongoose');
const { types, statuses } = require('../../constants');

const extneralDataSchema = new Schema(
    { data: { type: Schema.Types.Mixed } },
    { _id: false },
    { timestamps: true }
);

const thingSchema = new Schema(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        type: { type: String, enum: [...types] },
        status: { type: String, enum: [...statuses] },
        rating: { type: Int32, min: 0, max: 10 },
        externalData: extneralDataSchema,
        isSoftDeleted: { type: Boolean, default: false, index: true }
    },
    { timestamps: true }
);

const Thing = model('Thing', thingSchema);

module.exports = { Thing };
