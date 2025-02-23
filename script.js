// Tomato Man project

// Object representing Tomato Man
const tomatoMan = {
    name: "Tommy",
    color: "Red",
    size: "Medium",
    ripeness: "Ripe",

    // Method to display Tomato Man's details
    displayDetails: function() {
        return `Name: ${this.name}, Color: ${this.color}, Size: ${this.size}, Ripeness: ${this.ripeness}`;
    }
};

// Array of tomato varieties
const tomatoVarieties = ["Roma", "Cherry", "Beefsteak", "Heirloom", "Grape"];

// Method to get a random tomato variety from the array
function getRandomTomatoVariety() {
    const randomIndex = Math.floor(Math.random() * tomatoVarieties.length);
    return tomatoVarieties[randomIndex];
}

// Displaying Tomato Man's details
console.log(tomatoMan.displayDetails());

// Getting a random tomato variety and displaying it
console.log("Random Tomato Variety: " + getRandomTomatoVariety());