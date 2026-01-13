# Discrpition
This is a basic web app to perform CRUD operations.

## Installation
1. Clone the repo:
   
   git clone https://github.com/Tejsvi78/Backend-Basics.git

2. Change Directory
    cd Backend-Basics

3. install dependencies 
    npm install

4. create .env
    PORT: 
    MONGODB_URL:

5. Start server
    npm run dev


## Testing the APIs (Postman)

POST    http://localhost:3000/api/v1/createBlog
DELETE  http://localhost:3000/api/v1/deleteBlog/:id
GET     http://localhost:3000/api/v1/getAllBlogs
GET     http://localhost:3000/api/v1/getBlogById/:id
PUT     http://localhost:3000/api/v1/updateBlog/:id
PATCH   http://localhost:3000/api/v1/editDetails/:id