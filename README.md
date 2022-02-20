Charter/Spectrum Front-End Code Challenge

Welcome! Thank you for taking our code challenge. We hope you enjoy this exercise. In short, you will be required to create 
a React application that gets movie data from a simple REST API that we have provided. Then you will need to display that 
data and allow a user to search, filter, and click for additional information.

IMPORTANT: This should be delivered as a PRIVATE Github repository with access to these users:
• graysmith00, eugeneheo, jacobogart, anirudhlm
API Endpoints: • https://code-challenge.spectrumtoolbox.com/api/movies
• https://code-challenge.spectrumtoolbox.com/api/movies/[id]

API Key Header: Authorization: “Api-Key q3MNxtfep8Gt”

Example Fetch:

fetch(“https://code-challenge.spectrumtoolbox.com/api/movies”, {
 headers: {
 Authorization: “Api-Key q3MNxtfep8Gt”,
 },
});

Images - A .zip file with images will be included with the movie IDs as the file names
User stories are as follows: • A user should be able to view a home page with a list of movies with their image and title. • A user should be able to filter movies by genre. This filter should default to “All” and take immediate effect 
when a selection is made. No additional clicks should be necessary when filtering.

• A user should be able to search for a movie by title.
• A user should be able to click into a movie to view additional detail. • The genre filter and search should work together. The genre filter should not reset the search and the search 
should not reset the genre filter. When both are used, only results that fit both criteria should be shown, not 
either one or the other.
• A user should be able to reset the search by clearing the text value in the search input. 
• If any of the filters do not return any movies, the UI should indicate that no results were found. 
• If the image for a specific movie is not found, the application should display the included “defaultImage”

What we are looking for: 
• Deployed application
• Modern styling with well-organized CSS
• Using TypeScript is highly encouraged
• No use of third-party component libraries such as Bootstrap or Material-UI
• Using Create-React-App, Next.js, or Gatsby as a starter kit is okay
• Well organized file structure
• Descriptive naming conventions
• DRY code that is readable and production ready
• Reusable components
• Sound logic for how the search and filter are architected
• Full Git history with atomic commits

Stretch goals:
• Unit tests
• Pagination of movies on home screen
• CI / CD
• Feel free to get creative with additional features!