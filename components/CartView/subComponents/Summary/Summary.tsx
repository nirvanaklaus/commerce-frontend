import React from "react";

export interface ISummary {
  subTotal: number;
  discount: number;
  shipping: number;
}
const Summary: React.FC<ISummary> = ({ subTotal, discount, shipping }) => {
  return (
    <div>
      <h2>Summary</h2>
      <section>
        <h3>
          Sub-Total: <span>₦{subTotal}</span>
        </h3>
        <h3>
          Discount: <span>₦{discount}</span>
        </h3>
        <h3>
          Shipping: <span>₦{shipping}</span>
        </h3>
      </section>
      <section>
        <b>
          Total: <span>₦{subTotal+discount+shipping}</span>
        </b>
      </section>
    </div>
  );
};

export default Summary;
