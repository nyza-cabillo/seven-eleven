import React from "react";
import "./exploremenu.css";
import { menu_list } from "../../assets/assets";

function exploremenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Products</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sunt
        tenetur eveniet eos, quae reprehenderit officiis, laudantium
        exercitationem doloremque dolore rem nisi corporis unde ducimus soluta
        fugiat tempora sint labore.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default exploremenu;
