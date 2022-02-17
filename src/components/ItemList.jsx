import React from "react";

const ItemList = (props) => {
  return (
    <div>
      {props.articles.map((article) => (
        <div key={article.id}>
          {article.name} {article.quantity}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
