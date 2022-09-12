function confirmar(url, msg){
	
    event.preventDefault();  
    var resposta = confirm(msg);
    if (resposta == true){
        top.location.href = url;
	}
}
