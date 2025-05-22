export interface Product {
  id: number;
  external_id: string;
  variants: number;
  synced: number;
  name: string;
  thumbnail_url: string;
  price: number;
  size: string
  retailPrice?: string;
  category?: string;
  sync_variants?: number[];
}
