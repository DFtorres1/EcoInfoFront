export type Company = {
    id: string;
    name: string;
    updated_at?: Date;
    created_at?: Date;
    company_type_id?: Company;
}