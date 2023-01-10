import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product must have a Title!"],
      maxlength: [
        60,
        "A title must have less or equal to 60 characters",
      ],
    },
    desc: {
      type: String,
      required: [true, "Product must have a Description!"],
      maxlength: [
        200,
        "A description must have less or equal to 200 characters",
      ],
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
