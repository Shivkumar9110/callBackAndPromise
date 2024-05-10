async function fetchDataFromEndpoints() {
    try {
        // Make requests to both API endpoints concurrently using Promise.all
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        // Extract JSON data from the responses
        const todoData = await todoResponse.json();
        const postData = await postResponse.json();

        // Combine the results into a single object
        const combinedData = {
            todo: todoData,
            post: postData
        };

        // Log the combined data
        console.log(combinedData);
        
        // Return the combined data if needed
        return combinedData;
    } catch (error) {
        // Handle any errors that might occur during fetching or parsing
        console.error('Error fetching data:', error);
        throw error; // Optionally rethrow the error
    }
}

// Call the function to fetch and log the combined data
fetchDataFromEndpoints();
