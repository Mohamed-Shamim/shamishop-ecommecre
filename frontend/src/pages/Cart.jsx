import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        ).toFixed(2);
    };

    return (
        <div className="cart-page container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item flex items-center justify-between border-b pb-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p>${item.price}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="quantity-control flex items-center">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-2 py-1 border rounded-l"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                            className="w-12 text-center border-t border-b"
                                        />
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-2 py-1 border rounded-r"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-right">
                        <h2 className="text-xl font-semibold">
                            Total: ${calculateTotal()}
                        </h2>
                        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;