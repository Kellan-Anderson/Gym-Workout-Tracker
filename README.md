# Gym Tracker App

[🔗 Check out the deployed app](https://gym-workout-tracker-pi.vercel.app/). 

## The problem
When I go to the gym, I use Google sheets to keep track of my workouts. This works, but I have to keep updating the sheets every time I want to add a new workout. There are apps for this, but I want to try to make my own.

## The solution
I want to make a web app to use at the gym to keep track of my progress. This way, I can view stats about my workouts quickly from both my phone and my computer.

## Requirements
* User should see a home page asking them to sign in when first visiting the site. If the user is already signed in, they should be taken to a dashboard page.
* There should be a page where a user can manage the exercises that belong to them.
* There should be a page where a user can manage different workouts.
* There should be a page/section where a user can start and finish a workout. This screen should keep track of progress of the workout, such as what exercise they are are doing, how many reps they have left, and how many sets they have left.
* If a user leaves the workout, they should be able to come back and continue it.
* Workouts should be easy to track for cardio based exercises, such as running, cycling, and swimming.

## Task List:

### User Stories
1. ~~User needs to be able to sign in to the app.~~
2. User needs to be able to add/edit/delete exercises.
3. User needs to be able to add/edit/delete workouts.
4. User needs to be able to start/finish a workout.
5. User needs to be able to review their workouts and see their progress.

### Home page tasks
- [x] Create a home page and display some information for a user who is visiting the site for the first time.
- [x] Make a sign in button.
- [x] Make the app redirect to the dashboard page if the user is already signed in or if they are signing in for the first time.

### Exercises page tasks
- [ ] Create a button to open a modal to add a new exercise.
- [ ] Make a list of all the exercises that belong to the user that is sorted by date added. Exercises should have an options button, but does not have to be operational for this task.
- [ ] Make the options button on an exercise element operational for both editing and deleting the exercise.
- [ ] Add a search bar to the exercises page to search for an exercise by name.
- [ ] Add a sorting selector to the exercises page to sort the exercises by name or date added.


### Other tasks & chores
- [x] Deploy app to vercel.
- [x] Create task list for exercises page
- [x] Fix typo's in issue templates
- [x] Update the metadata in the root layout
- [ ] Add navigation bar to the app.