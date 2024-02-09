const container = document.querySelector('.container')
const ulEl = document.querySelector('.responsive-table')
const loader = document.querySelector('.loader')
const p = document.querySelector('p')

// console.log(loader);
let tableData = '';

const getFuelPrices = (async function load() {
  const response = await fetch('https://projectzerothree.info/api.php?format=json')
  const result = await fetch(response.url)
  const prices = await result.json()
  const allPrices = prices['regions'][0]['prices']
  allPrices.forEach(p => {
    tableData +=`     <tr>
    <td>${p.type} </td>
    <td><strong>${p.suburb} ${p.state}</strong></td>
    <td>${p.price}</td>
    <td id="lat">${p.lat} </td>
    <td id="lng">${p.lng} </td>
  </tr>`
  });
  loader.style.display = 'none'

  ulEl.insertAdjacentHTML('beforeend', `${tableData}`);

  // Get all latitude and longitude cells
  const latCells = document.querySelectorAll('td:nth-child(4)');
  const lngCells = document.querySelectorAll('td:nth-child(5)');

  // Add click event listener to each latitude and longitude cell
  [...latCells, ...lngCells].forEach(cell => {
    cell.addEventListener('click', () => {
      // Copy cell text to clipboard
      document.querySelector('.copy').textContent = 'Copied: '+ cell.innerText.trim()
      navigator.clipboard.writeText(cell.innerText.trim())
      .then(() => console.log(`Copied ${cell.innerText.trim()} to clipboard`))
      .catch(error => console.error('Failed to copy to clipboard', error));
    });
  });

})()


