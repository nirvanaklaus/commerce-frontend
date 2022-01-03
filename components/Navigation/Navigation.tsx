import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar/SearchBar";
import {
  FavoriteOutlined,
  ShoppingCart,
  Menu,
  Search,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import styles from "./Navigation.module.css";
import { linkSync } from "fs";
// import '../../styles/globals.css'

export interface NavigationProps {
  showCartView(): void;
  showSideBar(value: boolean): void;
  showSearchSideBar(value: boolean): void;
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
  showSearchSideBar,
}) => {
  return (
    <div className={styles.navigation} style={{ width: "100%" }}>
      {/* top of the navigation bar (desktop and mobile) */}
      <section className={styles["navigation__top-section"]}>
        <Image
          src={
            "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg"
          }
          alt={"logo"}
          width={100}
          height={50}
        />
        <section className={`pc_only`}>
          {links.map(({ text, address }, index) => (
            <Link key={Math.random() + index} href={address}>
              <a>{text}</a>
            </Link>
          ))}
        </section>
        <section>
          <div className="pc_only">
            <SearchBar />
          </div>
          <Search
            className={`mobile_and_tablet_only`}
            onClick={() => showSearchSideBar(true)}
          ></Search>
          <FavoriteOutlined />
          <ShoppingCart onClick={showCartView}></ShoppingCart>
          {/* <Button color="primary" >
          </Button> */}
          <Menu
            className={`mobile_and_tablet_only`}
            onClick={() => showSideBar(true)}
          ></Menu>
        </section>
      </section>
    </div>
  );
};

export default Navigation;
