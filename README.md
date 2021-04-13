# The City that Never Sleeps
This interactive visualization allows users to see how many noise complaints there were in different locations of NYC at different points in time. We gathered our data from the NYC Open Data https://data.cityofnewyork.us/Social-Services/311-Noise-Complaints/p5f6-bkga and because the dataset was too big and didn't entirely help us understand the impact that COVID had on noise complaints, we filtered our data to only have data points with a creation date of January 1, 2019, until March 31st, 2021 and a complaint type of a noise complaint. Additionally, the only columns we kept from the original dataset were the creation date, zip code, a tuple of the longitude and latitude coordinate, neighborhood, borough, complaint type, and unique key. By only keeping these limited aspects of the data and the data points that met the 2 aforementioned constraints, we were able to zoom in and focus on having our visualization inform users so that they could understand how COVID impacted noise complaints in NYC.

The visual encoding that we used was a heatmap because it effectively represents severity and has a negative connotation with it (after all, nobody likes loud noise especially to the point where they have to file an official noise complaint). The color range for the heatmap is from transparent (which represents no complaints) to tan (which represents a low number of complaints) to red (which represents a high number of complaints). The visualization allows a user to simply explore by letting them navigate around the map with their mouse and zoom in and out to get a more precise view of a specific location in NYC on the map. In addition to the exploratory visualization components, users can use the slider and select a start and end date and have an animation that shows the change in complaints from the start date (which can be a day, month, or year) to an end date (which must be the same type of unit as the start date). This is perhaps the most valuable part of the visualization because it can give them the best insights to help them understand what impact the pandemic had on noise complaints.

alternatives considered????

All three of us contributed equally to brainstorming and deciding design decisions in the beginning. We then split up different components of the web dev process until we started coming upon lots of bugs in our code. We then switched our focus to debugging the code and did this together since 3 brains together are better than 1. Finally, when we got our MVP working, we split up the recording for our demos into 3rds, each did our corresponding part, and Magdalena Price compiled all recordings together in the end. Magdalena Price and Amanda Horne were in class to answer questions that classmates had about our MVP and write down the comments and ideas we received. After formally receiving our feedback, all 3 of us came back together and discussed what changes we wanted to implement for the Final Prototype. Then, we put our heads together to debug more issues we were having. Magdalena Price and Melody Phu also coded the slider which was a new component we were adding while Amanda Horne did the final write-up. The aspect that took the most time by far was debugging which together with 3 brains combined took approximately 20 hours throughout this assignment.

A rationale for your design decisions. How did you choose your particular visual encodings, interaction, and animation techniques? What alternatives did you consider and how did you arrive at your ultimate choices? An overview of your development process. Describe how the work was split among the team members. Include a commentary on the development process, including answers to the following questions: Roughly how much time did you spend developing your application (in people-hours)? What aspects took the most time?




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
