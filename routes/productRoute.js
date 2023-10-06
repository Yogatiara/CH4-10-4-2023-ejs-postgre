const router = require('express').Router();

const Product = require('../controller/productController');
const upload = require('../middlewares/uploader');
router.post(
  '/',
  upload.single('image'),
  Product.createProduct
);
router.get('/', Product.findProducts);
router
  .route('/:id')
  .get(Product.findProductsById)
  .put(Product.updateProduct)
  .delete(Product.deleteProduct);

module.exports = router;
