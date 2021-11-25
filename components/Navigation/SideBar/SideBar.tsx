import React from "react";
import styles from "./SideBar.module.css";
import { links } from "../Navigation";
import SearchBar from "../SearchBar/SearchBar";
import { Close, FavoriteOutlined, ShoppingCart } from "@material-ui/icons";
import { Button, Dialog, Slide } from "@material-ui/core";
import Link from "next/link";
import { TransitionProps } from "@material-ui/core/transitions/transition";

export interface SlideBarProps {
  isOpen: boolean;
  showSideBar(value: boolean): void;
}
const SideBar: React.FC<SlideBarProps> = ({ isOpen, showSideBar }) => {
  return (
    <div className={styles[`${isOpen ? "sidebar" : "sidebar--inactive"}`]}>
      <section
        className={
          styles[`sidebar__link-list${isOpen ? "--active" : "--inactive"}`]
        }
      >
        <Close onClick={() => showSideBar(false)}></Close>
        {links.map(({ text, address }, index) => (
          <Link key={Math.random() + index} href={address}>
            <a>{text}</a>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default SideBar;
