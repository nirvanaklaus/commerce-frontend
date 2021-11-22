import { Button } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import CartContext from "../../../../context/CartContext";
import { IProduct } from "../../../../data/products";

export interface IDetailsPanel {
  name: string;
  type: string;
  price: number;
  colour: string;
  sizes: string[];
  longDescription: string;
  product: IProduct | null;
}

const DetailsPanel: React.FC<IDetailsPanel> = ({ ...product }) => {
  const { name, type, specs, longDescription } = product?.product ?? {};
  const { sizes, colour, price } = specs ?? {};
  // useEffect(() => {
  //   console.log(name, type, price, longDescription);
  // }, [type, longDescription, name, price]);
  const cart = useContext(CartContext);
  return (
    <div>
      <h3>{name}</h3>
      <p>{type}</p>
      <strong>{price}</strong>
      <p>COLOUR: {colour}</p>
      <select name="sizes" id="sizes">
        {sizes?.map((size) => (
          <option key={`${Math.random()}-${size}`} value={size}>
            {size}
          </option>
        ))}
      </select>
      <section>
        <Button
          color="primary"
          onClick={() => product && cart.addItem(product.product)}
        >
          Add To Bag
        </Button>
        <Button color="primary">Add To Wishlist</Button>
      </section>
      <p>{longDescription}</p>
    </div>
  );
};

export default DetailsPanel;
