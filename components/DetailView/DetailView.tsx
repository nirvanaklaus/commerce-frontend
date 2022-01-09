import { AppBar, Dialog, IconButton, Slide, Toolbar } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close } from "@material-ui/icons";
import React from "react";
import { IProduct } from "../../data/products";
import DetailsPanel from "./subComponents/DetailsPanel/DetailsPanel";
import ImageSlider from "./subComponents/ImageSlider/ImageSlider";
import styles from './DetailView.module.css'
import styled from 'styled-components'

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

export const MainDiv = styled.div
`
min-height: 100vh;
padding: 3rem 0 0;
box-sizing:border-box;
flex: 1;
background: #f5f5f5;
&>div{
  max-width: 1200px;
  width: 80%;
  margin:auto; 
}
&>section{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-items:center;
}
`

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
          {/* <AppBar>
          </AppBar> */}

          {/* <h2 style={{ padding: "50px 0px", display: "grid" }}>
            <span>{this.props.product?.id}</span>
            <span>{this.props.product?.name}</span>
            <span>{this.props.product?.longDescription}</span>
            <span>{this.props.product?.type}</span>
            <span>{this.props.product?.specs?.price}</span>
          </h2> */}
          {/* slideexport r */}
          <MainDiv>
            <section>
              <ImageSlider imageURL={this.props.product?.images ?? []} width={550} height={350} />
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

            </section>
          </MainDiv>
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
