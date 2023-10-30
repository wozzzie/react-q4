import { Component } from 'react';
import Card from '../../components/card';
import Loader from '../../components/loader';
import CardProps from '../../types/types';

import './index.css';

interface ResultsProps {
  drinks: CardProps[];
  isLoading: boolean;
}

class Results extends Component<ResultsProps> {
  render() {
    const { drinks, isLoading } = this.props;

    return (
      <div className="home__wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="home__card">
            {drinks.map((card: CardProps) => (
              <Card
                key={card.idDrink}
                idDrink={card.idDrink}
                strDrinkThumb={card.strDrinkThumb}
                strDrink={card.strDrink}
                strAlcoholic={card.strAlcoholic}
                strInstructions={card.strInstructions}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Results;
