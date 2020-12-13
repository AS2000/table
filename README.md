# React Application - Table

## Application code contains:

### React

### Redux

### Axios

### Redux Thunk

### Bootstrap/Reactstrap

### Date Period

### Search By Name Field

### Table sort by: Entered Compaign Name, Date period

### Table data Filtered by Campaign the wrong period in the input Date

### Campaign Data input by Browser JavaScript Console: addCampaings([{...}, {...}])

### Tests: Component / Function

# To Start the Application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Homework Requirements:

## Assignments

The candidate should create a simple react application that shows a list of campaigns that can be filtered by campaign name and by date (using
a date range selector).

## Requirements

The application should be accessible from a public repository in Github.
The application must use React and Redux.
There is no restriction on the libraries/tools to use during the development.
The look and feel of the application is left to the taste of the candidate.
The application must be written as if it would be released in production.
External API must be called (details below).
Bonus points
At least one Thunk function.
Unit test(s).
Error handling and loading progress indication.

## Application Requirements

The application should be a simple page with the following elements:
A list of Campaign which shows
The Name
The startDate
The endDate
A flag to state if the Campaign is active (a campaign is running when the current date is inside the start-end date range)
The Budget (in USD dollar)
User name (can be Unknown user, if the user's data is missing for specified userId)
A Search Form before the list in order to filter the list by Campaign Name
A DateRange component that filters the list of campaigns based on a Start and End Date.
If the campaign has a startDate that is contained in the range, it should show
If the campaign has an endDate that is contained in the range, it should show.
You should not be able to select an end-date that is before the start-date.
If the endDate is before the start Date, the campaign should not show.

## External API

Example API: https://jsonplaceholder.typicode.com/users (can be replaced with another one).
The API should return an array of users with ids and names. These ids need to be used to resolve the user name by userId of campaign array
(see below).
If the API doesn't contain the userId from campaigns list, Unknown User should be displayed.

## Mockup

The UI look and feel is left to the candidate, use your own taste and make it as beautiful as you can.
The list should show in some kind of Table.
The active status should be in the green palette.
The inactive status should be in the red palette.

## How to test the application

The candidate will expose a global method called 'AddCampaigns' that takes an array of Campaigns and will render them.
This function will be invoked from the browser’s JavaScript console for testing purposes. If it cannot be invoked, the submission will be rejected.
The method is allowed to be called multiple times. If so, the new campaigns will append to the existing list.

## Example of campaign array that can be passed

[{"id":1,"name":"Divavu","startDate":"9/19/2017","endDate":"3/9/2018","
Budget":88377, "userId": 3},
{"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21
/2018","Budget":608715, "userId": 6},
{"id":3,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2017","
Budget":239507, "userId": 7},
{"id":4,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30
/2017","Budget":179838, "userId": 1},
{"id":5,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","
Budget":837850, "userId": 9},
{"id":6,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23
/2017","Budget":858131, "userId": 3},
{"id":7,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018","
Budget":109078, "userId": 2},
{"id":8,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018","
Budget":272552, "userId": 4},
{"id":9,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10
/2017","Budget":301919, "userId": 8},
{"id":10,"name":"Realbridge","startDate":"3/5/2018","endDate":"10/2
/2017","Budget":505602, "userId": 5}]
