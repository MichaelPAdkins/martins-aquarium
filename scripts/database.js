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
            image: "photo here",
            name: "Bart",
            species: "Deepwater Catfish",
            length: "3",
            location:"Ohio River",
            diet: "Crustaceans",
            
        },

        {
            id: 2,
            image: "photo here",
            name: "Icky Tank Dwelling Boy",
            species: "Grande Piscine",
            length: "77",
            location:"Everglades",
            diet: "Cheese",
            
        },

        {
            id: 3,
            image: "photo here",
            name: "Muffy",
            species: "Muffinhead Seabass",
            length: "15",
            location:"Coast of Chile",
            diet: "Microplastics",
            
        },

        {
            id: 4,
            image: "photo here",
            name: "Ruth the Tooth",
            species: "Deepwater Toothfish",
            length: "33",
            location:"Atlantic Coast",
            diet: "Agricultural Runoff",
            
        },

        {
            id: 5,
            image: "photo here",
            name: "Boba Fett",
            species: "Predatorface Fish",
            length: "9",
            location:"Panama Canal",
            diet: "Bananas",

        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}