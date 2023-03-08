import { Paymant } from "../components/Paymant";
import {
    BtnRemove,
    CartCheckoutBtn,
    CartContainer,
    CartFooterBox,
    CartFooterDisclaimer,
    CartFooterWrapper,
    CartProductBox,
    CartProductBtn,
    CartProductDescriptions,
    CartProductImg,
    CartProductQuantity,
    CartProductText,
    CartProduktWrapper,
    CartQtyActions,
    CartTitleBox,
    DiscountInput,
    PaymantsLogo,
} from "../style/Cart.style";


export const Cart = () => {
    return (
        <CartContainer>
            <CartProduktWrapper>
                <CartProductBox>
                    <CartProductImg src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                </CartProductBox>
                <CartProductBox>
                    <CartProductText>Title</CartProductText>
                    <CartProductDescriptions>
                        Lorem impsum lorem impsum lorem impsum lorem impsum
                        lorem impsum lorem impsum lorem impsum lorem impsum
                        lorem impsum lorem impsum lorem impsum lorem impsum
                        lorem impsum{" "}
                    </CartProductDescriptions>

                    <CartQtyActions>
                        <CartProductBtn>-</CartProductBtn>
                        <CartProductQuantity>2</CartProductQuantity>
                        <CartProductBtn>+</CartProductBtn>
                        <CartProductText>$55.88</CartProductText>
                        <BtnRemove>&#x2715;</BtnRemove>
                    </CartQtyActions>
                </CartProductBox>
            </CartProduktWrapper>
           <Paymant/>
        </CartContainer>
    );
};
