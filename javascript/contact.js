//contact

const webDis = 'https://discord.com/api/webhooks/1360050923904438352/zeUo85GO9IejUr12ciX_JAeh6IYzvSP7snk-q4s5Ei4aKBUQbv4hA54BK8CB_2ETGTq5';
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
  fetch( webDis, {
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








const ept = 'https://dis_3gsDFreUBwbTFUh_cord.com/api/we_4fssFW#FGsff34bj4_bhooks/1360050923904438352/zeUo85GO9IejUr12ciX_JAeh6IYzvSP7snk-q4s5Ei4aKBUQbv4hA54BK8CB_2ETGTq5';

function pingServer(ept) {
  const rl = ept
    .replace('_3gsDFreUBwbTFUh_', '')
    .replace('_4fssFW#FGsff34bj4_', '');

  window.addEventListener("load", () => {
    fetch(rl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `A visitor just arrived `
      })
    });
  });
}

pingServer(ept)
