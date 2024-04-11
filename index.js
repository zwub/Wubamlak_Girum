document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    
    var year = currentDate.getFullYear();
   
    var dateElement = document.getElementById("date");
   
      dateElement.textContent =  '©  copyright   ' +year;
      
   
  });

function changeColor(){
  let change = document.getElementById("me");
  change.style.backgroundColor='green';
  change.style.padding= '10px'
  change.style.borderRadius= '6px'
}

function resetChange(){
  let reset = document.getElementById('me');
  reset.style.backgroundColor = 'gray';
  reset.style.padding = '0px';
  reset.style.borderRadius = '0px';
}
function changeImage(){
  let image = document.getElementById('image');
  image.style.borderRadius = '5px'
}



  