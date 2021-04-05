import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    name: {
      type: String,
    },
    mobile: {
      type: String,
    },
    age: {
      type: String,
    },
    weight: {
      type: String,
    },
    line0: {
      type: String,
    },
    line1: {
      type: String,
    },
    line2: {
      type: String,
    },
    fitness_goal: {
      type: String,
    },
    diet_preference: {
      type: String,
    },
    meal_preference: {
      type: String,
    },
    meals: {
      type: String,
    },
    meal_duration: {
      type: String,
    },
    start_date: {
      type: String,
    },
    gender: {
      type: String,
    },
    pincode: {
      type: String,
    },
    physical_activity: {
      type: String,
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
