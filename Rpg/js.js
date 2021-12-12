var dialoguehtml = document.getElementById("dialogue");
var Mob1Image= document.getElementById('Monstre1');
var Mob2Image= document.getElementById('Monstre2');
var Mob3Image= document.getElementById('Monstre3');
var HpMonstre1html=document.getElementById('InfoCroco');
var HpMonstre2html=document.getElementById('InfoMonstre1');
var HpMonstre3html=document.getElementById('InfoCroco2');
var DegatHero1 = Math.floor(Math.random()*20);
var DegatHero2 = Math.floor(Math.random()*20);
var DegatHero3 = Math.floor(Math.random()*20);
var DegatHero4 = Math.floor(Math.random()*20);
var DegatMonstre = Math.floor(Math.random()*30);
var HpHero1html = document.getElementById('hpHero1');
var HpHero2html = document.getElementById('hpHero2');
var HpHero3html = document.getElementById('hpHero3');
var HpHero4html = document.getElementById('hpHero4');
var HpMonstre1 = "50"
var HpMonstre2 = "50"
var HpMonstre3 = "50"
var HpHero1= "100"
var HpHero2= "100"
var HpHero3= "100"
var HpHero4= "100"
var RetourDegat =0
var DefenseHero1 =Math.floor(Math.random()*0);
var DefenseHero2 =Math.floor(Math.random()*0);
var DefenseHero3 =Math.floor(Math.random()*0);
var DefenseHero4 =Math.floor(Math.random()*0);


////////////////////////////////////////////

//Bouton boite


function s_vieux() {
    var div = document.getElementById("skill_vieux");
    if (div.style.display === "none") {
      div.style.display = "block";
      skill_vieuxR.style.display ="none";
      skill_vieuxV.style.display ="none";
      skill_vieuxB.style.display ="none";
    } else {
      div.style.display = "none";
    }
  }


function s_vieuxR() {
    var div = document.getElementById("skill_vieuxR");
    if (div.style.display === "none") {
      div.style.display = "block";
      skill_vieux.style.display ="none";
      skill_vieuxV.style.display ="none";
      skill_vieuxB.style.display ="none";
    } else {
      div.style.display = "none";
    }
  }


function s_vieuxV() {
    var div = document.getElementById("skill_vieuxV");
    if (div.style.display === "none") {
      div.style.display = "block";
      skill_vieuxR.style.display ="none";
      skill_vieuxB.style.display ="none";
      skill_vieux.style.display ="none";
    } else {
      div.style.display = "none";
    }
  }

