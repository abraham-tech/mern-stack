const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema ({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        reference: {
            type: String,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
            required: true,
        },
        subscriptionPlan: {
            type: String,
            required: true,
        },
        amount:{
            type: Number,
            default: 0,
        },
        monthlyRequestCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Payment = mongoose.mongo("Payment", paymentSchema);
module.exports = Payment;