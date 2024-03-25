import React, { useContext, useEffect, useState } from "react";
import {Container, Row, Button} from "react-bootstrap";
import NewsTitle from "../components/NewsTitle";
import AppContext from "../contexts/AppContext";

export default function Home() {

  const  {data, loading, refresh} = useContext(AppContext);
  

  return (
    <Container fluid>
      <Button onClick = {refresh}>Reload</Button>
      { !loading &&
      <Row>
        {
          data.map((item, index) => {
            return (
              <NewsTitle item={item}></NewsTitle>
            )
          })
        }
      </Row>
    }
    {loading && <span>Loading</span>}
    </Container>
  );
}
