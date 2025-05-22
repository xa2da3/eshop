export interface Product {
  id: number;
  name: string;
  thumbnail_url: string;
  price: number;
  size?: string
  synced?: number;
  external_id?: string;
  retailPrice?: number;
  category?: string;
  description?: string;
  sync_variants?: Variant[];
}

export interface Variant {
  size: string;
  color: string;
  retail_price: number;
  files?: File[];
}

export interface File {
  type: string;
  thumbnail_url: string;
}
