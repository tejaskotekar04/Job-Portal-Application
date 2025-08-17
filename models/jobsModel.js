import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, "Company name is required"]
    },
    position: {
        type: String,
        required: [true, "Position is required"],
        maxlength: 100
    },
    status: {
        type: String,
        enum: ["interview", "pending", "reject"],
        default: "pending",
    },
    workType: {
        type: String,
        enum: ["full-time", "part-time", "contract", "internship"],
        default: "full-time",
    },
    workLocation: {
        type: String,
        default: "Mumbai",
        required: [true, "Work location is required"]
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true }
)

export default mongoose.model("Job", jobSchema);

