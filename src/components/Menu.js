import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu, products, setProducts }) => {
  return (
    <>
      <div>
        <div>
          <span>
            <h2>{menu.name}</h2>
          </span>
          <div className="wrapper-menu">
            {menu.meals.map((item, index) => {
              return (
                <MenuItem
                  key={item.id}
                  item={item}
                  products={products}
                  setProducts={setProducts}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
