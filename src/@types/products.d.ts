type Product = {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  brand: string;
  product_category_id: string;
};

type ProductCategory = {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
};
