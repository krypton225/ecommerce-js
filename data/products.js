import GenerateID from "../utils/generateID.js";

const products = [
    {
        pathPic: "../assets/images/products/phone-1.webp",
        picAltText: "Phone 1",
        productPrice: 400,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-2.webp",
        picAltText: "Phone 2",
        productPrice: 800,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-3.webp",
        picAltText: "Phone 3",
        productPrice: 630,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-4.webp",
        picAltText: "Phone 4",
        productPrice: 860,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-5.webp",
        picAltText: "Phone 5",
        productPrice: 560,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-6.webp",
        picAltText: "Phone 6",
        productPrice: 430,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-7.webp",
        picAltText: "Phone 7",
        productPrice: 700,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-8.webp",
        picAltText: "Phone 8",
        productPrice: 1200,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-9.webp",
        picAltText: "Phone 9",
        productPrice: 1500,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-10.webp",
        picAltText: "Phone 10",
        productPrice: 1000,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-11.webp",
        picAltText: "Phone 11",
        productPrice: 1800,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-12.webp",
        picAltText: "Phone 12",
        productPrice: 1450,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-13.webp",
        picAltText: "Phone 13",
        productPrice: 680,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-14.webp",
        picAltText: "Phone 14",
        productPrice: 960,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-15.webp",
        picAltText: "Phone 15",
        productPrice: 2000,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-16.webp",
        picAltText: "Phone 16",
        productPrice: 4000,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-17.webp",
        picAltText: "Phone 17",
        productPrice: 1670,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-18.webp",
        picAltText: "Phone 18",
        productPrice: 3200,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-19.webp",
        picAltText: "Phone 19",
        productPrice: 4400,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
    {
        pathPic: "../assets/images/products/phone-20.webp",
        picAltText: "Phone 20",
        productPrice: 1265,
        productDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, labore!",
        productFullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus eius, quas architecto, iste ea nihil quidem eveniet ad neque maxime cupiditate esse nisi voluptas quae in quod molestiae cumque explicabo repellendus aliquid dolor voluptates."
    },
];

(() => GenerateID(products))();

export default products;