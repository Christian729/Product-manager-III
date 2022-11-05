const ProductController = require('../controllers/prod.controllers');
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts); // returns a list of products
    app.get('/api/products/:id', ProductController.getProduct); // returns a single product
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}