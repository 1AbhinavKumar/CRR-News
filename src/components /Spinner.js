import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        {/* importing the loading sign */}
        <img src={loading} alt='LOADING' height={"30rem"} width={"30rem"}/>  
      </div>
    )
  }
}

export default Spinner