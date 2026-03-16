import { useState } from "react";
import axios from "axios";
export function ProductQuantity({ loadCart, cartItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity ?? 1);
  function isUpdating() {
    setIsEditing(true);
  }
  function updateQuantity(event) {
    setQuantity(event.target.value);
  }

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };
  return (
    <>
      <div className="product-quantity">
        <span>
          Quantity:
          {isEditing && (
            <input
              type="text"
              style={{ width: "50px" }}
              value={quantity}
              onChange={updateQuantity}
            />
          )}
          {!isEditing && (
            <span className="quantity-label">{cartItem.quantity}</span>
          )}
        </span>
        <span
          className="update-quantity-link link-primary"
          onClick={isUpdating}
        >
          Update
        </span>
        <span
          className="delete-quantity-link link-primary"
          onClick={deleteCartItem}
        >
          Delete
        </span>
      </div>
    </>
  );
}
