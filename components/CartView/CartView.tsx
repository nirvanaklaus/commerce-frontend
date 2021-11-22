import React, { useContext } from "react";
import CartItemView, {
  ICartItem,
} from "./subComponents/CartItemView/CartItemView";
import CartContext from "../../context/CartContext";
import { IProduct } from "../../data/products";
import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
} from "@material-ui/core";
import Summary from "./subComponents/Summary/Summary";
import MoreSlider from "./subComponents/MoreSlider/MoreSlider";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close } from "@material-ui/icons";

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

const Cart: React.FC<ICartProps> = ({ open, handleCartClose }) => {
  const cart = useContext(CartContext);
  console.log(cart.cartItems)
  let items = cart.cartItems.map((item: ICartItem) => {
    return <CartItemView {...item} key={`${Math.random()}-${item.id}`} />;
  });
  return (
    <div className="full-screen-details-dialogue">
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar>
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
        </AppBar>
        <section className="main-div" style={{ display: "flex" }}>
          <Box display="flex" flexWrap="wrap">
            {items}
          </Box>
          {console.log(cart.cartTotal())}
          <Summary shipping={0} subTotal={Number(cart.cartTotal())} discount={0}/>
        </section>
        {/* <MoreSlider/> */}
      </Dialog>
    </div>
  );
};

export default Cart;
