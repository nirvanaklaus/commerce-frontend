import { Button, Card, CardHeader, CardMedia } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import CartContext from "../../../../context/CartContext";
import { IProduct } from "../../../../data/products";
// import { IItemView } from "../../ItemView/ItemView";

export interface ICartItem extends IProduct {
  quantity: number;
}


const CartItemView: React.FC<ICartItem> = (cartItem: ICartItem | null) => {
  const { name, type, images, specs, quantity } = cartItem ?? {};
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cart = useContext(CartContext);
  return (
    <div className="item-view-card">
      <Card style={{ width: "300px" }}>
        <CardHeader title={name} subheader={type} />
        <CardMedia className="card-media-image" image={images?.[0]} />
        <h6>
          {type}
          <Button onClick={() => cart.removeOneItem(cartItem)}>
            <Close></Close>
          </Button>
        </h6>
        <p>{specs?.colour}</p>
        <section style={{ display: "flex" }}>
          <select
            onChange={(e) => cart.setQuantity(cartItem, Number(e.target.value))}
            name="quantity"
            id="quantity"
            value={quantity}
          >
            {numbers.map((item) => {
              // console.log(item);
              return (
                <option key={`${Math.random()}-${item}`} value={`${item}`}>
                  {`${item}`}
                </option>
              );
            })}
          </select>
        </section>
        {/* {console.log(quantity, specs?.price)}  */}
        <strong>{(Math.round(quantity! * specs?.price!) * 100) / 100}</strong>
      </Card>
    </div>
  );
};

export default CartItemView;
