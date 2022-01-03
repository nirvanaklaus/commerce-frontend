import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { Collection, IProduct } from "../data/products";
import { CollectionView } from "../components/CollectionView/CollectionView";
import { DetailView } from "../components/DetailView/DetailView";
import ContextProvider from "../context";
import { Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Layout from "../components/Layout";

export interface IAppProps {}
export interface IAppState {
  showDetails: boolean;
  product: IProduct | null;
}
const collectionInstance = new Collection();

const Home: NextPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);

  const showDetailView = (id: number) => {
    let foundItem = collectionInstance.items.find((item: IProduct) => {
      return item.id === id;
    });
    if (foundItem) {
      setShowDetails(true);
      setProduct(foundItem);
    }
  };

  const handleClose = () => {
    console.log(`App : handleClose()`);
    setShowDetails(false);
    setProduct(null);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="E-commerce online clothing store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <CollectionView
          {...collectionInstance}
          handleItemClicked={showDetailView}
        />
        <DetailView
          open={showDetails}
          product={product}
          handleClose={handleClose}
        />
      </Layout>
    </div>
  );
};

export default Home;
