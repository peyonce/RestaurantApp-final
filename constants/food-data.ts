import { FoodItem } from '../lib/types';

export const foodCategories = [
  { id: '1', name: 'Starters', icon: '🥗', count: 8 },
  { id: '2', name: 'Burgers', icon: '🍔', count: 12 },
  { id: '3', name: 'Mains', icon: '🍝', count: 15 },
  { id: '4', name: 'Desserts', icon: '🍰', count: 10 },
  { id: '5', name: 'Beverages', icon: '🥤', count: 20 },
  { id: '6', name: 'Alcohol', icon: '🍺', count: 8 },
];

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Gold Class Burger',
    description: 'Premium wagyu beef with black truffle, gold leaf, and special gold sauce',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    category: 'burger',
    ingredients: ['Wagyu Beef', 'Black Truffle', 'Gold Leaf', 'Brioche Bun', 'Gold Sauce'],
    isAvailable: true,
    sideOptions: [
      { id: 's1', name: 'Truffle Fries', isIncluded: true },
      { id: 's2', name: 'Gold Dusted Onion Rings', isIncluded: true },
      { id: 's3', name: 'Caviar Salad', isIncluded: false, price: 12.99 },
    ],
    drinkOptions: [
      { id: 'd1', name: 'Gold Champagne', price: 24.99, isAddon: true },
      { id: 'd2', name: 'Black Label Whiskey', price: 19.99, isAddon: true },
    ],
    extras: [
      { id: 'e1', name: 'Extra Gold Leaf', price: 9.99 },
      { id: 'e2', name: 'Black Truffle Shavings', price: 14.99 },
      { id: 'e3', name: 'Caviar Topping', price: 29.99 },
    ],
  },
  {
    id: '2',
    name: 'Black Truffle Pizza',
    description: 'Artisanal pizza with black truffle, gold-infused olive oil, and 24k gold flakes',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    category: 'main',
    ingredients: ['Black Truffle', 'Gold Flakes', 'Mozzarella', 'Gold Olive Oil'],
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Gold Chocolate Lava',
    description: 'Dark chocolate cake with 24k gold dust and liquid gold center',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62dadadf',
    category: 'dessert',
    ingredients: ['Dark Chocolate', '24K Gold', 'Gold Leaf', 'Vanilla Bean Ice Cream'],
    isAvailable: true,
  },
  {
    id: '4',
    name: 'Black Caviar Salad',
    description: 'Premium salad with black caviar, gold leaf, and truffle dressing',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
    category: 'starter',
    ingredients: ['Black Caviar', 'Gold Leaf', 'Mixed Greens', 'Truffle Dressing'],
    isAvailable: true,
  },
];
