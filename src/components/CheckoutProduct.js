import styled from "styled-components";
import { useStateValue } from "../StateProvider/StateProvider";

export default function CheckoutProduct({ id, title, price, desc, imageUrl }) {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <CartItem>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <svg
          onClick={removeFromBasket}
          className="cross h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imageUrl}
              className="img-fluid rounded-start"
              alt="product-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                <small className="text-muted">{price}ریال</small>
              </p>
              <p className="card-text">{desc.slice(0, 170)}...</p>
            </div>
          </div>
        </div>
      </div>
    </CartItem>
  );
}

const CartItem = styled.div`
  .card {
    border-radius: 15px;
    position: relative;
    background-color: var(--deep-dark);
  }
  .cross {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 25px;
    color: var(--white);
    cursor: pointer;
  }
`;
