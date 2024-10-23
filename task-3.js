function isRaining(isRain) {
    return isRain ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}

console.log(isRaining(true)); // 'wet day - you need an umbrella'
console.log(isRaining(false)); // 'dry day - leave your umbrella at home'