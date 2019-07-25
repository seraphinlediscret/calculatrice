/*let tab = [];
tab[0] = 3.3;
tab[1] = "coucou";
tab[2] = true;

for(let i=0; i < tabl.length; i++)
{
    console.log(tab[i]);
}*/

let nbn = prompt("combien de note voulez-vous entrer ?");
let tab =[];
count = 0;
for( let i= 0; i<nbn;i++)
{
tab[i] = prompt("entrez votre note: ");

if(tab[i] >= 10){
    count++;
}
}
console.log(tab);
alert( "Il y a"+" "+ count +" "+"au dessus de la moyenne");
