const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
  },
  images: {
    type: Array,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    default: new Date(),
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const Products = model("products", productSchema);

const validateProduct = (body) => {
  const schema = Joi.object({
    categories: Joi.string().required(),
    title: Joi.string().required(),
    price: Joi.number().required(),
    location: Joi.string(),
    images: Joi.array(),
    phoneNumber: Joi.number().required(),
    description: Joi.string(),
    date: Joi.string(),
    isActive: Joi.boolean(),
  });
  return schema.validate(body);
};

module.exports = { Products, validateProduct };
