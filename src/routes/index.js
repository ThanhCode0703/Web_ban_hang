// import HomePages from '../Pages/HomePages/HomePages';
// import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
// import OrderPages from '../Pages/OrderPages/OrderPages';
// import ProductPages from '../Pages/ProductPages/ProductPages';

import HomePages from "../Pages/HomePages/HomePages";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import OrderPages from "../Pages/OrderPages/OrderPages";
import ProductPages from "../Pages/ProductPages/ProductPages";

export const routes = [
    {
        path: '/',
        page: HomePages,
    },
     {
        path: '/order',
        page: OrderPages,
    }, {
        path: '/product',
        page: ProductPages,
    },
    {
        path: '*',
        page: NotFoundPage,
    },
]