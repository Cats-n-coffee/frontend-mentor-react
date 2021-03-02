This project is a challenge from Frontend Mentor (see frontend-mentor.md). 

It was built using the create React app starter application. 
The Results component is the main component that gathers and filters the data. The data comes from a JSON file (./public/data.json). 

The Results component fetches the data that will be displayed by multiple ItemResult components.
All filters are added to an array and this filters array has its own state. 

When removing filters, the filters left are used to loop through all the initial job listings, essentially displaying a brand new results page from an array of filters (instead of filtering displayed results that have already been filtered).