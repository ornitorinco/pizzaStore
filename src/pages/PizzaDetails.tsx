import { useParams, useNavigate } from 'react-router-dom';
import { pizzas } from '../data/pizzas';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useOutletContext } from 'react-router-dom';
import { Pizza } from '../types';
import { clsx } from 'clsx';

interface OutletContextType {
  cart: Pizza[];
  onAddToCart: (pizza: Pizza) => void;
}

export function PizzaDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, onAddToCart } = useOutletContext<OutletContextType>();
  const pizza = pizzas.find(p => p.id === Number(id));
  const isInCart = pizza ? cart.some(item => item.id === pizza.id) : false;

  if (!pizza) {
    return <div className="text-center py-8">Pizza not found</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden">
        <div className="relative">
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{pizza.name}</h2>
          <p className="text-gray-600 mb-4">{pizza.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-[color:var(--color-primary-600)] text-xl font-bold">
              ${pizza.price.toFixed(2)}
            </span>
            <button
              onClick={() => onAddToCart(pizza)}
              className={clsx(
                'px-6 py-2 rounded-md font-medium transition-colors flex items-center',
                isInCart 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-[color:var(--color-primary-600)] text-white hover:bg-[color:var(--color-primary-700)]'
              )}
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              {isInCart ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 