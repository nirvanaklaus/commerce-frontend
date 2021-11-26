import { Box } from "@material-ui/core";
import React from "react";
import { Collection } from "../../data/products";
import { ItemView } from "../ItemView/ItemView";

export class CollectionView extends React.Component<Collection> {
  constructor(props: Collection) {
    super(props);
    this.handleItemClicked = this.handleItemClicked.bind(this);
  }
  handleItemClicked(id: number) {
    console.log(`handleItemClick : ${id}`);
    this.props.handleItemClicked(id);
  }
  render() {
    let items = this.props.items.map((item) => {
      return (
        <ItemView
          {...item}
          key={item.id}
          onItemClicked={this.handleItemClicked}
        />
      );
    });
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      > 
        {items}
      </div>
    );
  }
}
