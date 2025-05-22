export interface Product {
  id: number;
  name: string;
  thumbnail_url: string;
  price: number;
  size?: string
  synced?: number;
  variants?: number;
  external_id?: string;
  retailPrice?: number;
  category?: string;
  sync_variants?: number[];
}
