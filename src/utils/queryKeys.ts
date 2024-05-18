import { generateQueryKeys } from "./functions";

const companyQueryKeys = generateQueryKeys("companyKeys");
const companyTypeQueryKeys = generateQueryKeys("companyTypeKeys");
const storeQueryKeys = generateQueryKeys("storeKeys");
const productQueryKeys = generateQueryKeys("productKeys");
const productCategoryQueryKeys = generateQueryKeys("productCategoryKeys");

export {
  companyQueryKeys,
  companyTypeQueryKeys,
  storeQueryKeys,
  productQueryKeys,
  productCategoryQueryKeys,
};
