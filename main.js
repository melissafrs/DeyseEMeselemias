function confirmar(url, msg){
	
    event.preventDefault();  
    var resposta = confirm(msg);
    if (resposta == true){
        top.location.href = url;
	}
}

var x = document.getElementById("player"); 
  x.play(); 