import ERDMechShop from '../assets/ProjectImg/MechShop/ERDMechShop.png';
import MechShopAPI from '../assets/ProjectImg/MechShop/MechShopAPI.png';
import DTD1 from '../assets/ProjectImg/DTD/DTD1.png';
import DTD2 from '../assets/ProjectImg/DTD/DTD2.png';
import Ecom from '../assets/ProjectImg/EcommerceAPI/Ecom.png';
import Ecom1 from '../assets/ProjectImg/EcommerceAPI/Ecom1.png';


export const projects = [
    {
        title: "My Mechanic Shop API",
        description:
            "Developed with Python and Flask, My Mechanic Shop API streamlines operations for auto repair shops by enabling customer, mechanic, ticket, and inventory management through secure RESTful endpoints. It incorporates JWT authentication, advanced querying, rate limiting, and a CI/CD pipeline. This project highlights my backend engineering skills and commitment to building scalable, maintainable APIs.",
        link: "https://github.com/jarr8217/My_Mechanic_Shop_API",
        image: ERDMechShop,
        imageAlt: "ERD Diagram for My Mechanic Shop API",
        image2: MechShopAPI,
        image2Alt: "My Mechanic Shop API Documentation",
    },
    {
        title: "Ecommerce API",
        description: "The Ecommerce API is a modular backend built with Python and Flask, providing robust RESTful endpoints for managing customers, products, and orders. It supports full CRUD operations, proper database relationships, and secure data serialization, making it ideal for modern ecommerce applications. This project showcases my backend development skills in designing scalable, maintainable APIs with strong validation and error handling.",
        link: "https://github.com/jarr8217/Ecommerce_api",
        image: Ecom,
        imageAlt: "Ecommerce API Diagram",
        image2: Ecom1,
        image2Alt: "Ecommerce API Documentation",
    },
    {
        title: "DTD (Defeat The Dragon)",
        description: "The VS Dragon Game is a text-based, turn-based RPG built in Python, where players choose from four unique character classes to battle a powerful dragon using strategy, abilities, and items. Featuring modular design and object-oriented programming, the game offers dynamic combat mechanics like status effects, cooldowns, and health regeneration. This project highlights my skills in Python, game logic, and interactive software development.",
        link: "https://github.com/jarr8217/DTD",
        image: DTD1,
        imageAlt: "Game Screenshot 1",
        image2: DTD2,
        image2Alt: "Game Screenshot 2",
    },
];