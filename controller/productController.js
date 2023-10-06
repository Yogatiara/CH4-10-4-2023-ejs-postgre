const { Product } = require('../models');
const imageKit = require('../lib/imageKit');

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  const file = req.file;

  // dapatkan extension filenya
  const split = file.originalname.split('.');
  const extension = split[split.length - 1];

  // upload file ke imagekit
  const img = await imageKit.upload({
    file: file.buffer,
    fileName: `IMG-${Date.now()}.${extension}`,
  });
  try {
    const newProduct = await Product.create({
      name,
      price,
      stock,
      imageUrl: img.url,
    });
    res.status(200).json({
      status: 'success',
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

const findProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};
const findProductsById = async (req, res) => {
  try {
    const products = await Product.findOne(
      req.params.id
    );
    res.status(200).json({
      status: 'success',
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const product = await Product.update({
      name,
      price,
      stock,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  findProducts,
  findProductsById,
  updateProduct,
};
