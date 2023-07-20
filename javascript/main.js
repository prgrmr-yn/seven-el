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
  // console.log(prices['regions'][0].prices);
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


const webhookUrl = 'https://discord.com/api/webhooks/1076287336641474582/NZ2kKh7Z_zrvBRXYAiZcWw1Yv7wTcsRqJ4PYWqriZ4kGc4eolid_qtzFIHDFPaxem9W4'

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "content": `Someone is on your website from ${navigator.appVersion.slice(5, 33)}`,
    })
  })

});
