import mongoose, { Schema } from 'mongoose'

const feedbacksSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

feedbacksSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      email: this.email,
      message: this.message,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Feedbacks', feedbacksSchema)

export const schema = model.schema
export default model
