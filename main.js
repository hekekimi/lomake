

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




const ilmoitukset = 
{
    tyhjaKentta: "Pakollinen tieto puuttuu",
    lyhytID : "Käyttäjänimen tulee olla vähintään 6 merkkiä",
    virheSalasana: "Salasanan täytyy olla vähintään 6 merkkiä pitkä ja sisältää erikoismerkkejä, isoja kirjaimia ja numeroita",
    virhe_sahkoposti: " Sähköpostiosoite ei ole oikeassa muodossa",
    virhe_postinumero: "Postinumerossa tulee olla vähintään 5 numeroa",
    kaikki_ok: "&#10004;"
    


};






function checkFormFields(event)

{
event.preventDefault()
let numerot = /\d/.test(salasana.value);
let erikoiset = /[!@£$€&%#]/.test(salasana.value);
let isot = /[A-Z]/.test(salasana.value);
let email_merkit =  /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/.test(sahkoposti.value);

if(nimi.value == "")
{
nimi_virhe.innerHTML = ilmoitukset.tyhjaKentta;
nimi_virhe.classList.remove("green");  
}



else{
    nimi_virhe.innerHTML =ilmoitukset.kaikki_ok;
    nimi_virhe.classList.add("green");
}



if(postinumero.value.length < 5 || isNaN(postinumero.value))
{
    postinumero_virhe.innerHTML = ilmoitukset.virhe_postinumero;
    postinumero_virhe.classList.remove("green")
    
}
else
{
    postinumero_virhe.innerHTML = ilmoitukset.kaikki_ok;
    postinumero_virhe.classList.add("green")
}



if(osoite.value =="")
{
    osoitevirhe.innerHTML = ilmoitukset.tyhjaKentta;
    osoitevirhe.classList.remove("green");
}
else{
    osoitevirhe.innerHTML = ilmoitukset.kaikki_ok;
    osoitevirhe.classList.add("green");
}

if(maa.value == "suomi"|| maa.value == "ruotsi"||maa.value =="other")
{

    maa_virhe.innerHTML = ilmoitukset.kaikki_ok;
    maa_virhe.classList.add("green");
}

else
{

    maa_virhe.innerHTML = ilmoitukset.tyhjaKentta;
    maa_virhe.classList.remove("green");
}

if (sahkoposti.value == "" || email_merkit == false)

{
    sahkoposti_virhe.innerHTML = ilmoitukset.virhe_sahkoposti;
    sahkoposti_virhe.classList.remove("green");

}
else{
    sahkoposti_virhe.innerHTML =ilmoitukset.kaikki_ok;
    sahkoposti_virhe.classList.add("green");
}




if(kayttaja.value.length  < 6 )
{

    id_virhe.innerHTML = ilmoitukset.lyhytID;
    id_virhe.classList.remove("green");
}
else
{
    id_virhe.innerHTML = ilmoitukset.kaikki_ok;
    id_virhe.classList.add("green");
}

if(salasana.value.length < 6 || numerot == false || erikoiset == false || isot == false)


{
    ss_virhe.innerHTML = ilmoitukset.virheSalasana;
    ss_virhe.classList.remove("green");
}
else
{
    ss_virhe.innerHTML = ilmoitukset.kaikki_ok;
    ss_virhe.classList.add("green");
}
if(mies.checked || nainen.checked)
{
    sukupuoli_virhe.innerHTML = ilmoitukset.kaikki_ok;
    sukupuoli_virhe.classList.add("green");

}
else{

    sukupuoli_virhe.innerHTML = ilmoitukset.tyhjaKentta;
    sukupuoli_virhe.classList.remove("green");
}


if(suomi.checked || muu.checked)
{
kieli_virhe.innerHTML = ilmoitukset.kaikki_ok;
kieli_virhe.classList.add("green");
}

else{
    kieli_virhe.innerHTML = ilmoitukset.tyhjaKentta;
    kieli_virhe.classList.remove("green");
}




}



