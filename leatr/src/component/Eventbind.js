import React, { Component } from 'react'

export class Eventbind extends Component {

    constructor (props) {
        super(props)

        this.state = {
            message: 'hello world'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }


    //clickHandler() {
    //    this.setState({ 
    //        message: 'Goodbye!'
    //    })
    //}

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }


  render() {
    return (
      <div>
         <div>{this.state.message}</div>
         {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
          {/*<button onClick={() => this.clickHandler()}>Click</button>*/}
         <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Eventbind
