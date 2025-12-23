// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  address: string;
  cardDetails?: CardDetails;
  createdAt: Date;
}

export interface CardDetails {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

// Food Types
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
  ingredients: string[];
  isAvailable: boolean;
  sideOptions?: SideOption[];
  drinkOptions?: DrinkOption[];
  extras?: Extra[];
  optionalIngredients?: OptionalIngredient[];
}

export type FoodCategory = 
  | 'starter' 
  | 'main' 
  | 'dessert' 
  | 'beverage' 
  | 'alcohol' 
  | 'burger';

export interface SideOption {
  id: string;
  name: string;
  isIncluded: boolean;
  price?: number;
}

export interface DrinkOption {
  id: string;
  name: string;
  price: number;
  isAddon: boolean;
}

export interface Extra {
  id: string;
  name: string;
  price: number;
}

export interface OptionalIngredient {
  id: string;
  name: string;
  canRemove: boolean;
  canAddExtra: boolean;
  extraPrice?: number;
}

// Cart Types
export interface CartItem {
  id: string;
  foodItem: FoodItem;
  quantity: number;
  selectedSides: string[];
  selectedDrinks: string[];
  selectedExtras: Extra[];
  specialInstructions: string;
  totalPrice: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  userAddress: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  createdAt: Date;
  deliveryAddress: string;
  paymentMethod: string;
}
