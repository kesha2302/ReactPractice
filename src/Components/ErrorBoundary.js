import { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

     // This lifecycle method is called if a child component throws an error
    static getDerivedStateFromError(error)
    {
          // Update state to indicate an error has occurred
        return{
            hasError:true
        }
    }
    
  render() {
    // return (
    //   <div>
    //     ErrorBoundary
    //   </div>
    // )

      // If an error occurred, display fallback UI
    if(this.state.hasError){
        return<h1>Something went wrong</h1>
    }

    // Otherwise, render children normally
    return this.props.children
  }
}

export default ErrorBoundary
