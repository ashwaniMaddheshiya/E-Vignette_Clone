import React from 'react'
import './styles/ArrowPointerStyle.css'

const ArrowPointer = (props) => {
  return (
    <>
    <div href="#" class="arrow arrow-right">{props.message}</div>
    </>
  )
}

export default ArrowPointer