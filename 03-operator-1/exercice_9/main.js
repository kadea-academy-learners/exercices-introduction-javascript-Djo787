// Exercice 9
// Écrivez votre code ici
function calculerHeritage() {
  // Valeur totale de l'héritage
  const maison = 60000000;
  const terrains = 40000000;
  const liquidites = 20000000;
  const totalHeritage = maison + terrains + liquidites;

  // Répartition par catégorie
  const partPremiereCategorie = totalHeritage * 0.75; // 75%
  const partDeuxiemeCategorie = totalHeritage * 0.25;  // 25%

  // ---- Première catégorie (75%) ----
  // Paul et Marie reçoivent chacun 1/3
  const partPaul = partPremiereCategorie / 3;
  const partMarie = partPremiereCategorie / 3;

  // Alain (décédé) reçoit 1/3, partagé entre Éric et Claire
  const partAlain = partPremiereCategorie / 3;
  const partEric = partAlain / 2;
  const partClaire = partAlain / 2;

  // ---- Deuxième catégorie (25%) ----
  // Chacun reçoit 1/3 : Madame Mukuna, Joseph, Sarah
  const partDeuxieme = partDeuxiemeCategorie / 3;
  const partMadameMukuna = partDeuxieme;
  const partJoseph = partDeuxieme;
  const partSarah = partDeuxieme;

  // ---- Affichage des parts ----
  console.log("📊 Répartition de l'héritage (120 000 000 CDF):\n");

  console.log("--- Première Catégorie (75% = 90 000 000 CDF) ---");
    console.log(`Paul reçoit : ${partPaul.toLocaleString()} CDF`);
    console.log(`Marie reçoit : ${partMarie.toLocaleString()} CDF`);
    console.log(`Éric (en tant que fils d'Alain) reçoit : ${partEric.toLocaleString()} CDF`);
    console.log(`Claire (en tant que fille d'Alain) reçoit : ${partClaire.toLocaleString()} CDF`);

  console.log("--- Deuxième Catégorie (25% = 30 000 000 CDF) ---");
    console.log(`Madame Mukuna reçoit : ${partMadameMukuna.toLocaleString()} CDF`);
    console.log(`Joseph (frère vivant) reçoit : ${partJoseph.toLocaleString()} CDF`);
    console.log(`Sarah (fille de Daniel, frère décédé) reçoit : ${partSarah.toLocaleString()} CDF`);

}