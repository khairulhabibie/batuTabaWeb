// .navbar
function myFunction() {
  const x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

// .navbar -sub: overlauy
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

// navbar -sub: icon i
const loc1 = document.querySelectorAll('#myLinks a');
for (let i = 0; i < loc1.length; i++) {
  const iBaru = document.createElement('i');
  loc1[i].appendChild(iBaru).classList.add('fa', 'fa-chevron-circle-down');
}

document.querySelector('.icon').classList.add('fa', 'fa-bars');
document.querySelector('.title').classList.add('fa', 'fa-address-book');

const icon1 = document.querySelectorAll('#mySidenav i');
icon1[0].classList.add('fa', 'fa-times-circle-o');
icon1[1].classList.add('fa', 'fa-whatsapp');
icon1[2].classList.add('fa', 'fa-instagram');
icon1[3].classList.add('fa', 'fa-twitter');
icon1[4].classList.add('fa', 'fa-youtube');

// topil -sub:icon i
const loc2 = document.querySelectorAll('.col-5 a');
for (let i = 0; i < loc2.length; i++) {
  const iBaru = document.createElement('i');
  loc2[i].appendChild(iBaru).classList.add('fa', 'fa-link');
}

// footer
document.querySelector('footer i').classList.add('fa', 'fa-map-marker');
