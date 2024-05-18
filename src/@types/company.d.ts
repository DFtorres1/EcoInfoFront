type Company = {
  id: string;
  name: string;
  updated_at?: Date;
  created_at?: Date;
  company_type_id?: string;
};

type CompanyType = {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
};

type Store = {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  direction: string;
  latitude: string;
  longitude: string;
  company_id: string;
};
