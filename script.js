document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    // Function to create a promise that resolves after a random time between 1 and 3 seconds
    function createPromise(index) {
        return new Promise((resolve) => {
            const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
            setTimeout(() => {
                resolve({ index, time });
            }, time * 1000);
        });
    }

    // Create an array of three promises
    const promises = [createPromise(1), createPromise(2), createPromise(3)];

    // Add a row with the text "Loading..."
    const loadingRow = output.insertRow();
    const loadingCell = loadingRow.insertCell(0);
    loadingCell.colSpan = 2;
    loadingCell.innerText = 'Loading...';

    // Use Promise.all() to wait for all promises to resolve
    Promise.all(promises).then((results) => {
        // Remove the loading row
        output.removeChild(loadingRow);

        // Add rows for each promise result
        results.forEach(result => {
            const row = output.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.innerText = `Promise ${result.index}`;
            cell2.innerText = result.time.toFixed(3);
        });

        // Add the total row
        const totalRow = output.insertRow();
        const totalCell1 = totalRow.insertCell(0);
        const totalCell2 = totalRow.insertCell(1);
        totalCell1.innerText = 'Total';
        const totalTime = results.reduce((sum, result) => sum + result.time, 0);
        totalCell2.innerText = totalTime.toFixed(3);
    });
});



// document.addEventListener('DOMContentLoaded', () => {
//     const output = document.getElementById('output');

//     // Function to create a promise that resolves after a random time between 1 and 3 seconds
//     function createPromise(index) {
//         return new Promise((resolve) => {
//             const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
//             setTimeout(() => {
//                 resolve({ index, time });
//             }, time * 1000);
//         });
//     }

//     // Create an array of three promises
//     const promises = [createPromise(1), createPromise(2), createPromise(3)];

//     // Add a row with the text "Loading..."
//     const loadingRow = output.insertRow();
//     const loadingCell = loadingRow.insertCell(0);
//     loadingCell.colSpan = 2;
//     loadingCell.innerText = 'Loading...';

//     // Use Promise.all() to wait for all promises to resolve
//     Promise.all(promises).then((results) => {
//         // Remove the loading row
//         output.removeChild(loadingRow);

//         // Add rows for each promise result
//         results.forEach(result => {
//             const row = output.insertRow();
//             const cell1 = row.insertCell(0);
//             const cell2 = row.insertCell(1);
//             cell1.innerText = `Promise ${result.index}`;
//             cell2.innerText = result.time.toFixed(3);
//         });

//         // Add the total row
//         const totalRow = output.insertRow();
//         const totalCell1 = totalRow.insertCell(0);
//         const totalCell2 = totalRow.insertCell(1);
//         totalCell1.innerText = 'Total';
//         const totalTime = results.reduce((sum, result) => sum + result.time, 0);
//         totalCell2.innerText = totalTime.toFixed(3);
//     });
// });


//your JS code here. If required.
// document.addEventListener('DOMContentLoaded', () => {
//     const table = document.getElementById('resultTable');

//     function createPromise(index) {
//         return new Promise((resolve) => {
//             const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
//             setTimeout(() => {
//                 resolve({ index, time });
//             }, time * 1000);
//         });
//     }

//     const promises = [createPromise(1), createPromise(2), createPromise(3)];

//     Promise.all(promises).then((results) => {
//         // Remove the loading row
//         table.innerHTML = '';

//         // Add rows for each promise result
//         results.forEach(result => {
//             const row = table.insertRow();
//             const cell1 = row.insertCell(0);
//             const cell2 = row.insertCell(1);
//             cell1.innerText = `Promise ${result.index}`;
//             cell2.innerText = result.time.toFixed(3);
//         });

//         // Add the total row
//         const totalRow = table.insertRow();
//         const totalCell1 = totalRow.insertCell(0);
//         const totalCell2 = totalRow.insertCell(1);
//         totalCell1.innerText = 'Total';
//         const totalTime = results.reduce((sum, result) => sum + result.time, 0);
//         totalCell2.innerText = totalTime.toFixed(3);
//     });
// });
