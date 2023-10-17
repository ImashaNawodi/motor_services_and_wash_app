
import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
    VehicleType: { 
        type: String,
        required: true,
    },
    VehicleNumber: { 
        type: String,
        required: true,
    },
    Services: { 
        type: String,
        required: true,
    },
    ServiceStation: { 
        type: String,
        required: true,
    },
    Date: { 
        type: mongoose.Schema.Types.Mixed, 
        required: true,
    },
    Time: { 
        type: mongoose.Schema.Types.Mixed,
        required: true,
    }, 
    Comments: { 
        type: String,
        required: true,
    },
    },
    {
        timestamps: true,
    }
    
);


export const User =mongoose.model('User', userSchema);