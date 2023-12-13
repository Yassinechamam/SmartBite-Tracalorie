class Meal {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
        this.id = Math.random().toString(16).slice(2);
    }
}

class Workout {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
        this.id = Math.random().toString(16).slice(2);
    }
}

export { Meal, Workout };