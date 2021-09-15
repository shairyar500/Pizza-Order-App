import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";


function OrderList(){

  let history = useHistory();

  const [orderPizza, setOrderPizza] = useState([]);
  useEffect(() => {
    fetch('https://order-pizza-api.herokuapp.com/api/orders')
  .then((results) => results.json())
  .then((data) =>{
    setOrderPizza(data)
    
    })
  }, [])
  
    return(
      <>
      <h3>My Orders</h3>
      {orderPizza.map((pizza) =>(
      
      <div>
      <Card className = "App" style={{ width: '22rem', padding: '10px 40px'}}></Card>
        <div className = "orderDivText">
        <Card.Body>
        <Card.Title>Crust: {pizza.Crust}</Card.Title>
        <Card.Title>Flavor: {pizza.Flavor}</Card.Title>
        <Card.Title>Size: {pizza.Size}</Card.Title>
        </Card.Body>
        <Button className="btn btn-success" style={{ alignItems: 'center'}} onClick = {() => history.push('/options')}>Back</Button>
        </div>
      </div>
    
    ))}
    
    </>        
    );} 

export default OrderList;