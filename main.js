

let lahetanappi = document.getElementById("laheta");
let kayttaja = document.getElementById("kayttajaid");
let salasana = document.getElementById("salasana");
let id_virhe = document.getElementById("id_virhe");
let ss_virhe = document.getElementById("salasanavirhe");
let osoite = document.getElementById("osoite");
let osoitevirhe = document.getElementById("osoite_virhe");
let postinumero = document.getElementById("postinumero");
let maa = document.getElementById("maa");
let maa_virhe = document.getElementById("maa_virhe");
let postinumero_virhe = document.getElementById("postinumero_virhe");
let sahkoposti = document.getElementById("sahkoposti");
let sahkoposti_virhe = document.getElementById("sahkoposti_virhe");
let nimi = document.getElementById("nimi");
let nimi_virhe = document.getElementById("nimi_virhe");
let mies = document.getElementById("mies");
let nainen = document.getElementById("nainen");
let sukupuoli_virhe = document.getElementById("sukupuoli_virhe");
let suomi = document.getElementById("suomi");
let muu = document.getElementById("muu");
let kieli_virhe = document.getElementById("kieli_virhe");
lahetanappi.addEventListener("click", checkFormFields);









function checkFormFields(event)

{
event.preventDefault()
let numerot = /\d/.test(salasana.value);
let erikoiset = /[!@£$€&%#]/.test(salasana.value);
let isot = /[A-Z]/.test(salasana.value);
let email_merkit =  /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/.test(sahkoposti.value);

if(nimi.value == "")
{
nimi_virhe.innerHTML = " Pakollinen tieto puuttuu";
    
}

else{
    nimi_virhe.innerHTML ="";
}



if(postinumero.value.length < 5 || isNaN(postinumero.value))
{
    postinumero_virhe.innerHTML = " Postinumerossa tulee olla vähintään 5 numeroa";
}
else
{
    postinumero_virhe.innerHTML = "";
}



if(osoite.value =="")
{
    osoitevirhe.innerHTML =" Pakollinen tieto puuttuu";
}
else{
    osoitevirhe.innerHTML = "";
}

if(maa.value == "suomi"|| maa.value == "ruotsi"||maa.value =="other")
{

    maa_virhe.innerHTML = "";
}

else
{

    maa_virhe.innerHTML =" Pakollinen tieto puuttuu";
}

if (sahkoposti.value == "" || email_merkit == false)

{
    sahkoposti_virhe.innerHTML =" Sähköpostiosoite ei ole oikeassa muodossa";

}
else{
    sahkoposti_virhe.innerHTML ="";
}




if(kayttaja.value.length  < 6 )
{

    id_virhe.innerHTML = " Käyttäjänimen tulee olla vähintään 6 merkkiä";
}
else
{
    id_virhe.innerHTML =""
}

if(salasana.value.length < 6 || numerot == false || erikoiset == false || isot == false)


{
    ss_virhe.innerHTML =" Salasanan täytyy olla vähintään 6 merkkiä pitkä ja sisältää erikoismerkkejä, isoja kirjaimia ja numeroita";
}
else
{
    ss_virhe.innerHTML = "";
}
if(mies.checked || nainen.checked)
{
    sukupuoli_virhe.innerHTML ="";

}
else{

    sukupuoli_virhe.innerHTML = "Valinta puuttuu"
}


if(suomi.checked || muu.checked)
{
kieli_virhe.innerHTML = ""
}

else{
    kieli_virhe.innerHTML = "Valinta puuttuu"
}











}



