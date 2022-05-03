import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    rsph: { type: Number },
    rcyl: { type: Number },
    raxis: { type: Number },
    lsph: { type: Number },
    lcyl: { type: Number },
    laxis: { type: Number },
    add: { type: Number },
    frame: { type: String },
    lens: { type: String }
}, {
    timestamps: true
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    orders: [orderSchema]
}, {
    timestamps: true
});

export default mongoose.models.User || mongoose.model('User', userSchema)