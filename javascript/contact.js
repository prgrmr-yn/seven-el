//contact

const webhookDiscord = 'https://discord.com/api/webhooks/1351821864762212352/TGQ1fJE1bTrhjh9KcT-dl75WRAgGVUktwi00hHSl9eX-LwRl9uLD5kB8VIcnsKCD-UYl';
const username = document.getElementById('username')
const email = document.getElementById('email')
const content = document.getElementById('content')
const send = document.getElementById('send')
const sentMessage = document.getElementById('sent');
let message ='';

send.addEventListener('click', e=>{
  e.preventDefault()
  if (username.value === '') {
    console.log('not valid');
    sentMessage.innerHTML = '<strong>Must enter name</strong>'
  }else if (content.value === '') {
    sentMessage.innerHTML = '<strong>Must enter a message</strong>'
  } else{
    discordIt();
    console.log(message);
    username.value = ''
    email.value = ''
    content.value = ''
    setTimeout(() => {
      sentMessage.style.display = 'none'
    }, 3000);
  }

})

function discordIt() {
  fetch( webhookDiscord, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "content":`name: ${username.value},
email: ${email.value},
message: ${content.value}`,
        "embeds": null,
    })
  })
   .then(function(res) {
    if (res.status.toString().startsWith('2')) {
      message = 'Sent successfully'
    }else {
      message = 'Something went wrong, Please try again'
    }
    sentMessage.innerHTML = `<strong> ${message}</strong>`
   })
  // .then(response => response.json())
  // .then(response => JSON.stringify(response))
}



//autosend








const webhookUrl = 'https://discord.com/api/webhooks/1351821589624389673/9Qbpqzln2c7MPHT_cTgLtDOaXl8Os_3ESChyzwsEU8fXGY6Pq0HBlM0AcOoA4FBv7Prx';

function sendToDis(webhookUrl) {
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "content": `Someone is on your website from ${navigator.appVersion.slice(5, 33)}
          `,
      })
    })
    console.log('sent');
  });
}

sendToDis(webhookUrl);
