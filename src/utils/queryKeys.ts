import { generateQueryKeys } from "./functions";

const companyQueryKeys = generateQueryKeys("companyKeys");
const companyTypeQueryKeys = generateQueryKeys("companyTypeKeys");
const storeQueryKeys = generateQueryKeys("storeKeys");
const productQueryKeys = generateQueryKeys("productKeys");
const productCategoryQueryKeys = generateQueryKeys("productCategoryKeys");
const weatherQueryKeys = generateQueryKeys("weatherKeys");

export {
  companyQueryKeys,
  companyTypeQueryKeys,
  storeQueryKeys,
  productQueryKeys,
  productCategoryQueryKeys,
  weatherQueryKeys
};
