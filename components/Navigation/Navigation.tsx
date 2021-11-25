import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar/SearchBar";
import { FavoriteOutlined, ShoppingCart, Menu } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import styles from "./Navigation.module.css";
import { linkSync } from "fs";

export interface NavigationProps {
  showCartView(): void;
  showSideBar(value: boolean): void;
}
interface linkStructure {
  text: string;
  address: string;
}
export const links: linkStructure[] = [
  { text: "Latest Releases", address: "/latest" },
  { text: "Tops", address: "/tops" },
  { text: "Bottoms", address: "/bottoms" },
  { text: "Footwear", address: "/footwear" },
];

const Navigation: React.FC<NavigationProps> = ({
  showCartView,
  showSideBar,
}) => {
  return (
    <div className={styles.navigation} style={{ width: "100%" }}>
      {/* top of the navigation bar (desktop and mobile) */}
      <section className={styles["navigation__top-section"]}>
        <section>
          <Image
            src={
              "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg"
            }
            alt={"logo"}
            width={100}
            height={50}
          />
        </section>
        <section>
          {links.map(({ text, address }, index) => (
            <Link key={Math.random() + index} href={address}>
              <a>{text}</a>
            </Link>
          ))}
        </section>
        <section>
          <SearchBar />
          <FavoriteOutlined />
          <Button color="primary" onClick={showCartView}>
            <ShoppingCart></ShoppingCart> Cart
          </Button>
            <Menu onClick={() => showSideBar(true)}></Menu>
        </section>
      </section>
    </div>
  );
};

export default Navigation;
