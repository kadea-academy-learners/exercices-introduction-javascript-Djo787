// Exercice 8
// Écrivez votre code ici

const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;
const nourriture = salaireMensuel * 0.2;
const transport = salaireMensuel * 0.1;
let autresDepenses = 50;
    autresDepenses += 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

function verifierReste(reste){
    if(reste>=100){
        console.log('budget bien géré')
    }else{
        console.log('attention serré')
    }
}

verifierReste(50);

function calcultotalDepenses(salaireMensuel){
    const loyer = salaireMensuel * 0.3;
    console.log(loyer);
    const nourriture = salaireMensuel * 0.2;
    console.log(nourriture);
    const transport = salaireMensuel * 0.1;
    console.log(transport);
    const loisirs = salaireMensuel * 0.15;
        console.log(loisirs);
    let autresDepenses = 50;
        autresDepenses += 25;
        console.log(autresDepenses);
    let totalDepenses = loyer + nourriture + transport + loisirs + autresDepenses;
    console.log(totalDepenses);
    let reste = salaireMensuel - totalDepenses;
    console.log(reste);

function calculerPourcentage(depense, salaireMensuel){
    const pourcentageLoyer = (loyer / salaireMensuel) * 100;
    console.log(pourcentageLoyer);
    const pourcentageNourriture = (nourriture / salaireMensuel) * 100;
    console.log(pourcentageNourriture);
    const pourcentageTransport = (transport / salaireMensuel) * 100;
    console.log(pourcentageTransport);
    const pourcentageLoisirs = (loisirs / salaireMensuel) * 100;
    console.log(pourcentageLoisirs);
    const pourcentageautresDepenses = (autresDepenses / salaireMensuel) * 100;
    console.log(pourcentageautresDepenses);
    
}

}
calculerPourcentage(depense, salaireMensuel)
// Simulation de 10%
function simulerAugmentation(pourcentage){
    const salaireMensuel = 500;
          salaireMensuel *= 0.3;
    console.log(salaireMensuel);
      const loyer = salaireMensuel * 0.3;
    console.log(loyer);
    const nourriture = salaireMensuel * 0.2;
    console.log(nourriture);
    const transport = salaireMensuel * 0.1;
    console.log(transport);
    const loisirs = salaireMensuel * 0.15;
        console.log(loisirs);
    let autresDepenses = 50;
        autresDepenses += 25;
        console.log(autresDepenses);
    let totalDepenses = loyer + nourriture + transport + loisirs + autresDepenses;
    console.log(totalDepenses);
    let reste = salaireMensuel - totalDepenses;
    console.log(reste);
     const pourcentageLoyer = (loyer / salaireMensuel) * 100;
    console.log(pourcentageLoyer);
    const pourcentageNourriture = (nourriture / salaireMensuel) * 100;
    console.log(pourcentageNourriture);
    const pourcentageTransport = (transport / salaireMensuel) * 100;
    console.log(pourcentageTransport);
    const pourcentageLoisirs = (loisirs / salaireMensuel) * 100;
    console.log(pourcentageLoisirs);
    const pourcentageautresDepenses = (autresDepenses / salaireMensuel) * 100;
    console.log(pourcentageautresDepenses)
   
}
simulerAugmentation(pourcentage)

function verifiertotalDepenses(totalDepenses){
    if (totalDepenses > salaireMensuel * 0.9){
        console.log("Dépenses trop élevées, réduisez vos charges");
    }
    }

    

