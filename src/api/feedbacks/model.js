import mongoose, { Schema } from "mongoose";

const feedbacksSchema = new Schema(
  {
    email: {
      type: String,
    },
    number: {
      type: Number,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        // eslint-disable-next-line no-underscore-dangle, no-param-reassign
        delete ret._id;
      },
    },
  }
);

feedbacksSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      email: this.email,
      number: this.number,
      message: this.message,
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

const model = mongoose.model("Feedbacks", feedbacksSchema);

export const { schema } = model;
export default model;
