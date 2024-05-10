// Function to fetch data from the API and log it to the console
async function fetchPosts() {
    try {
        // Fetch data from the API endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is successful (status 200 OK)
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON data from the response
        const posts = await response.json();

        // Log the retrieved data to the console
        console.log('List of Posts:', posts);
        
        // Return the parsed data if needed
        return posts;
    } catch (error) {
        // Handle any errors that might occur during fetching or parsing
        console.error('Error fetching data:', error);
        throw error; // Optionally rethrow the error
    }
}

// Call the fetchPosts function to retrieve and log the data
fetchPosts();
