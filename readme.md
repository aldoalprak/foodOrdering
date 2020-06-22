Brief description: 
The ​system ​is ​meant ​to ​assist ​restaurants ​in ​processing ​the orders ​of ​the customers.
Using ​the ​mobile ​device, ​each customer will ​be ​able ​to ​select ​a ​number ​of dishes
from ​the ​menu ​to ​place ​the order. ​The dishes will ​be ​then ​be ​grouped ​and ​forwarded
to chefs ​by ​the ​system. ​Whenever ​a chef ​finish ​cooking ​a dish, ​the chef would ​click ​to see ​the ​what ​should ​be ​his ​next dish. ​

Steps to Get Started

1. npm install
2. Change username and password in config.json
2. sequelize db:create
3. sequelize db:migrate
4. sequelize db:seed:all
5. npm run start

admin login username = admin@mail.com
admin login password = helloworld123

Routes

ADMIN LOGIN
| Routes             | HTTP Method | Descriptions              |
|--------------------|-------------|---------------------------|
| /                  | GET         | render admin login page   |         |
| /                  | POST        | admin signIn              |

ADMINS
| Routes             | HTTP Method | Descriptions            |
|--------------------|-------------|-------------------------|
| /admins            | GET         | get all admin           |
| /admins/add        | GEt         | render "admin add" page |
| /admins/add        | POST        | adding admin to DB      |
| /admins/:id/delete | GET         | delete selected admin   |

CHEFS
| Routes            | HTTP Method | Descriptions           |
|-------------------|-------------|------------------------|
| /chefs            | GET         | get all chef           |
| /chefs/add        | GET         | render "chef add" page |
| /chefs/add        | POST        | adding chef to DB      |
| /chefs/:id/delete | GET         | delete selected chef   |
| /chefs/signIn     | POST        | chef signIn            |

DISHES
| Routes             | HTTP Method | Descriptions              |
|--------------------|-------------|---------------------------|
| /dishes            | GET         | get all dishes            |
| /dishes/add        | GET         | render "dishes add" page  |
| /dishes/add        | POST        | adding dish to DB         |
| /dishes/:id/edit   | GET         | render "dishes edit" page |
| /dishes/:id/edit   | POST        | update dish properties    |
| /dishes/:id/delete | GET         | delete selected dish      |

API DishOrders
| Routes             | HTTP Method | Descriptions              |
|--------------------|-------------|---------------------------|
| /dishes            | GET         | get all dishes            |
| /dishes/add        | GET         | render "dishes add" page  |
| /dishes/add        | POST        | adding dish to DB         |
| /dishes/:id/edit   | GET         | render "dishes edit" page |
| /dishes/:id/edit   | POST        | update dish properties    |
| /dishes/:id/delete | GET         | delete selected dish      |

API Orders
| Routes                      | HTTP Method | Descriptions                      |
|-----------------------------|-------------|-----------------------------------|
| /api/orders/:id/submitorder | POST        | submit customer order             |
| /api/orders/allOrder        | GET         | get all order data                |
| /api/orders/totalPrice      | GET         | get total price for each customer |

API Dishes
| Routes      | HTTP Method | Descriptions   |
|-------------|-------------|----------------|
| /api/dishes | GET         | get all dishes |

API Customers
| Routes                | HTTP Method | Descriptions    |
|-----------------------|-------------|-----------------|
| /api/customers/signUp | POST        | customer signUp |
| /api/customers/signIn | POST        | customer signIn |