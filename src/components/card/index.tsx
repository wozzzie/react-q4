import React from 'react';
import './index.css';
import CardProps from '../../types/types';

class Card extends React.Component<CardProps> {
  render() {
    const { strAlcoholic, strDrink, strDrinkThumb, strInstructions } =
      this.props;

    return (
      <div className="card" data-testid="card">
        <img src={strDrinkThumb} className="card__image"></img>
        <div className="card__header">
          <p className="card__title">{strDrink}</p>
          <p className="card__title">{strAlcoholic}</p>
        </div>
        <p className="card__descr">Instructions: {strInstructions}</p>
      </div>
    );
  }
}

export default Card;
