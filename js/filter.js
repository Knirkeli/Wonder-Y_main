// const filterOption = document.getElementById('filterOption');

// filterOption.addEventListener('change', () => {
//     const selectedOption = filterOption.value;
//     let apiUrl = '/social/posts';

//     if (selectedOption === 'me') {
//         apiUrl += `?_author=${currentUser.id}`;
//     } else if (selectedOption === 'following') {
//         apiUrl += '/following';
//     }

//     // Make a request to the API using the apiUrl and update the posts accordingly
//     // For example:
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(posts => {
//             console.log(response);
//             // Update the posts on the page
//         })
//         .catch(error => console.error(error));
// });
