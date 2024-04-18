/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            image: "https://blog.classhook.com/wp-content/uploads/2017/09/simpsons3eyefish.jpg",
            name: " Bart ",
            species: " Deepwater Catfish ",
            length: 3,
            location:" Ohio River ",
            diet: " Crustaceans ",
            
        },

        {
            id: 2,
            image: "https://pics.craiyon.com/2023-08-05/edc586a89ba042dca46321271fe8d160.webp",
            name: " Icky Tank Dwelling Boy ",
            species: " Grande Piscine ",
            length: 77,
            location:" Everglades ",
            diet: " Cheese ",
            
        },

        {
            id: 3,
            image: "https://steemitimages.com/DQmTxLvC8wx8RhgyxHsuEvDjVHQWHrNg7FxeySFs5fKx2KU/unnamed%20(1).jpg",
            name: " Muffy ",
            species: " Muffinhead Seabass ",
            length: 15,
            location:" Coast of Chile ",
            diet: " Microplastics ",
            
        },

        {
            id: 4,
            image: "https://preview.redd.it/3dqc3v2xtic91.png?auto=webp&s=d9dce01f0f95efca3bb5457b6f3dc940285c5054",
            name: " Ruth the Tooth ",
            species: " Deepwater Toothfish ",
            length: 33,
            location:" Atlantic Coast ",
            diet: " Agricultural Runoff ",
            
        },

        {
            id: 5,
            image: "https://cdn.shopify.com/s/files/1/1216/6976/files/Sarcastic_Fringeheads_large.jpg?v=1501953538",
            name: " Boba Fett ",
            species: " Predatorface Fish ",
            length: 9,
            location:" Panama Canal ",
            diet: " Bananas ",

        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}