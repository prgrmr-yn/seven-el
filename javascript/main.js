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
    <td><strong>${p.suburb} ${p.state}</strong></td>
    <td>${p.price}</td>
    <td>${p.type} </td>
  </tr>`
  });
  loader.style.display = 'none'

  ulEl.insertAdjacentHTML('beforeend', `${tableData}`);
})()



window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  fetch('https://discord.com/api/webhooks/1076287336641474582/NZ2kKh7Z_zrvBRXYAiZcWw1Yv7wTcsRqJ4PYWqriZ4kGc4eolid_qtzFIHDFPaxem9W4', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "content": `Someone is on your website from ${browserName()}`,
    })
  })
});

function browserName(){
  let N= navigator.appName, ua= navigator.userAgent, tem;
  let M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
  M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
  return M;
};
