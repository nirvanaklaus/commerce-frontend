import { Button } from '@material-ui/core';
import React from 'react';
// import { MainDiv } from '../components/DetailView/DetailView';
import FormInput from '../components/FormView/Input';
import styled from 'styled-components';
const CheckoutDiv = styled.div
    `
min-height: 100vh;
padding: 3rem 0 0;
flex: 1;
background: #f5f5f5;
&>div{
max-width: 1200px;
width: 80%;
margin:auto; 
}
&>section{
display: flex;
flex-wrap:wrap;
justify-content: space-evenly;
align-items:center;
}
& button{
background:blueviolet;
color:white;
margin-right: 30px;
}
& button:hover{
color:blueviolet
}
`


const Checkout: React.FC = () => {

    return (
        <CheckoutDiv>
            <div>
                <h3>CHECKOUT</h3>
                <FormInput name='Address' placeholder='Enter Street Address' />
                <FormInput name='Phone' placeholder='Enter Phone Number' type='number' />
                <Button color="primary">Proceed to Checkout</Button>
            </div>
        </CheckoutDiv>
    );
};

export default Checkout;