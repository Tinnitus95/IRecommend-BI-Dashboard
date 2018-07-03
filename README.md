# IRecommend-BI-Dashboard
A dashboard to visualize data from IRecommends backend.
Built as a school project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Admin access to the IRecommend backend

### Installing

Clone the Repo and cd into bi-dashboard

inside bi-dashboard run

```
yarn install
```
and then to start up the development server run:
```
yarn start
```

### Structure
Fetch all data in the ClientMain component, The fetches are in the actions folder. 
Each Action is linked to a specific endpoint and the result from the axios.get is stored in the payload of the action.
When a fetch is triggered the payload gets sent to a dedicated reducer where we pick off the relevant data and mutate it. 
The mutated data is then stored in the Redux Store. 
All the reducers are combined to create the application state.
When we need to display the data we make a connect from the specific component and pick off the data from the state.
most components use a map-function to display the data.

Most higher level components have their own style file for a better structure and there's a settings-file with all the style variables.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Redux](https://redux.js.org/) - Data management
* [Axios](https://github.com/axios/axios) - Ajax request to backend
* [Auth0](https://auth0.com/) - Authorization handling
* [ChartJs](https://chartjs.org/) - Displaying graphs

## Versioning

For the versions available, see the [tags on this repository](https://github.com/Tinnitus95/IRecommend-BI-Dashboard/tags). 


## Authors

* **Daniel Milojevic** - *Initial work* - [dakioso](https://github.com/dakioso)
* **Fadi Gourie** - *Initial work* - [FadiGo](https://github.com/FadiGo)
* **Mikael Gustavsson** - *Initial work* - [mikaelgsson86](https://github.com/mikaelgsson86)
* **Oscar Fredriksson** - *Initial work* - [Tinnitus95](https://github.com/Tinnitus95)
