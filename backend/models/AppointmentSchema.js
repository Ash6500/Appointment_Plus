const mongoose =  require("mongoose");


const appointmentSchema = new mongoose.Schema(
    {
        doctor:{
            type: mongoose.Types.ObjectId,
            ref: "Doctor",
            required: true,
        },

        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },

        ticketPrice:{type: String, required: true},
        appointment:{
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "approved", "cancelled"],
            default: "pending",
        },
        isPaid: {
            type: Boolean,
            default: true,
        },
    },
    {timestamps: true}
);

const appointmentModel = mongoose.model("appointment", appointmentSchema);
module.exports = appointmentModel;