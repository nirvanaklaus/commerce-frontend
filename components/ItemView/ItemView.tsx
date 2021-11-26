import styles from "./ItemView.module.css";
import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { IProduct } from "../../data/products";
import React from "react";

export interface IItemView extends IProduct {
  onItemClicked(id: number): void;
}
export class ItemView extends React.Component<IItemView> {
  constructor(props: IItemView) {
    super(props);
    this.onItemClicked = this.onItemClicked.bind(this);
  }
  render() {
    return (
      <div onClick={this.onItemClicked} className={styles.item_view_card}>
        <CardMedia
          className={styles.card_media_image}
          image={this.props.images[0]}
        />
        <h3>{this.props.name}</h3>
        <small>{this.props.type}</small>

        <h6>₦{this.props.specs?.price}</h6>
      </div>
    );
  }
  onItemClicked() {
    this.props.onItemClicked(this.props.id);
  }
}
