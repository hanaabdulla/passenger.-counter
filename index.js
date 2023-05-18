
function increment() {
   
    var value = document.getElementById('number');
    var value = value.innerHTML;
   ++value;
    document.getElementById('number').innerHTML = value;
}
