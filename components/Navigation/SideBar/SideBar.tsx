import React, { useEffect } from "react";
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
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <div className={`${isOpen ? styles["sidebar"] : styles["inactive"]}`}>
      <section className={styles[`sidebar__link-list--active`]}>
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
