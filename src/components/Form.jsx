import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    quantity: 0,
  };
  render() {
    return (
      <div>
        <h3>Ajouter des articles à acheter</h3>
        <form>
          <input type="number" placeholder="Quantité" />
          <input type="text" placeholder="Article" />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default Form;
