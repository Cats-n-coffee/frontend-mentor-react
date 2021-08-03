# Static Job Listings Frontend Mentor

This project is a challenge from [Frontend Mentor](https://www.frontendmentor.io/). <br>
[Live version](https://frontend-mentor-job-listings.vercel.app/). 

## About

It was built using the Create React App starter application. 
The `Results` component is the main component that gathers and filters the data. The data comes from a local JSON file (./public/data.json). <br>

The `Results` component fetches the data that will be displayed by multiple `ItemResult` components.
All filters are added to an array and this array has its own state. <br>

When removing filters, the filters left are used to loop through all the initial job listings, essentially displaying a brand new results page from an array of filters (instead of filtering displayed results that have already been filtered).