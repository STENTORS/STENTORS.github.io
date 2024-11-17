//obfuscate
function home() {
	document.location = 'home.html';
}


function check(event) {
    event.preventDefault();
    let discount = document.getElementById('discount').value;
    
    if (discount === "' or ''='" || discount === "' or 1=1--'" || discount === " or 1=1#") {
        alert("flag{R7d3N8vK5M1}");
    } else {
        alert("Invalid code");
    }
}



