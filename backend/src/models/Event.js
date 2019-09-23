const { Schema, model } = require("mongoose");

const EventSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    },
    eventType: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: false
    },
    prize: {
      type: String,
      required: false
    },
    rules: {
      type: String,
      required: true
    },
    faq: {
      type: String,
      required: true
    },
    subscriptionStart: {
      type: Date,
      required: true
    },
    subscriptionEnd: {
      type: Date,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    participants: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }]
  },
  {
    timestamps: true
  }
);

module.exports = model("Event", EventSchema);
