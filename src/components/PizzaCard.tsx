import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Pizza } from '../types';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

interface PizzaCardProps {
  pizza: Pizza;
  onAddToCart: (pizza: Pizza) => void;
  isInCart: boolean;
}

export function PizzaCard({ pizza, onAddToCart, isInCart }: PizzaCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/pizza/${pizza.id}`}>
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
        />
      </Link>
      <div className="p-4">
        <Link 
          to={`/pizza/${pizza.id}`}
          className="text-lg font-semibold hover:text-[color:var(--color-primary-600)] transition-colors"
        >
          {pizza.name}
        </Link>
        <p className="text-gray-600 mt-1">{pizza.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[color:var(--color-primary-600)] font-bold">
            ${pizza.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(pizza)}
            className={clsx(
              'px-4 py-2 rounded-md font-medium transition-colors',
              isInCart 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-[color:var(--color-primary-600)] text-white hover:bg-[color:var(--color-primary-700)]'
            )}
          >
            <ShoppingCartIcon className="h-5 w-5 inline-block mr-2" />
            {isInCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
} 