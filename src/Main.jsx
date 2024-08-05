import { Component, Fragment } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      advice: "",
    };
  }

  componentDidMount() {
    this.loadAdvice();
  }

  async loadAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");

    response.json().then((data) => {
      this.setState({ advice: data.slip.advice });
    });
  }

  handleMore = () => {
    this.loadAdvice();
  };

  render() {
    return (
      <Fragment>
        <div>
          <p>{this.state.advice}</p>
        </div>

        <button onClick={this.handleMore}>I need more!</button>
      </Fragment>
    );
  }
}
