function validaCPF(Objcpf) {
	var cpf = Objcpf.value;
	exp = /\.|\-/g
	cpf = cpf.toString().replace( exp, "" );
	var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
	var soma1=0, soma2=0;
	var vlr =11;

	for(i=0;i<9;i++) {
		soma1+=eval(cpf.charAt(i)*(vlr-1));
		soma2+=eval(cpf.charAt(i)*vlr);
		vlr--;
	}
	soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
	soma2=(((soma2+(2*soma1))*10)%11);

	if (Objcpf.value != "") {
		var digitoGerado=(soma1*10)+soma2;
		if(digitoGerado!=digitoDigitado) {
			alert('O CPF '+Objcpf.value+' é inválido! Por favor, verifique o valor informado.');
			Objcpf.value = "";
		}
	}
}

function ValidarCNPJ(Objcnpj) {
	CNPJ = Objcnpj.value;

	if(document.layers && parseInt(navigator.appVersion) == 4) {
		x = CNPJ.substring(0,2);
		x += CNPJ.substring(3,6);
		x += CNPJ.substring(7,10);
		x += CNPJ.substring(11,15);
		x += CNPJ.substring(16,18);
		CNPJ = x;
	} else {
		CNPJ = CNPJ.replace(".","");
		CNPJ = CNPJ.replace(".","");
		CNPJ = CNPJ.replace("-","");
		CNPJ = CNPJ.replace("/","");
	}

	var a = [];
	var b = new Number;
	var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
	for (i=0; i<12; i++)
	{
		a[i] = CNPJ.charAt(i);
		b += a[i] * c[i+1];
	}

	if ((x = b % 11) < 2)
		a[12] = 0;
	else
		a[12] = 11-x;

	b = 0;
	for (y=0; y<13; y++)
		b += (a[y] * c[y]);

	if ((x = b % 11) < 2)
		a[13] = 0;
	else
		a[13] = 11-x;

	if (((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])) || CNPJ.length < 14)
	{
		alert('O CNPJ '+CNPJ+' é inválido. Por favor, verifique o valor informado!');
		Objcnpj.value="";
		return false;
	}
	return true;
}


function validaData(digData)
{
	var bissexto = 0;
	var data = digData.value;
	var tam = data.length;
	if (tam == 10)
	{
		var dia = data.substr(0,2)
		var mes = data.substr(3,2)
		var ano = data.substr(6,4)
		if ((ano > 1900)||(ano < 2100))
		{
			switch (mes)
			{
				case '01':
				case '03':
				case '05':
				case '07':
				case '08':
				case '10':
				case '12':
					if  (dia <= 31)
					return true;
					break;

				case '04':
				case '06':
				case '09':
				case '11':
					if  (dia <= 30)
					return true;
					break;
				case '02':
					if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0))
						bissexto = 1;
					if ((bissexto == 1) && (dia <= 29))
						return true;
					if ((bissexto != 1) && (dia <= 28))
						return true;
					break;
			}
		}
	}
	if (tam > 0)
	{
		alert("Dado incorreto! Por favor, verifique o valor informado.");
		digData.value = "";
    		return false;
	}
}


function ValidarHoraHM(digHora) {
	var hora = digHora.value;
	var tam = hora.length;

	var h = hora.substr(0,2)
	var m = hora.substr(3,2)

	if ((h >= 24 || m > 59) || tam < 5 && tam > 0)
	{
		alert("A hora "+hora+" é inválido! Por favor, verifique o valor informado.");
		digHora.value = "";
    		return false;
	}
}

function ValidarMail(strmail) {
	valMail = strmail.value;
	if (valMail != ""){
		if (valMail.indexOf('@')==-1 || valMail.indexOf('.')==-1) {
			alert("O e-mail "+valMail+" é inválido! Por favor, verifique o valor informado.");
			strmail.value = "";
    			return false;
		}
	}
}
