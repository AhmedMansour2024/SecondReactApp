import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

function CartList() {
  const cart = useSelector((state) => state.cartSlice.cart);
  return (
    <table className="cart w-100">
      <tbody>
        {cart.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </tbody>
    </table>
  );
}

export default CartList;
