import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { Collection, IProduct } from "../data/products";
import { CollectionView } from "../components/CollectionView/CollectionView";
import { DetailView } from "../components/DetailView/DetailView";
import ContextProvider from "../context";
import Cart from "../components/CartView/CartView";
import { Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

export interface IAppProps {}
export interface IAppState {
  showDetails: boolean;
  product: IProduct | null;
}
const collectionInstance = new Collection();

const Home: NextPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [products, setProducts] = useState(null);
  const [saved, setSaved] = useState([]);
  const [user, setUser] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
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

  const showDetailView = (id: number) => {
    let foundItem = collectionInstance.items.find((item: IProduct) => {
      return item.id === id;
    });
    if (foundItem) {
      setShowDetails(true);
      setProduct(foundItem);
    }
  };

  const showCartView = () => {
    setShowCart(true);
  };

  const handleClose = () => {
    console.log(`App : handleClose()`);
    setShowDetails(false);
    setProduct(null);
  };
  const handleCartClose = () => {
    console.log(`App : handleCartClose()`);
    setShowCart(false);
    // setProduct(null);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="E-commerce online clothing store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextProvider
        productContextValue={{ products, setProducts }}
        cartContextValue={{ cartItems, setCartItems }}
        // prismicContextValue={{ staticContent, setStaticContent }}
        userContextValue={{ user, setUser }}
        savedContextValue={{ saved, setSaved }}
        // authModalContextValue={{ authModalOpen, setAuthModalOpen }}
        // authContextValue={{ authState, authDispatch }}
      >
        <div className="App">
          <Button color="primary" onClick={showCartView}>
            <ShoppingCart></ShoppingCart> Cart
          </Button>
          <CollectionView
            {...collectionInstance}
            handleItemClicked={showDetailView}
          />
          <DetailView
            open={showDetails}
            product={product}
            handleClose={handleClose}
          />
          <Cart open={showCart} handleCartClose={handleCartClose} />
        </div>
      </ContextProvider>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
