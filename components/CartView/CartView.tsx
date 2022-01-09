import React, { useContext } from "react";
import CartItemView, {
  ICartItem,
} from "./subComponents/CartItemView/CartItemView";
import CartContext from "../../context/CartContext";
import { IProduct } from "../../data/products";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
} from "@material-ui/core";
import Summary from "./subComponents/Summary/Summary";
import MoreSlider from "./subComponents/MoreSlider/MoreSlider";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close } from "@material-ui/icons";
import { MainDiv } from "../DetailView/DetailView";
import styled from 'styled-components';
import Link from "next/link";


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export interface ICartProps {
  open: boolean;
  handleCartClose(): void;
}

const SummaryDiv = styled.div`
/* min-height: 100vh; */
padding: 3rem;
flex: 1;
background: #ffffff;
margin: 3rem auto 0;
& button{
background:blueviolet;
color:white;
margin-right: 30px;
}
& button:hover{
color:blueviolet
}

`
const CartDiv = styled.div`
/* min-height: 100%; */
padding: 3rem;
flex: 1;
background: #f5f5f5;
&>div{
max-width: 1200px;
/* width: 80%; */
margin: 3rem auto; 
}
&>section{
display: flex;
flex-wrap:wrap;
justify-content: space-evenly;
align-items:center;
}
`

const Cart: React.FC<ICartProps> = ({ open, handleCartClose }) => {
  const cart = useContext(CartContext);
  console.log(cart.cartItems)
  let items = cart.cartItems.map((item: ICartItem) => {
    return <CartItemView {...item} key={`${Math.random()}-${item.id}`} />;
  });
  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleCartClose}
          aria-label="close"
        >
          <Close></Close>
        </IconButton>
      </Toolbar>
      {/* <AppBar>
        </AppBar> */}
      <MainDiv>
        <CartDiv>
          <section className="main-div" style={{ display: "flex" }}>
            <Box display="flex" flexWrap="wrap">
              {items}
            </Box>
          </section>
          <SummaryDiv>
            <Summary shipping={0} subTotal={Number(cart.cartTotal())} discount={0} />
            <br />
            <Link passHref href="/checkout_page">
              <Button color="primary">Proceed to Checkout</Button>
            </Link>
          </SummaryDiv>
          {/* <MoreSlider/> */}
        </CartDiv>
      </MainDiv>
    </Dialog>
  );
};

export default Cart;
