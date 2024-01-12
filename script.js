/**typing aniation */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

/**See More button */

document.getElementById('see-more-btn').addEventListener('click', function() {
  var moreContent = document.querySelector('.more-content');
  if (moreContent.style.display === 'none' || moreContent.style.display === '') 
  {
    moreContent.style.display = 'block';
    document.getElementById('see-more-btn').innerText = 'See less';
  } else {
    moreContent.style.display = 'none';
    document.getElementById('see-more-btn').innerText = 'See more';
  }
});



/***Putting images together and Zooming effect */

/**const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', () => {
    if (image.style.transform === 'scale(1.2)') {
      image.style.transform = 'scale(1)';
    } else {
      images.forEach(img => img.style.transform = 'scale(1)');
      image.style.transform = 'scale(1.2)';
    }
  });
});*/


// scripts.js
const images = document.querySelectorAll('.image');

let isScattered = false;

images.forEach(image => {
  image.addEventListener('click', () => {
    if (isScattered) {
      images.forEach(img => {
        img.style.left = '0';
        img.style.top = '0';
      });
      isScattered = false;
    } else {
      images.forEach(img => {
        const x = Math.random() * (window.innerWidth - img.clientWidth);
        const y = Math.random() * (window.innerHeight - img.clientHeight);
        img.style.left = x + 'px';
        img.style.top = y + 'px';
      });
      isScattered = true;
    }
  });

  image.addEventListener('click', () => {
    if (image.classList.contains('zoomed')) {
      image.classList.remove('zoomed');
    } else {
      images.forEach(img => img.classList.remove('zoomed'));
      image.classList.add('zoomed');
    }
  });
});



