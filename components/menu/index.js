import React from "react";
import Link from "next/link";

function MenuComponents({ menu }) {
  const renderMenu = (items) => {
    return items?.map((item) => {
      return (
        <li key={item.id}>
          <Link href={`/category/${item.id}`}>{item.name}</Link>
          {item.children && item.children.length > 0 ? (
            <ul key={Math.random()}>
              {item.children ? renderMenu(item.children) : null}
            </ul>
          ) : null}
        </li>
      );
    });
  };

  return <ul className="nav-menu">{renderMenu(menu)}</ul>;
}

export default MenuComponents;
