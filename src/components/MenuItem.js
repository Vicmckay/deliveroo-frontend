import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ({ item, products, setProducts }) => {
  return (
    <div>
      <button
        className="menuButton"
        onClick={() => {
          let copy = [...products];
          console.log(products);

          // On cherche si le produit est présent dans letableau
          let isProductFound = false;
          for (let i = 0; i < copy.length; i++) {
            // le produit est déjà présent

            if (copy[i].title === item.title) {
              copy[i].quantity++;
              isProductFound = true;
            }
          }
          if (isProductFound === false) {
            copy.push({ title: item.title, quantity: 1, price: item.price });
          }

          setProducts(copy);
        }}
      >
        <div className="menuItem">
          <div className="menuDescription">
            <h3>{item.title}</h3>
            {item.description.length > 0 && (
              <p>{item.description.slice(0, 60)}...</p>
            )}
            <span style={{ fontSize: 18 }}>{item.price + " €"}</span>
            {item.popular && (
              <span
                style={{ fontSize: 15, color: "orange", fontWeight: "bold" }}
              >
                <FontAwesomeIcon icon="star" />
                Populaire
              </span>
            )}
          </div>
          <div className="foodPicture">
            {item.picture && <img src={item.picture} alt={item.title}></img>}
          </div>
        </div>
      </button>
    </div>
  );
};

export default MenuItem;
