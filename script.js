let main = document.getElementById('container');
let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`

async function getData(url) {
    let res = await fetch(url);
    let data = await res.json();
    data = data.data;
    console.log(data);
    displayData(data);
}

function displayData(arr) {
    main.innerHTML = "";
    arr.forEach((ele) => {
        let card = document.createElement('div');
        let country = document.createElement('h1');
        country.innerText = `Country: ${ele.country}`;
        let id = document.createElement('h2');
        id.innerText = `ID: ${ele.id}`;
        let rank = document.createElement('h3');
        rank.innerText = `Rank: ${ele.Rank}`;
        let population = document.createElement('h2');
        population.innerText = `Population: ${ele.population}`;

        card.append(country, id, rank, population);
        main.append(card);
    });
}

getData(url);

let sort = document.querySelector('#sort');
sort.addEventListener('input',function(){
    sortData();
})

function sortData(){
    let sortVal=sort.value;
    getData(`${url}?sort=population&order=${sortVal}`);
}
