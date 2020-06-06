import React from 'react';
import './index.scss';
import { Button } from 'antd';
import itemData from '../../../data/items.json'


const Explore = () => {
  const { items } = itemData;
  return(
    <div className="explore-container">
        <div className="explore-heading">Explore</div>
        <div className="explore-grid">
          {
            items.map((item,i) => <Item key={i} item={item}/>)
          }
        </div>
    </div>
  )
}

const Item = (props) => {

  const { item } = props;

  const onClick = () => {
    console.log('button clicked')
  }
  return (
    <div className="card-container">
      <div className="item-image">
        <img src={item.imageUrl} alt="Some thing test" height="150" width="200"/>
      </div>
      <div className="item-description">
        <div className="item-name">Name: {item.name}</div>
        <div className="item-quantity">Quantity : {item.quantity}</div>
        <div className="item-address">Address : {item.address}</div>
        <div className="item-expirydate">Expiry Date : {item.expiryDate}</div>
        <Button className="item-button" type="primary" onClick={onClick}> Request </Button>
      </div>
    </div>
  )
}
export default Explore;