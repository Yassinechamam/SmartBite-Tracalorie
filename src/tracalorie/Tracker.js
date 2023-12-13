import Storage from "./Storage";


class CalorieTracker {
    constructor () {
        this._calorieLimit = Storage.getCalorieLimit();
        this._totalCalories = Storage.getTotalCalories(0);
        this._meals = Storage.getMeals();
        this._workouts = Storage.getWorkouts();

        this._displayCaloriesTotal();
        this._displayCaloriesLimit();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();

        document.getElementById('limit').value = this._calorieLimit;
    }

    

    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        Storage.updateTotalCalories(this._totalCalories);
        Storage.saveMeal(meal);
        this._displayNewMeal(meal);
        this._render();
    }

    removeMeal(id) {
        const index = this._meals.findIndex((meal) => meal.id === id);

        if (index !== -1) {
            const meal = this._meals[index];
            this._totalCalories -= meal.calories;
            Storage.updateTotalCalories(this._totalCalories);
            this._meals.splice(index, 1);
            localStorage.setItem('meals', JSON.stringify(this._meals));
            this._render();
        }
    }

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
        Storage.updateTotalCalories(this._totalCalories);
        Storage.saveWorkout(workout);
        this._displayNewWorkout(workout);
        this._render();
    }

    removeWorkout(id) {
        const index = this._workouts.findIndex((workout) => workout.id === id);

        if (index !== -1) {
            const workout = this._workouts[index];
            this._totalCalories += workout.calories;
            Storage.updateTotalCalories(this._totalCalories);
            this._workouts.splice(index, 1);
            localStorage.setItem('workouts', JSON.stringify(this._workouts));
            this._render();
        }
    }

    reset() {
        this._totalCalories = 0;
        Storage.updateTotalCalories(this._totalCalories);
        this._meals = [];
        localStorage.setItem('meals', JSON.stringify(this._meals));
        this._workouts = [];
        localStorage.setItem('workouts', JSON.stringify(this._workouts));
        this._render();
    }

    setLimit(calorieLimit) {
        this._calorieLimit = calorieLimit;
        Storage.setCalorieLimit(calorieLimit);
        this._displayCaloriesLimit();
        this._render();
    }

    loadItems() {
        Storage.getMeals().forEach(meal => this._displayNewMeal(meal));
        Storage.getWorkouts().forEach(workout => this._displayNewWorkout(workout));

    }

    _displayCaloriesTotal() {
        const totalCaloriesEl = document.getElementById('calories-total');
        totalCaloriesEl.innerHTML = this._totalCalories;
    }

    _displayCaloriesLimit() {
        const caloriesLimitEl = document.getElementById('calories-limit');
        caloriesLimitEl.innerHTML = this._calorieLimit;

    }

    _displayCaloriesConsumed() {
        const caloriesConsumedEl = document.getElementById('calories-consumed');
        const consumed =  this._meals.reduce((total, meal) => total + meal.calories ,0);

        caloriesConsumedEl.innerHTML = consumed;
    }

    _displayCaloriesBurned() {
        const caloriesBurnedEl = document.getElementById('calories-burned');
        const burned =  this._workouts.reduce((total, workout) => total + workout.calories ,0);

        caloriesBurnedEl.innerHTML = burned;
    }

    _displayCaloriesRemaining() {
        const caloriesRemaining = document.getElementById('calories-remaining');
        const remaining = this._calorieLimit - this._totalCalories;
        caloriesRemaining.innerHTML = remaining;

        if (remaining <= 0) {
            caloriesRemaining.parentElement.parentElement.classList.remove("bg-light");
            caloriesRemaining.parentElement.parentElement.classList.add("bg-danger");
            document.getElementById("calorie-progress").classList.add("bg-danger");
        } else {
            caloriesRemaining.parentElement.parentElement.classList.remove("bg-danger");
            caloriesRemaining.parentElement.parentElement.classList.add("bg-light");
        }

    }

    _displayCaloriesProgress() {
        const progressEl = document.getElementById("calorie-progress");
        const percentage = (this._totalCalories / this._calorieLimit) * 100;
        const width = Math.min(percentage, 100);
        const caloriesRemaining = document.getElementById('calories-remaining').innerHTML;

        if(caloriesRemaining >= this._calorieLimit) {
            progressEl.style.width = 0;
        } else {
            progressEl.style.width = `${width}%`;
        }
        
        
    }
    _displayNewMeal(meal) {
        const mealItems = document.getElementById('meal-items');
        const mealElt = document.createElement('div');
        mealElt.classList.add('card', 'my-2');
        mealElt.setAttribute('data-id', meal.id);

        mealElt.innerHTML = `
        <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${meal.name}</h4>
          <div
            class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
          >
            ${meal.calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        `
        mealItems.appendChild(mealElt);

    }

    _displayNewWorkout(workout) {
        const workoutItems = document.getElementById('workout-items');
        const workoutElt = document.createElement('div');
        workoutElt.classList.add('card', 'my-2');
        workoutElt.setAttribute('data-id', workout.id);

        workoutElt.innerHTML = `
        <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${workout.name}</h4>
          <div
            class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5"
          >
            ${workout.calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        `
        workoutItems.appendChild(workoutElt);

    }

    _render() {
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }
}

export default CalorieTracker;