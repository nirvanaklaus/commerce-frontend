import { AppBar, Dialog, IconButton, Slide, Toolbar } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close } from "@material-ui/icons";
import React from "react";
import { IProduct } from "../../data/products";
import DetailsPanel from "./subComponents/DetailsPanel/DetailsPanel";
import ImageSlider from "./subComponents/ImageSlider/ImageSlider";

export interface IDetailsProps {
  open: boolean;
  product: IProduct | null;
  handleClose(): void;
}
export interface IDetailsState {
  amount: number;
}


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export class DetailView extends React.Component<IDetailsProps, IDetailsState> {
  constructor(props: IDetailsProps) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = { amount: 1 };
  }
  render() {
    return (
      <div className="full-screen-details-dialogue">
        <Dialog
          fullScreen
          open={this.props.open}
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleClose}
                aria-label="close"
              >
                <Close></Close>
              </IconButton>
            </Toolbar>
          </AppBar>

          <h2 style={{ padding: "50px 0px", display: "grid" }}>
            <span>{this.props.product?.id}</span>
            <span>{this.props.product?.name}</span>
            <span>{this.props.product?.longDescription}</span>
            <span>{this.props.product?.type}</span>
            <span>{this.props.product?.specs?.price}</span>
          </h2>
          {/* slider */}
          <ImageSlider imageURL={this.props.product?.images??[]} width={550} height={350} />
          {/* slider */}

          {/* details panel */}
          <DetailsPanel
            name={this.props.product?.name ?? ""}
            type={this.props.product?.type ?? ""}
            price={this.props.product?.specs?.price ?? 0.0}
            colour={this.props.product?.specs?.colour ?? ""}
            sizes={this.props.product?.specs?.sizes ?? []}
            longDescription={this.props.product?.longDescription ?? ""}
            product={this.props.product}
          />
          {/* details panel */}
        </Dialog>
      </div>
    );
  }
  handleClose() {
    console.log(`Details: handleClose()`);
    this.props.handleClose();
  }
}
