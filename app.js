// let div=document.getElementById("container")
// let heading=document.createElement('h3')
// heading.innerText='Hello to all'
// heading.classList.add('myname')
// heading.style.color='skyblue'
// heading.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
// div.appendChild(heading)



// console.log("one");
// console.log("two");

// let myPromise = new Promise((resolve, reject) => {
//   resolve();
//   console.log("three");
//   console.lo("four");
//   console.log("five");
// }).then(()=>{
//     console.log("six");
//     console.log("seven");
// }).finally(()=>{
// console.log('there is a error')
// })


// import json from

// function APIs(){
//   let data=  fetch('https://zomato.com/webapi/searchapi.php?city=4')
//     let originalData=data.json()
//     console.log(originalData)
// }

function Swiggy(){
    let data=fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").json()
    // let originalData=data.json()
    console.log(data)
}


// function APIs(){
    
// let data=fetch("https://type.fit/api/quotes")
// .then(function(response) {
//   return response.json();
// })
// .then(function(data) {
//   console.log(data);
// });
// }