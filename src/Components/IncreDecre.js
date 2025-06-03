import { Component } from 'react'

export class IncreDecre extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }

      
      this.Increment = this.Increment.bind(this);
      this.Decrement = this.Decrement.bind(this);
    }

    // Increment(){
    //     this.state.count=this.state.count+1
    //     console.log(this.state.count)
    // }

//  second argument to setState() — a callback function
    // The callback after setState is useful when you want to access the updated value of state.
    // Without the callback, console.log(this.state.count) might still show the old value due to setState() being asynchronous.
    
    Increment(){
        this.setState({
            count:this.state.count+1
        },
    ()=>{
        console.log('Callback Value:',this.state.count)
    })
        console.log(this.state.count)
    }

    // Method to decrement the count, ensuring it does not go below 0
    Decrement() {
      this.setState(
          prevState => ({
              count: prevState.count > 0 ? prevState.count - 1 : 0
          }),
          () => {
              console.log('Callback value:', this.state.count);
          }
      );
  }
    // Decrement(){
    //     this.setState({
    //         count:this.state.count-1
    //     },
    // ()=>{
    //     console.log('Callback Value:',this.state.count)
    // })
    //     console.log(this.state.count)
    // }
    
  render() {
    return (
      <div>
        <h4>Counter:{this.state.count}</h4>
        <button onClick={()=>this.Increment()}>Increment</button>
        <button onClick={()=>this.Decrement()}>Decrement</button>
      </div>
    )
  }
}

export default IncreDecre
