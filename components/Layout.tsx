import React, { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation";
import Cart from "./CartView/CartView";
import ContextProvider from "../context";

const Layout: React.FC = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState(null);
  const [saved, setSaved] = useState([]);
  const [user, setUser] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [staticContent, setStaticContent] = useState(
    //   {
    //   navigation: navigation,
    //   footer: footer,
    //   social: social,
    // }
    {}
  );
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("007-tasche") ?? "[]") &&
      JSON.parse(localStorage.getItem("007-tasche") ?? "[]").length > 0
    ) {
      setCartItems(JSON.parse(localStorage.getItem("007-tasche") ?? "[]"));
    }
  }, []);

  const layoutStyle = {
    display: "flex",
    height: "100%",
    width: "100%",
  };
  const showCartView = () => {
    setShowCart(true);
  };
  const handleCartClose = () => {
    console.log(`App : handleCartClose()`);
    setShowCart(false);
    // setProduct(null);
  };
  return (
    <div className="Layout" style={{ ...layoutStyle, flexDirection: "column" }}>
      <ContextProvider
        productContextValue={{ products, setProducts }}
        cartContextValue={{ cartItems, setCartItems }}
        // prismicContextValue={{ staticContent, setStaticContent }}
        userContextValue={{ user, setUser }}
        savedContextValue={{ saved, setSaved }}
        // authModalContextValue={{ authModalOpen, setAuthModalOpen }}
        // authContextValue={{ authState, authDispatch }}
      >
        <Navigation showCartView={showCartView} />
        <Cart open={showCart} handleCartClose={handleCartClose} />
        <div className="Content">{children}</div>
      </ContextProvider>
    </div>
  );
};

export default Layout;
