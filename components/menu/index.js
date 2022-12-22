import React from "react";

function MenuComponents({ menu }) {
  const renderMenu = (items) => {
    return items?.map((item) => {
      return (
        <li key={item.key}>
          <a href={item.path}>{item.label}</a>
          {item.childrens && item.childrens.length > 0 ? (
            <ul key={Math.random()}>
              {item.childrens ? renderMenu(item.childrens) : null}
            </ul>
          ) : null}
        </li>
      );
    });
  };

  return <ul className="nav-menu">{renderMenu(menu)}</ul>;
}

export default MenuComponents;
