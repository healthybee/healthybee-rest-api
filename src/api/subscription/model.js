import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      trim: true,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    line0: {
      type: String,
      minlength: 3,
      trim: true,
      required: true,
    },
    line1: {
      type: String,
      minlength: 10,
      trim: true,
      required: true,
    },
    line2: {
      type: String,
      minlength: 10,
      trim: true,
      required: true,
    },
    fitness_goal: {
      type: String,
      minlength: 4,
      trim: true,
      required: true,
    },
    diet_preference: {
      type: String,
      minlength: 4,
      trim: true,
      required: true,
    },
    meal_preference: {
      type: String,
      minlength: 4,
      trim: true,
      required: true,
    },
    meals: {
      type: String,
      minlength: 4,
      trim: true,
      required: true,
    },
    meal_duration: {
      type: Number,
      required: true,
    },
    start_date: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      minlength: 1,
      trim: true,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    physical_activity: {
      type: String,
      minlength: 3,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  }
);

subscriptionSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      mobile: this.mobile,
      age: this.age,
      weight: this.weight,
      line0: this.line0,
      line1: this.line1,
      line2: this.line2,
      fitness_goal: this.fitness_goal,
      diet_preference: this.diet_preference,
      meal_preference: this.meal_preference,
      meals: this.meals,
      meal_duration: this.meal_duration,
      start_date: this.start_date,
      gender: this.gender,
      pincode: this.pincode,
      physical_activity: this.physical_activity,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("Subscription", subscriptionSchema);

export const schema = model.schema;
export default model;
