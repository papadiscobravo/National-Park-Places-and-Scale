// another way to import the data
    // import JSON of park data
    fetch("NPSData.json")
    .then(response => {
       return response.json();
    })
    .then(data => console.log(data));