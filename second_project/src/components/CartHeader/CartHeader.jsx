import { useDispatch } from "react-redux";
import { removeAllItems } from "../../rtk/slices/cartSlice";
import './CartHeader.css'
function CartHeader() {

  const dispatch = useDispatch();
  function handlerRemove() {
    dispatch(removeAllItems())
  }
  return (
    <div className="cart-header  d-flex justify-content-between align-items-center mb-4 ">
      <h5 className="fw-bolder">Shopping Cart</h5>
      <span className="remove-all-products" onClick={handlerRemove}> Remove All</span>
    </div>
  );
}

export default CartHeader;
