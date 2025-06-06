import { Component } from 'react'
import React from 'react'

 class FwrRef extends Component {

    constructor(props) {
      super(props)
    
     this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        // console.log(this.inputRef)
      //  this.inputRef.current.value=1000
    }

    clickHandler =()=>{
        // alert(this.inputRef.current.value)
        this.inputRef.current.style.color='red'
        // this.inputRef.current.style.backgroundColor="Blue"
        // this.inputRef.current.style.display='none'
    }
    
  render() {
    return (
      <div>
        <label>Name:</label>
        <input type='text' ref={this.inputRef}/>

        <button className='bg-primary' onClick={this.clickHandler}>Change</button>
      </div>
    )
  }
}

export default FwrRef
