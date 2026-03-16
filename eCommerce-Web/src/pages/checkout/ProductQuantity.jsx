import { useState } from "react";
import axios from "axios";
export function ProductQuantity({ loadCart, cartItem }) {
  const [isEditing, setIsEditing] = useState(false);
  function updateQuantity() {
    setIsEditing(true);
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
          {isEditing && <input type="text" style={{ width: "50px" }} />}
          {!isEditing && (
            <span className="quantity-label">{cartItem.quantity}</span>
          )}
        </span>
        <span
          className="update-quantity-link link-primary"
          onClick={updateQuantity}
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
