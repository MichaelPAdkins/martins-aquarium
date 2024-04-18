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
            fishImage: "photo here",
            fishSpecies: "Deepwater Catfish",
            fishLength: "3",
            martinNameForFish: "Bart",
            harvestLocation:"Ohio River",
            diet: "Crustaceans",
            
        },

        {
            id: 2,
            fishImage: "photo here",
            fishSpecies: "Grande Piscine",
            fishLength: "77",
            martinNameForFish: "Icky Tank Dwelling Boy",
            harvestLocation:"Everglades",
            diet: "Cheese",
            
        },

        {
            id: 3,
            fishImage: "photo here",
            fishSpecies: "Muffinhead Seabass",
            fishLength: 15",
            martinNameForFish: "Muffy",
            harvestLocation:"Coast of Chile",
            diet: "Microplastics",
            
        },

        {
            id: 4,
            fishImage: "photo here",
            fishSpecies: "Deepwater Toothfish",
            fishLength: "33",
            martinNameForFish: "Ruth the Tooth",
            harvestLocation:"Atlantic Coast",
            diet: "Agricultural Runoff",
            
        },

        {
            id: 5,
            fishImage: "photo here",
            fishSpecies: "Predatorface Fish",
            fishLength: "9",
            martinNameForFish: "Boba Fett",
            harvestLocation:"Panama Canal",
            diet: "Bananas",
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}