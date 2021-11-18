import { useStateValue } from "../StateProvider/StateProvider";
import MyBtn from "../components/MyBtn";
import SecHeading from "../components/SecHeading";
import CheckoutProduct from "../components/CheckoutProduct";
import styled from "styled-components";
export default function Cart({ id }) {
  const [{ basket }] = useStateValue();

  return (
    <CartWrapper>
      <div>
        {basket?.length === 0 ? (
          <div className="empty-alert">
            <div className="alert alert-warning" role="alert">
              سبد خرید شما خالی است.
            </div>
            <MyBtn btnText={"محصولات"} outline btnLink={"/projects"}></MyBtn>
          </div>
        ) : (
          <div>
            {basket?.length >= 2 ? (
              <SecHeading
                subText="محصولات در"
                h3Text="سبد خرید"
                headingPos="text-center"
              />
            ) : (
              <SecHeading
                subText="محصولات در"
                h3Text="سبد خرید"
                headingPos="text-center"
              />
            )}
            <div fluid className="checkout__card">
              {basket?.map((item, index) => {
                return (
                  <CheckoutProduct
                    key={index}
                    id={item.id}
                    title={item.proTitle}
                    imageUrl={item.proImg}
                    price={item.proPrice}
                    desc={item.proText}
                  ></CheckoutProduct>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          {/* <div>
            <Item.Group divided>
              <SubTotal></SubTotal>
            </Item.Group>
          </div> */}
        </div>
      )}
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  padding-top: 100px;

  .empty-alert {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .checkout__card {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }
`;
