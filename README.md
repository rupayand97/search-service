### Search Service

#### Features  
##### 1. Store products in an in-memory catalog 
##### 2. Search products using a query string
##### 3. Rank search results based on:
##### 4. Text match
##### 5. Product rating
##### 6. Stock availability
##### 7. Price
##### 8. Simple REST APIs
##### 9. Deployed and accessible publicly

#### --------------------------------------------------

#### Architecture
##### Framework: *Express (Node.js)*
##### Storage: *In-memory (Array)*
##### Design: *Routes → Controllers → Services*
##### Deployment: *Render*

#### --------------------------------------------------
#### Base URL
##### *https://search-service-1.onrender.com/*

#### API Endpoints

##### Store Product: POST     */api/v1/product*

##### Update Product Metadata: PUT */api/v1/product/meta-data*

##### Search Products : GET */api/v1/search/product?query=laptop*

#### --------------------------------------------------