function s_vieuxB() {
    var div = document.getElementById("skill_vieuxB");
    if (div.style.display === "none") {
      div.style.display = "block";
      skill_vieuxR.style.display ="none";
      skill_vieuxV.style.display ="none";
      skill_vieux.style.display ="none";
    } else {
      div.style.display = "none";
    }
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Bouton attaque des heros et riposte des ennemis



function choix_competence_atq_Noir(){
  dialoguehtml.innerHTML="Choisissez une cible"             //changement indication ds dialogue
  Mob1Image.onclick=DamageSurMonstre          //changement du onclick sur le monstre (quand appuyer execute...) qui est null de base ( fait rien)
  Mob2Image.onclick=DamageSurMonstre2
  Mob3Image.onclick=DamageSurMonstre3
}


function choix_competence_atq_Rouge(){
  dialoguehtml.innerHTML="Choisissez une cible"             //changement indication ds dialogue
  Mob1Image.onclick=DamageSurMonstre          //changement du onclick sur le monstre (quand appuyer execute...) qui est null de base ( fait rien)
  Mob2Image.onclick=DamageSurMonstre2
  Mob3Image.onclick=DamageSurMonstre3
}


function choix_competence_atq_Violet(){
  dialoguehtml.innerHTML="Choisissez une cible"             //changement indication ds dialogue
  Mob1Image.onclick=DamageSurMonstre          //changement du onclick sur le monstre (quand appuyer execute...) qui est null de base ( fait rien)
  Mob2Image.onclick=DamageSurMonstre2
  Mob3Image.onclick=DamageSurMonstre3
}


function choix_competence_atq_Bleu(){
  dialoguehtml.innerHTML="Choisissez une cible"             //changement indication ds dialogue
  Mob1Image.onclick=DamageSurMonstre          //changement du onclick sur le monstre (quand appuyer execute...) qui est null de base ( fait rien)
  Mob2Image.onclick=DamageSurMonstre2
  Mob3Image.onclick=DamageSurMonstre3
}


function DamageSurMonstre(){        
  DegatHero1 = Math.floor(Math.random()*20);              //nbre random entre 0-20
  console.log(DegatHero1)           //renvoie degatdu hero ds la console (useless)
  HpMonstre1html.innerHTML= HpMonstre1-=DegatHero1        //enleve degat du hero a hp du monstre
  dialoguehtml.innerHTML="Vous infligez " +  DegatHero1 + " sur le monstre."   //changement  indication ds dialogue
  verifVieMob1()        //lancement verif vie du monstre
  Mob1Image.onclick=null            //remet en null onclick sur mob
  setTimeout(VerifAttaqueMonstre,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
  RetourDegat+=1;
  console.log(RetourDegat)
}

function DamageSurMonstre2(){        
  DegatHero1 = Math.floor(Math.random()*20);              //nbre random entre 0-20
  console.log(DegatHero1)           //renvoie degatdu hero ds la console (useless)
  HpMonstre2html.innerHTML= HpMonstre2-=DegatHero1        //enleve degat du hero a hp du monstre
  dialoguehtml.innerHTML="Vous infligez " +  DegatHero1 + " sur le monstre."   //changement  indication ds dialogue
  verifVieMob2()        //lancement verif vie du monstre
  Mob2Image.onclick=null            //remet en null onclick sur mob
  setTimeout(VerifAttaqueMonstre,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
  RetourDegat+=1;
  console.log(RetourDegat)
}


function DamageSurMonstre3(){        
  DegatHero1 = Math.floor(Math.random()*20);              //nbre random entre 0-20
  console.log(DegatHero1)           //renvoie degatdu hero ds la console (useless)
  HpMonstre3html.innerHTML= HpMonstre3-=DegatHero1        //enleve degat du hero a hp du monstre
  dialoguehtml.innerHTML="Vous infligez " +  DegatHero1 + " sur le monstre."   //changement  indication ds dialogue
  verifVieMob3()        //lancement verif vie du monstre
  Mob3Image.onclick=null            //remet en null onclick sur mob
  setTimeout(VerifAttaqueMonstre,1500);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
  RetourDegat+=1;
  console.log(RetourDegat)
}
   
function Hero1SeulFois(){
  



}



function verifVieMob1(){
  if (HpMonstre1<=0){       //si les hp du monstre sont en dessous ou egale a 0 alors:
    Mob1Image.style.visibility="hidden";      //fait disparaitre le monstre
    dialoguehtml.innerHTML="Bien joué !"
  }
}

function verifVieMob2(){
  if (HpMonstre2<=0){       //si les hp du monstre sont en dessous ou egal a 0 alors:
    Mob2Image.style.visibility="hidden";      //fait disparaitre le monstre
    dialoguehtml.innerHTML="Tu dead ça !"
  }
}

function verifVieMob3(){
  if (HpMonstre3<=0){       //si les hp du monstre sont en dessous ou egale a 0 alors:
    Mob3Image.style.visibility="hidden";      //fait disparaitre le monstre
    dialoguehtml.innerHTML="Wawwww !"      //changement indication ds dialogue
  }
}



function VerifAttaqueMonstre(){
  if (RetourDegat==4){       //si riposte = au retour degat requit (4 hero = retour degat requit de 4)
    DegatMonstre = Math.floor(Math.random()*30);      //nbre random entre 0-30
    HpHero1html.innerHTML=HpHero1-=DegatMonstre    //enleve degat du monstre a hp du hero
    HpHero2html.innerHTML=HpHero2-=DegatMonstre
    HpHero3html.innerHTML=HpHero3-=DegatMonstre
    HpHero4html.innerHTML=HpHero4-=DegatMonstre
    dialoguehtml.innerHTML="Le monstre vous inflige " +  DegatMonstre    //changement indication ds dialogue
  }
}







///////////////////////////////////////////////////////////////////////////////////////
//Bouton defense
//Ne marche pas 
//Je veux que quand on clique sur le bouton on puisse se défendre sans recliquer sur le hero 









function DefenseNoir(){
  DefenseHero1=Math.floor(Math.random()*10);
  console.log(DefenseHero1)
  HpHero1=HpHero1-=DefenseHero1
  dialoguehtml.innerHTML="Vous vous défendez de " + DefenseHero1 +" dégats." //changement indication ds dialogue

}

function DefenseRouge(){
  DefenseHero2=Math.floor(Math.random()*10);
  console.log(DefenseHero1)
  HpHero2=HpHero2-=DefenseHero2
  dialoguehtml.innerHTML="Vous vous défendez de " + DefenseHero2 +" dégats." //changement indication ds dialogue

}

function DefenseViolet(){
  DefenseHero1=Math.floor(Math.random()*10);
  console.log(DefenseHero1)
  HpHero3=HpHero3-=DefenseHero3
  dialoguehtml.innerHTML="Vous vous défendez de " + DefenseHero1 +" dégats." //changement indication ds dialogue

}

function DefenseBleu(){
  DefenseHero4=Math.floor(Math.random()*10);
  console.log(DefenseHero4)
  HpHero4=HpHero4-=DefenseHero4
  dialoguehtml.innerHTML="Vous vous défendez de " + DefenseHero4 +" dégats." //changement indication ds dialogue

}










