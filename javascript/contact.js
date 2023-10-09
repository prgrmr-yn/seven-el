
const username = document.getElementById('username')
const content = document.getElementById('content')
const send = document.getElementById('send')
const sentMessage = document.getElementById('sent');
let message ='';
const webhookDiscord = 'https://discord.com/api/webhooks/1160817955181957152/NOh7VqlDA0VkqfmSAWNrfazhxxOp5w4WYsxDg768ZZOpjq0jhIdnzgsX06Z9peS7rTIQ';

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
        "content":content.value,
        "embeds": null,
        "username": `${username.value} - Seven-Twelve `
    })
  })
   .then(function(res) {
    if (res.status.toString().startsWith('2')) {
      message = 'Sent successfully'
    }else {
      message = 'Something went wront, Please try again'
    }
    sentMessage.innerHTML = `<strong> ${message}</strong>`
   })
  // .then(response => response.json())
  // .then(response => JSON.stringify(response))
}
