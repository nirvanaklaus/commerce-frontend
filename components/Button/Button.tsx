import React from "react";
import { Button } from "@material-ui/core";

export interface IMyButtonProps {
  buttonName: string;
  handleButtonClick(): void;
}

export class MyButton extends React.Component<IMyButtonProps> {
  constructor(props: IMyButtonProps) {
    super(props);
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }
  render() {
    return <Button color="primary" onClick={()=>this.onButtonClicked()}>{this.props.buttonName}</Button>;
  }

  onButtonClicked() {
    console.log(`MyButton.onButtonClicked() called`);
    this.props.handleButtonClick();
  }
}
