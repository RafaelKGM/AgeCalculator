function guardarNumero(){

let yourAge;
let  yourDay1 = document.getElementById('day').value;
let  yourDay = parseFloat(yourDay1)
let yd = document.getElementById('day')
let  yourYear1  = document.getElementById('Year').value;
let yourYear = parseFloat(yourYear1)
let yy  = document.getElementById('Year')
let  yourMonth1 = document.getElementById('month').value;
let yourMonth = parseFloat(yourMonth1)
let ym = document.getElementById('month')
let yourMonthAlive;
console.log(yourMonth,yourDay,yourYear)
let yourYearText = document.getElementById('textYear')
let yourMonthText = document.getElementById('textMonth')
let yourDayText = document.getElementById('textDay')
let textoValido = document.getElementById('noValido')
let dateMonthNew;
let datenumber;
let dateMonth;
let dateYear;
let dayajust;

console.log(yourMonth,yourDay,yourYear)



const setDate = () => {
    const date = new Date();
    datenumber = date.toLocaleString('es', { day: 'numeric' });
    dateMonth = date.toLocaleString('es', { month: 'numeric' });
    dateYear = date.toLocaleString('es', { year: 'numeric' });
};

setDate(); // Llama a la función para establecer los valores

setInterval(setDate, 1000); // Actualiza los valores cada segundo

console.log(datenumber, dateMonth, dateYear);
//yourYear = 2005;
//yourDay =12;
//yourMonth =5; 
yourAge =  parseInt(dateYear) - parseInt(yourYear); 
 
const yourExactAge = () =>{
     if (yourMonth > dateMonth  ) {
        
        return yourAge--
        
     }
     else if (yourMonth >= dateMonth && yourDay > datenumber ) {
       
        return yourAge--
     }
}

const yourMonthLive = () =>{
    if (yourMonth <= dateMonth) {
        yourMonthAlive =   parseInt(dateMonth) - parseInt(yourMonth)
       
    }
    else if (yourMonth > dateMonth ) {   
        dateMonthNew = parseInt(dateMonth) +12;
        
       yourMonthAlive = parseInt(dateMonthNew) - parseInt(yourMonth);
       //yourMonthAlive = 30
       
    }
    else if (yourMonth == dateMonth && yourDay == datenumber) {  
        yourMonthAlive = 0
        dayajust = 0
        
    };
    if (yourDay < datenumber) {
        dayajust = datenumber - yourDay
     }
    else if (yourDay > datenumber) {
        yourMonthAlive--
        let n = 30 - parseInt(yourDay);
        dayajust = parseInt(datenumber)+ n;
       
        if (yourMonthAlive == -1) {
            yourMonthAlive = 0;
        }
     }
     else if (yourDay == datenumber) {
            dayajust = 0;
     }
    


}
yourMonthLive()
yourExactAge()


if (yourMonth > 12|| yourMonth < 1 || yourDay>31|| yourDay < 1 ||yourYear > dateYear) {
    textoValido.innerHTML = 'Introduzca una fecha  valida'
    console.log(yourMonth,yourDay,yourYear)
   
    yy.classList.add('invalid');
    ym.classList.add('invalid');
    yd.classList.add('invalid');
    yourAge= '--'
    yourMonthAlive = '--'
    dayajust ='--'
   
    return false
    
}
else if ((yourMonth == 2 && yourDay > 28)||( yourMonth == 4 && yourDay > 30)||( yourMonth == 6 && yourDay > 30)||( yourMonth == 9 && yourDay > 30)||( yourMonth == 11 && yourDay > 30)) {
    textoValido.innerHTML = 'Introduzca un dia valido'
    
    yy.classList.add('invalid');
    ym.classList.add('invalid');
    yd.classList.add('invalid');
    
    return false
}
else{
    textoValido.innerHTML = ''
}

if (yourYear1.trim() === '' || yourMonth1.trim() === '') {
    textoValido.innerHTML = 'Este campo no puede estar vacío';
        yy.classList.add('invalid');
        ym.classList.add('invalid');
        yd.classList.add('invalid');
      return false;
    }
    else{
        textoValido.innerHTML = '';
 
        yy.classList.remove('invalid');
        ym.classList.remove('invalid');
        yd.classList.remove('invalid');
        }
  


console.log(yourMonthAlive)
yourYearText.innerHTML = parseInt(yourAge);
yourMonthText.innerHTML = parseInt(yourMonthAlive); 
yourDayText.innerHTML = parseInt(dayajust);


}
const Idioma = () =>{
const año = document.getElementById("LenguajeAño");
const mes = document.getElementById("LenguajeMes")
const dia = document.getElementById("LenguajeDias")
const labelAño = document.getElementById("labelAño")
const labelMes = document.getElementById("labelMes")
const labelDia = document.getElementById("labelDia")
let textoValido = document.getElementById('noValido')
const boton = document.getElementById("boton")

if (textoValido.length > 1) {
    textoValido.textContent = "aca seria lo mismo en otro idioma"
}

labelAño.textContent = "Año"
labelMes.textContent = "Mes"
labelDia.textContent = "Dia"
año.innerHTML = '<span id="textYear" class="allText">--</span> Años'
mes.innerHTML ='<span id="textMonth" class="allText">--</span> Meses'
dia.innerHTML = '<span  id="textDay" class="allText">--</span> Dias'

boton.textContent = 'English'
boton.setAttribute("onClick","IdiomaIngles()")

}
const IdiomaIngles = () =>{
    const año = document.getElementById("LenguajeAño");
    const mes = document.getElementById("LenguajeMes")
    const dia = document.getElementById("LenguajeDias")
    const labelAño = document.getElementById("labelAño")
    const labelMes = document.getElementById("labelMes")
    const labelDia = document.getElementById("labelDia")
    const boton = document.getElementById("boton")
    
    labelAño.textContent = "Year"
    labelMes.textContent = "Month"
    labelDia.textContent = "Day"

    año.innerHTML = '<span id="textYear" class="allText">--</span> Years'
    mes.innerHTML ='<span id="textMonth" class="allText">--</span> Months'
    dia.innerHTML = '<span  id="textDay" class="allText">--</span> Days'
    
    boton.textContent = 'Español'
    boton.setAttribute("onClick","Idioma()")
    
    }
 