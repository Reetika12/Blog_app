
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById("searchBar")

let hpCharacters = [];

searchBar.addEventListener('keyup',(e)=>{
    const searchString=e.target.value
    console.log(hpCharacters)
   const filterCharacers = hpCharacters.filter((el)=>{
        return el.name.includes(searchString) || el.house.includes(searchString)
    })
    displayCharacters(filterCharacers);
    console.log(filterCharacers)
})


const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();




// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById("searchBar")
// let hpCharacters=[];

// searchBar.addEventListener('keyup',(e)=>{
//     const searchString=e.target.value
//     console.log(hpCharacters)
//    const filterCharacers = hpCharacters.filter((el)=>{
//         return el.name.includes(searchString) || el.house.includes(searchString)
//     })
//     displayCharacters(filterCharacers);
//     console.log(filterCharacers)
// })

// const loadCharacters = async() =>{
//     fetch("https://hp-api.herokuapp.com/api/characters").then(response => response.json())
//     .then(data => {
//         hpCharacters=data;
//       console.log('Success:', data);
//     }).catch(err=>{
//         console.log(err)
//     })
//     displayCharacters(hpCharacters);

// }
// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//         console.log(htmlString)
//     charactersList.innerHTML = htmlString;
// };


// loadCharacters();


// // fetchData =() =>{
// //     fetch("https://restcountries.eu/rest/v2/name/ind?fields=name").then(response => response.json())
// //     .then(data => {
// //       console.log('Success:', data);
// //     })
// // }
// // getTheData = () => {
// //     return fetchData;
// // }