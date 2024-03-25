import React, { useContext } from "react";
import newrelease01 from "../assets/images/books/new-release-01.png";
import AppContext from "../contexts/AppContext";
export default function Books() {

  const {cart, setCart} = useContext(AppContext);

  const newReleaseBooks = [{id:1, name:"Kathryn Moris", price:300,}]

  const onPurchaseClick = (book) => {
    const _cart = [...cart];
    if (_cart.find)
    _cart.push({id:1, name:"Kathryn Moris", price:300,});
  }

  return (
    <div>
      <div style={{ display: "flex", flexFlow: "row-nowrap" }}>
        <div style={{ padding: "10px" }}>
          <div>
            <p>New Release</p>
          </div>
          <div>
            <h1 className="elementor-heading-title elementor-size-default">
              This Dark
              <br /> Road to Mercy
            </h1>
          </div>
          <div>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "20mm" }}>
              <button onClick={() => onPurchaseClick(newReleaseBooks[0])}>Purchase</button>
            </div>
            <div>
              <a>
                <span>
                  <span>
                    <i aria-hidden="true" className="fab fa-amazon"></i>{" "}
                  </span>
                  <span>READ ON KINDLE</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={newrelease01}></img>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyItems: "center", flexFlow: "column" }}
      >
        <div>
          <p>Complete Series Of</p>
        </div>
        <div>
          <h2>Smoke And The Heart</h2>
        </div>
        <div>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit.
          </p>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
