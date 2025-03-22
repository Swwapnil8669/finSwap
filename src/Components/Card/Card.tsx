import React from 'react'
import apple from "../img/apple_logo.webp"
import "./Card.css";
import { JSX, jsx } from 'react/jsx-runtime';

interface Props  {
  companyName : string;
  ticker : string;
  price : number;
}

const Card : React.FC<Props> =  ({companyName ,ticker ,price}: Props): JSX.Element  => {
  return (
    <div className='card'>
<img
src={apple}
alt='Image'
/>
<div className='details'>
    <h2>{companyName} ({ticker})</h2>
    <p>${price}</p>
</div>
<p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque omnis dicta rem nulla maxime, tempora laborum! Saepe consequatur corporis possimus atque quaerat consectetur. Voluptatum veniam, enim fugiat ipsam ad recusandae?</p>

    </div>
  )
}
export default Card