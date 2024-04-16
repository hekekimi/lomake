

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



const virhe_ilmoitukset = 
{
    tyhjaKentta: "Pakollinen tieto puuttuu",
    lyhytID : "Käyttäjänimen tulee olla vähintään 6 merkkiä",
    virheSalasana: "Salasanan täytyy olla vähintään 6 merkkiä pitkä ja sisältää erikoismerkkejä, isoja kirjaimia ja numeroita",
    virhe_sahkoposti: " Sähköpostiosoite ei ole oikeassa muodossa",
    virhe_postinumero: "Postinumerossa tulee olla vähintään 5 numeroa",
    


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
nimi_virhe.innerHTML = virhe_ilmoitukset.tyhjaKentta;
    
}



else{
    nimi_virhe.innerHTML ="";
}



if(postinumero.value.length < 5 || isNaN(postinumero.value))
{
    postinumero_virhe.innerHTML = virhe_ilmoitukset.virhe_postinumero;
}
else
{
    postinumero_virhe.innerHTML = "";
}



if(osoite.value =="")
{
    osoitevirhe.innerHTML = virhe_ilmoitukset.tyhjaKentta;
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

    maa_virhe.innerHTML = virhe_ilmoitukset.tyhjaKentta;
}

if (sahkoposti.value == "" || email_merkit == false)

{
    sahkoposti_virhe.innerHTML = virhe_ilmoitukset.virhe_sahkoposti;

}
else{
    sahkoposti_virhe.innerHTML ="";
}




if(kayttaja.value.length  < 6 )
{

    id_virhe.innerHTML = virhe_ilmoitukset.lyhytID;
}
else
{
    id_virhe.innerHTML =""
}

if(salasana.value.length < 6 || numerot == false || erikoiset == false || isot == false)


{
    ss_virhe.innerHTML = virhe_ilmoitukset.virheSalasana;
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

    sukupuoli_virhe.innerHTML = virhe_ilmoitukset.tyhjaKentta;
}


if(suomi.checked || muu.checked)
{
kieli_virhe.innerHTML = ""
}

else{
    kieli_virhe.innerHTML = virhe_ilmoitukset.tyhjaKentta;
}




}



