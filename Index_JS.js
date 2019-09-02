var x = 0;
function doFunction(){
  if (x == 0){
    x = 1;
    document.getElementById("side").classList.add('sidebar2');
    document.getElementById("side").classList.remove('sidebar');
    document.getElementById("menu_button").style.left = "-210px";
  }
  else{ 
      
    x = 0;
    document.getElementById("side").classList.add('sidebar');
    document.getElementById("side").classList.remove('sidebar2');
    document.getElementById("menu_button").style.left = "-290px";
  }   
}