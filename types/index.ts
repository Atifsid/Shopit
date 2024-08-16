export interface Product {
  id?: number;
  title?: string;
  price?: number;
  image?: string;
}

export interface CartProduct {
  id?: number;
  title?: string;
  price?: number;
  image?: string;
  quantity?: number;
}

export interface CartState {
  cartSize: number;
  cartItems: CartProduct[];
  totalPrice: number;
  couponApplied: boolean;
}

export interface AuthState {
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  token: string | null;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface BaseResponse<T> {
  code: number;
  status: string;
  message: string;
  data: T;
}

export interface AuthResponse {
  id: number;
  email: string;
  token: string;
}
