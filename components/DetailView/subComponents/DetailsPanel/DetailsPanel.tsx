import { Button } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import CartContext from "../../../../context/CartContext";
import { IProduct } from "../../../../data/products";
import styled from 'styled-components'

export interface IDetailsPanel {
  name: string;
  type: string;
  price: number;
  colour: string;
  sizes: string[];
  longDescription: string;
  product: IProduct | null;
}

const PanelDiv = styled.div`
max-width:450px;
width:100%;
button{
  background:blueviolet;
  color:white;
  margin-right: 30px;
}
button:hover{
  color:blueviolet
}
`

const Select = styled.select`
max-width: 300px;
width: 80%;
background: rgba(0,0,0,0.03);
margin: 15px 0px;
`


const DetailsPanel: React.FC<IDetailsPanel> = ({ ...product }) => {
  const { name, type, specs, longDescription } = product?.product ?? {};
  const { sizes, colour, price } = specs ?? {};
  // useEffect(() => {
  //   console.log(name, type, price, longDescription);
  // }, [type, longDescription, name, price]);
  const cart = useContext(CartContext);
  return (
    <PanelDiv>
      <h3>{name}</h3>
      <p>{type}</p>
      <strong>{price}</strong>
      <p>COLOUR: {colour}</p>
      <span>SIZE: </span><br />
      <Select name="sizes" id="sizes">
        {sizes?.map((size) => (
          <option key={`${Math.random()}-${size}`} value={size}>
            {size}
          </option>
        ))}
      </Select>
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
    </PanelDiv>
  );
};

export default DetailsPanel;
