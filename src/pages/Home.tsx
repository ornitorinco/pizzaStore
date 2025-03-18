import { useOutletContext } from 'react-router-dom';
import { Pizza } from '../types';
import { PizzaCard } from '../components/PizzaCard';
import { pizzas } from '../data/pizzas';

interface OutletContextType {
  cart: Pizza[];
  onAddToCart: (pizza: Pizza) => void;
}

export function Home() {
  const { cart, onAddToCart } = useOutletContext<OutletContextType>();
  const isInCart = (pizza: Pizza) => cart.some((item) => item.id === pizza.id);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Pizzas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onAddToCart={onAddToCart}
            isInCart={isInCart(pizza)}
          />
        ))}
      </div>
    </div>
  );
} 