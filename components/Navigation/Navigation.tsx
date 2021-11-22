import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar/SearchBar";
import { FavoriteOutlined, ShoppingCart } from "@material-ui/icons";
import { Button } from "@material-ui/core";

interface NavigationProps {
  showCartView(): void;
}

const Navigation: React.FC<NavigationProps> = ({ showCartView }) => {
  interface linkStructure {
    text: string;
    address: string;
  }
  const links: linkStructure[] = [
    { text: "Latest Releases", address: "/latest" },
    { text: "Tops", address: "/tops" },
    { text: "Bottoms", address: "/bottoms" },
    { text: "Footwear", address: "/footwear" },
  ];
  return (
    <div style={{ width: "100%" }}>
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
      </section>
    </div>
  );
};

export default Navigation;
