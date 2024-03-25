import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import AppContext from '../contexts/AppContext';


function Cart() {
    const {cart, setCart} = useContext(AppContext)
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> 
            }           
            <tr>
              <td>2</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      );
}

export default Cart
