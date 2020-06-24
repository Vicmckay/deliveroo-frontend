import React, { useState, useEffect } from "react";
import "./App.css";
import Section from "./components/Section";
import axios from "axios";
import Menu from "./components/Menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + Number(products[i].price) * products[i].quantity;
  }

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div>
        <Section data={data} />
        <div className="back-grey">
          <div className="container">
            <div className="meals">
              {data.categories.map((menu, index) => {
                return (
                  menu.meals.length > 0 && (
                    <Menu
                      key={index}
                      menu={menu}
                      products={products}
                      setProducts={setProducts}
                    />
                  )
                );
              })}
            </div>
            <div className="basket">
              <div className="basket-header">
                <h3>Valider mon panier</h3>
              </div>
              <div className="border">
                {products.map((product, index) => {
                  console.log(product);
                  return (
                    <div>
                      <div className="basket-content">
                        <div className="button-quantity">
                          <button
                            onClick={() => {
                              //On copie le state
                              const newProducts = [...products];
                              newProducts[index].quantity--;
                              setProducts(newProducts);
                              //On modifie le state
                              //On retire le produit si on descend au dessous de 1
                              if (newProducts[index].quantity === 0) {
                                newProducts.splice(index, 1);
                              }

                              //On met à jour le state
                            }}
                          >
                            -
                          </button>
                          <div className="basket-quantity">
                            {product.quantity}
                          </div>
                          <button
                            onClick={() => {
                              const newProducts = [...products];
                              newProducts[index].quantity++;
                              //On modifie le state
                              setProducts(newProducts);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="basket-title">
                          {product.title.slice(0, 25)}
                        </div>
                        <div className="basket-price">
                          {(product.price * product.quantity).toFixed(2)} €
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="price">
                  <div className="subtotal-price">
                    <div>Sous-total</div>
                    <div>{total.toFixed(2)} €</div>
                  </div>
                  <div className="delivery">
                    <div>Frais de livraison</div>
                    <div>2,50 €</div>
                  </div>
                </div>
                <div className="total-price">
                  <div className="total-name">Total</div>
                  <div>{(total + 2.5).toFixed(2)} €</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
