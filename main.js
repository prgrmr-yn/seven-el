const container = document.querySelector('.container')
const ulEl = document.querySelector('.responsive-table')
const loader = document.querySelector('.loader')

console.log(loader);
container.style.display = 'none'
let tableData = '';

function func(data) {
  const allPrices = data['regions'][0]['prices']
  allPrices.forEach(p => {
    tableData +=`     <tr>
    <td><strong>${p.suburb} ${p.state}</strong></td>
    <td>${p.price}</td>
    <td>${p.type} </td>
  </tr>`
  });

  ulEl.insertAdjacentHTML('beforeend', `${tableData}`);
}

let url = '';

fetch('https://projectzerothree.info/api.php?format=json')
  .then(response => {
    url = response.url;
    return url
  })
  .catch(error => {
    console.error(error);
  });

setTimeout(() => {
  container.style.display = 'block'
  loader.style.display = 'none'
  fetch(url)
  .then(response => response.json())
  .then(data => {
    func(data)
  })
  .catch(error => {
    console.error(error);
  });
}, 2400);
