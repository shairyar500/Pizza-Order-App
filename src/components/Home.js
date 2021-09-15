import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useHistory} from "react-router-dom";

function Home() {

  let history = useHistory();

  return (
   <div>
      <Card className=" logoDiv text-center">
      <Card.Body>  
        <Card.Text>
        <h2>Order your Pizza now at pizzahot.com</h2>
        </Card.Text>
        <Button className="btn btn-success" onClick = {() => history.push('/options')}>Order Now</Button>
        </Card.Body>
    </Card>
    </div>
   );
}
export default Home;