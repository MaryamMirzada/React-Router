const Products = [{
        "id": 1,
       "img": "https://tse1.mm.bing.net/th/id/OIP.HWd6dmds64m1xmDoshLvSwHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
        "name": "iPhone 14 Pro",
        "category": "Mobile",
        "price": 999 + '$',
        "description": "Latest smartphone with A16 chip, 128GB storage and advanced camera."
    },
    {
        "id": 2,
        "img": 'https://tse4.mm.bing.net/th/id/OIP.LnD-p62nYHYlwnIIabXBQQHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Samsung Galaxy S23",
        "category": "Mobile",
        "price": 850 + '$',
        "description": "Powerful Android phone with 8GB RAM and high-quality display."
    },
    {
        "id": 3,
        "img": 'https://th.bing.com/th/id/R.639f4ebbcd0829fa74b547e844b3c99f?rik=s%2bG7ktuGs67whA&pid=ImgRaw&r=0',
        "name": "HP Pavilion Laptop",
        "category": "Laptop",
        "price": 700 + '$',
        "description": "Core i7 laptop with 16GB RAM and 512GB SSD for work and study."
    },
    {
        "id": 4,
        "img": 'https://tse4.mm.bing.net/th/id/OIP.UTHIambwde1kzCI5OAyYhwHaEo?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Dell Inspiron Laptop",
        "category": "Laptop",
        "price": 650 + '$',
        "description": "Reliable laptop with long battery life and strong performance."
    },
    {
        "id": 5,
        "img": 'https://th.bing.com/th/id/OIP.SvKAsrVXAPb5SbHV1ixpnQHaGp?o=7&cb=defcachec2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Lenovo Tab M10",
        "category": "Tablet",
        "price": 300 + '$',
        "description": "10-inch Android tablet with good battery and display."
    },
    {
        "id": 6,
        "img": 'https://tse4.mm.bing.net/th/id/OIP.T0M6m6T9a7OExikYpiX_lAHaJy?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Wireless AirPods",
        "category": "Accessories",
        "price": 150 + '$',
        "description": "Bluetooth earbuds with clear sound and fast charging."
    },
    {
        "id": 7,
        "img": 'https://tse4.mm.bing.net/th/id/OIP.mSlSJ88cNuD7Eb5DfQNx0QHaI1?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Smart Watch Series 8",
        "category": "Watch",
        "price": 120 + '$',
        "description": "Fitness tracking smart watch with heart rate monitor."
    },
    {
        "id": 8,
        "img": 'https://electronikz.com/images/rgb-wireless-gaming-mouse-review_thumbnail.jpg',
        "name": "Gaming Mouse RGB",
        "category": "Accessories",
        "price": 40 + '$',
        "description": "High precision mouse with colorful RGB lighting."
    },
    {
        "id": 9,
        "img": 'https://th.bing.com/th/id/OIP.A1qVLYLnyIAoIo1fcENhxgHaHa?o=7&cb=defcachec2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Mechanical Keyboard RGB",
        "category": "Accessories",
        "price": 90 + '$',
        "description": "Professional keyboard for gaming and typing."
    },
    {
        "id": 10,
        "img": 'https://tse3.mm.bing.net/th/id/OIP.ZMvOR50Xs_CzXy8-wFH7EQHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Bluetooth Speaker",
        "category": "Speaker",
        "price": 60 + '$',
        "description": "Portable speaker with strong bass and long battery."
    },
    {
        "id": 11,
        "img": 'https://th.bing.com/th/id/OIP.4tNC8eSHwuOqUNDn3iJ_8gHaGP?o=7&cb=defcachec2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "LED Monitor 24 inch",
        "category": "Monitor",
        "price": 180 + '$',
        "description": "Full HD monitor suitable for office and gaming."
    },
    {
        "id": 12,
        "img": 'https://tse1.mm.bing.net/th/id/OIP.BKA9nrueOnOzAqrVyoWoKQHaFR?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Power Bank 20000mAh",
        "category": "Accessories",
        "price": 25 + '$',
        "description": "Fast charging power bank for mobile devices."
    },
    {
        "id": 13,
        'img': 'https://tse2.mm.bing.net/th/id/OIP.OO4YuzeGT3YEoeisp3jn4AHaFo?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Canon DSLR Camera",
        "category": "Camera",
        "price": 500 + '$',
        "description": "High-quality camera for photography and video."
    },
    {
        "id": 14,
        "img": 'https://tse4.mm.bing.net/th/id/OIP.ys0YvzN3Akfo774XVThVkQHaGD?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Security Camera HD",
        "category": "Security",
        "price": 80 + '$',
        "description": "Home security camera with night vision."
    },
    {
        "id": 15,
        "img": 'https://tse2.mm.bing.net/th/id/OIP.bhRKBTHsaiwft1oiUsIcrAHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "WiFi Router",
        "category": "Network",
        "price": 70 + '$',
        "description": "High speed wireless router for home and office."
    },
    {
        "id": 16,
        "img": 'https://tse1.mm.bing.net/th/id/OIP.BdO4-R2d8oibXXnmlaT3JAEsDd?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "USB Flash 64GB",
        "category": "Storage",
        "price": 15 + '$',
        "description": "Portable storage device with fast transfer speed."
    },
    {
        "id": 17,
        'img': 'https://arcticcomputershop.com/wp-content/uploads/2022/07/4.jpg',
        "name": "External Hard Drive 1TB",
        "category": "Storage",
        "price": 85 + '$',
        "description": "Portable hard drive for backup and storage."
    },
    {
        "id": 18,
        "img": 'https://tse2.mm.bing.net/th/id/OIP.q3VW1jdX3ph9ebDw8W70YAHaGy?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Gaming Headset",
        "category": "Gaming",
        "price": 75 + '$',
        "description": "Headset with microphone and surround sound."
    },
    {
        "id": 19 + '$',
            "img": 'https://tse1.mm.bing.net/th/id/OIP.YaMdVXK6r9rwyzcaCLetDAHaHM?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Mini Projector",
        "category": "Video",
        "price": 220,
        "description": "HD projector for home cinema and presentations."
    },
    {
        "id": 20,
        "img": 'https://tse3.mm.bing.net/th/id/OIP.n1Vcu4xt9y1ExC7GfSF4dQHaE6?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3',
        "name": "Smart TV 43 inch",
        "category": "TV",
        "price": 400 + '$',
        "description": "Full HD smart television with internet and apps."
    }
]
export default Products