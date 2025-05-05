const Cart = require('../models/cartModel')

const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    console.log("User ID:", userId)

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, products: [] });
        }

        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

        if (productIndex > -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }

        await cart.save();
        res.send({ message: 'Product added to cart', cart });
    } catch (error) {
        console.error("Error in addToCart:", error);  // Log the error
        res.status(500).send({ message: "Internal Server Error", error });
    }
}

const getCart = async (req, res) => {
    const userId = req.user.id;

    try {
        const cart = await Cart.findOne({ userId }).populate('products.productId');
        if (!cart) {
            return res.status(404).send({ message: 'Cart not found' });
        }
        res.send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
};

const removeFromCart = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).send({ message: 'Cart not found' });
        }

        cart.products = cart.products.filter(p => p.productId.toString() !== productId);
        await cart.save();
        res.send({ message: 'Product removed from cart', cart });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    addToCart,
    getCart,
    removeFromCart
}