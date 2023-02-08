const container = document.querySelector('.container')
const ulEl = document.querySelector('.responsive-table')
const loader = document.querySelector('.loader')
const p = document.querySelector('p')

console.log(loader);
let tableData = '';

(async function load() {
  const response = await fetch('https://projectzerothree.info/api.php?format=json')
  const result = await fetch(response.url)
  const prices = await result.json()
  console.log(prices['regions'][0].prices);
  const allPrices = prices['regions'][0]['prices']
  allPrices.forEach(p => {
    tableData +=`     <tr>
    <td><strong>${p.suburb} ${p.state}</strong></td>
    <td>${p.price}</td>
    <td>${p.type} </td>
  </tr>`
  });
  loader.style.display = 'none'

  ulEl.insertAdjacentHTML('beforeend', `${tableData}`);
})()
// function func(data) {
//   const allPrices = data['regions'][0]['prices']
//   allPrices.forEach(p => {
//     tableData +=`     <tr>
//     <td><strong>${p.suburb} ${p.state}</strong></td>
//     <td>${p.price}</td>
//     <td>${p.type} </td>
//   </tr>`
//   });

//   ulEl.insertAdjacentHTML('beforeend', `${tableData}`);
// }


// fetch('https://projectzerothree.info/api.php?format=json')
//   .then(response => {
//     url = response.url;
//     return url
//   })
//   .catch(error => {
//     console.error(error);
//   });

// setTimeout(() => {
//   container.style.display = 'block'
//   loader.style.display = 'none'
//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     func(data)
//   })
//   .catch(error => {
//     console.error(error);
//   });
// }, 2400);
