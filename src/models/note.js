import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: false, default: "", trim: true },
    tag: {
      type: String,
      required: false,
      default: "Todo",
      enum: [
        "Work",
        "Personal",
        "Shopping",
        "Ideas",
        "Travel",
        "Finance",
        "Health",
        "Important",
        "Todo",
        "Meeting",
      ],
    },
  },
  {
    timestamps: true,
  }
);

export const Note = model("Note", noteSchema);
