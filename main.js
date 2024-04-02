const toggleBtn = document.getElementById("toggle")
const body = document.body;

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode')
}) 


function converterMoeda(){
	var reais = document.getElementById('reais').value;

	reais = parseFloat(reais);
	dolar = reais / 5.5;
	console.log(dolar);
    document.getElementById('resultado').innerHTML = "US$ " + dolar;
}



