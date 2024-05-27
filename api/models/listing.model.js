import mongoose from "mongoose";

const listingSchema= new mongoose.Schema(
    {   
        address:{
        type:String,
        required:true,
        },
        description:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        bedrooms:{
            type:Number,
            required:true,
        },
        type:{
            type:String,
            required:true,

        },
        furnitured:{
            type:Boolean,
            required:true

        },
        imageUrls:{
            type:Array,
            required:true,
        },
        userRef:{
            type:String,
            required:true,
        },

    },
    {timestamps:true}
);
const Listing=mongoose.model('Listing',listingSchema);
export default Listing;