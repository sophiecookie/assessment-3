const restaurants = ["Wendy's", "Chipotle"];

function getRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    alert(`I recommend trying: ${randomRestaurant}`);
}

document.getElementById('randomRestaurantBtn').addEventListener('click', getRandomRestaurant);
