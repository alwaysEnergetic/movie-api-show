# Charter/Spectrum Front-End Code Challenge

For this challenge we would like you to create a React application that pulls movie data from a simple REST API, displays that data in a table, and allows users to filter that data and also to browse detail of movie

## User Stories

- A user should be able to view a home page with a list of movies with their image and title.

- A user should be able to filter movies by genre. This filter should default to “All” and take immediate effect when a selection is made. No additional clicks should be necessary when filtering.

- A user should be able to search for a movie by title.

- A user should be able to click into a movie to view additional detail.

-  The genre filter and search should work together. The genre filter should not reset the search and the search should not reset the genre filter. When both are used, only results that fit both criteria should be shown, not either one or the other.
-  A user should be able to reset the search by clearing the text value in the search input. 
- If any of the filters do not return any movies, the UI should indicate that no results were found. 
- If the image for a specific movie is not found, the application should display the included “defaultImage”




## Requirements

- Deployed application
- Modern styling with well-organized CSS
- Using TypeScript is highly encouraged
- No use of third-party component libraries for the table/filter/search.
- Using Create-React-App or Next.js as a starter kit is okay.
- Well organized file structure
- Descriptive naming conventions
- DRY code that is readable and production ready
- Reusable components
- Sound logic for how the filters are architected
- Styling follows a convention/pattern and is well organized
- Full Git history with atomic commits

## Stretch goals:

- CI / CD
- Unit tests
- Pagination of movies on home screen
- Feel free to get creative!
