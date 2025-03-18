import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Pizza } from '../types';
import { PropsWithChildren } from 'react';

interface LayoutProps {
  cart: Pizza[];
}

export function Layout({ cart, children }: PropsWithChildren<LayoutProps>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary-600">
                Pizza Shop
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Contact Us
              </Link>
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
} 