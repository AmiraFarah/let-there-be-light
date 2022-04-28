
let bool=false;
const btn = document.querySelector('button');
const img = document.createElement("img")

img.src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png"
document.body.appendChild(img);



 btn.addEventListener('click',function() {
 bool=!(bool);
if (bool) {
    img.src="https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png"
document.body.appendChild(img);

 }
  else{
    img.src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png"
    document.body.appendChild(img);

  }

})
