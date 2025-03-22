import React from 'react'
import Card from '../Card/Card'
import { JSX } from 'react/jsx-runtime';

interface Props {}

const CardList : React.FC<Props> = (props: Props): JSX.Element =>{
  return (
    <div>
<Card companyName='Apple' ticker='aapl' price={100}/>
<Card companyName='Microsoft' ticker='ms' price={200}/>
<Card companyName='Amazon' ticker='am' price={150}/>
<Card companyName='Tesla' ticker='X' price={250}/>
    </div>
  )
}
export default CardList;