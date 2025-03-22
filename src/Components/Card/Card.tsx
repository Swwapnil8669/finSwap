import React from 'react'
import apple from "../img/apple_logo.webp"
import "./Card.css";

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
<img
src={apple}
alt='Image'
/>
<div className='details'>
    <h2>apple</h2>
    <p>$110</p>
</div>
<p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque omnis dicta rem nulla maxime, tempora laborum! Saepe consequatur corporis possimus atque quaerat consectetur. Voluptatum veniam, enim fugiat ipsam ad recusandae?</p>

    </div>
  )
}
export default Card