import { Component } from "react";

type Counterprops = {
    message: string
}

type CounterState = {
    count: number
}
export class Counter extends Component <Counterprops, CounterState>{
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }
    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Increment</button>
            {this.props.message} {this.state.count}
          </div>
        )
    }
}
