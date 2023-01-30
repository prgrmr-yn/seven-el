const ulEl = document.querySelector('.responsive-table')
console.log(ulEl);

li = '';
function func(data) {

  const allPrices = data['regions'][0]['prices']
  allPrices.forEach(p => {
    li += `<li class="table-row">
  <div class="col col-1" data-label="">${p.state}</div>
  <div class="col col-2" data-label="Customer Name">7-twelve ${p.suburb}</div>
  <div class="col col-3" data-label="Amount">${p.price}</div>
  <div class="col col-4" data-label="Payment Status">${p.type}</div>
  </li>`
  });

  ulEl.insertAdjacentHTML('beforeend', `${li}`);
}


fetch('https://projectzerothree.info/prices/1675063023.json')
  .then(response => response.json())
  .then(data => {
    func(data)
  })
  .catch(error => {
    console.error(error);
  });
