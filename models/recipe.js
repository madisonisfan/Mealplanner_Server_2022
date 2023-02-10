const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    recipeName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    servings: {
      type: Number,
      required: true,
    },
    cooktime: {
      type: Number,
      required: true,
    },
    preptime: {
      type: Number,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
