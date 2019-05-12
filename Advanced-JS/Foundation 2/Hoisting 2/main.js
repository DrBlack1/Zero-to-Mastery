// var favouriteFood = undefined;
// var foodThoughts = undefined;

const favouriteFood = "grapes";

const foodThoughts = function () {
    favouriteFood = undefined;
    console.log("Original favourite food: " + favouriteFood);

    const favouriteFood = "sushi";

    console.log("New favourite food: " + favouriteFood);
};

foodThoughts()