console.log('%c HI', 'color: firebrick')

fetch('https://dog.ceo/api/breeds/image/random/4') 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendData(data);
    });

function appendData(data) {
    const dogs = document.getElementById('dog-image-container');
    for (const i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = 'dog: ' +data[i].name;
    }
};

fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(breedData) {
        appendData('ul')
    });