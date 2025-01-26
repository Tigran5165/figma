import Home from "../component/pages/home/Home";
import Blog from "../component/pages/blog/Blog";
import Recipes from "../component/pages/recipes/Recipes";
import AboutUs from "../component/pages/about/AboutUs";
import Contact from "../component/pages/contact/Contact";

export const routesArray = [
    {
        id: 1,
        name: 'Home',
        component: Home,
        path: '/'
    }, {
        id: 2,
        name: 'Recipes',
        component: Home,
        // component: Recipes,
        path: '/recipes'
    }, {
        id: 3,
        name: 'Blog',
        component: Blog,
        path: '/blog'
    }, {
        id: 4,
        name: 'Contact',
        component: Contact,
        path: '/contact'
    }, {
        id: 5,
        name: 'About Us',
        component: Home,
        // component: AboutUs,
        path: '/about-us'
    },
]