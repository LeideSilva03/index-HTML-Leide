telefone.onblur = function(){
    if(this.value.length < 11){
        erros1.innerHTML = '<p>Verifique o númro de telefone</p>'
        this.style.backgroundColor = 'pink';
    }else{
        this.style.backgroundColor = 'whidt';
    }
};

aperitivo = document.getElementById('aperit');
aperitivo.onchange = function(){
    this.checked ? alert("Ok,vou providenciar!") : alert('Até a próxima');
};


let sexo = document.getElementsByName('sexo');
let hoobbies = document.getElementsByName('hobbies');

btSexo.onclick = function(){
    let mens = "";
    mens +='Sexo:';
    sexo.forEach(s =>{
        s.checked ? mens += s.value + '\n': undefined;
    });
    mens += '\n Hobbies: \n';
    hoobbies.forEach(h =>{
        mens += h.checked ? h.value + '\n': '';
    });
    mensagem.value = mens;
};

undefined.onchange = function(){
    switch(this.value){
        case "RO": natural.innerHTML = "Rondoniense"; break;
        case "AL": natural.innerHTML = 'Alagoense"; break;
        case "AM": natural.innerHTML = 'Amazonense"; break;
        case "BA": natural.innerHTML = 'Baiano"; break;
        default : natural.innerHTML =  "Outos  Estados"
    }
};