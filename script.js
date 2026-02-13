document.addEventListener("DOMContentLoaded", () => {
  console.log("Xaxhi Industry Website geladen.");

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("fullscreen-nav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("show");
  });

  // Mitglieder-Daten
  const mitglieder = [
    {
      name: "Rejan „Rojo“ Memeti",
      bild: "Bilder/Rejan-kappe-2.png",
      text: "Still, ruhig, analytisch – bis er den Code sieht, der nicht läuft. Dann wird's persönlich. Zwischen Kabelsalat und Chaos: immer die stabilste Verbindung der Gruppe."
    },
    {
      name: "Ahmed „Xhaxh“ Shabani",
      bild: "Bilder/ahmed2.jpg",
      text: "1.90 Albaner joggt rückwärts nach Frauenfeld, schreit dabei ‚Messi ist mein Vater!‘ und verkauft dabei imaginäre Döner. Sein linker Schuh spielt besser Fußball als du – und der hat nicht mal Schnürsenkel"
    },
    {
      name: "Amar „Daja“ Sulajmani",
      bild: "Bilder/Amar.jpg",
      text: "Gibt Ratschläge, die klingen wie Mafia-Weisheiten. 'Vertrau mir, Bruder.'"
    },
    {
      name: "Ijad „Pablo“ Isufi",
      bild: "Bilder/Ijad.jpg",
      text: "Hauptberuflich Meme-Dealer. Nebenberuflich verloren im GPS."
    },
    {
      name: "Rahmetulla „Boomer“ Muradi",
      bild: "Bilder/Rahmetulla.jpg",
      text: "Technisch gesehen jung, aber innerlich Jahrgang 1965."
    },
    {
      name: "Ermal „Mali“ Ademi",
      bild: "Bilder/Ermal.jpg",
      text: "Kennt mehr Vornamen als dein Kontaktbuch. Bei ihm vibriert das Handy öfter als der Gruppenchat – und das ist keine Übertreibung."
    },
    {
      name: "Altin „Tini“ Limani",
      bild: "Bilder/Altin.jpg",
      text: "Hat mehr Selbstbewusstsein als ein Cristiano Ronaldo."
    },
    {
      name: "Sherif „Shero“ Imeri",
      bild: "Bilder/sherif.jpg",
      text: "Lacht mehr als er redet – und das will was heissen."
    },
    {
      name: "Edin Sejfulai",
      bild: "Bilder/Edin.jpg",
      text: "Gerüchten zufolge ist er noch Teil der Gruppe. Sichtungen sind selten."
    },
    {
      name: "Hamdi „Yashakari“ Sabani",
      bild: "Bilder/Hamdi.jpg",
      text: "Boxer im Ring, Gentleman daneben. Wenn er mit den Fäusten nicht trifft, dann mit seinen legendären Kontersprüchen. Immer ready – im Gym und im Leben."
    },
    {
      name: "Sertan „Abi“ Serpek",
      bild: "Bilder/knie.jpg",
      text: "Ist da, redet wenig, trifft immer. In Fifa und im Leben. Man vermutet das er auch Knieprobleme wegen seiner unglaublichen Spielerkarriere hat."
    }
  ];

  // Zeigt ein Mitglied an (falls vorhanden)
  window.zeigeMitglied = function(index) {
    const mitglied = mitglieder[index];
    document.getElementById("mitglied-bild").src = mitglied.bild;
    document.getElementById("mitglied-bild").alt = mitglied.name;
    document.getElementById("mitglied-text").innerHTML = `
      <h3>${mitglied.name}</h3>
      <p>${mitglied.text}</p>
    `;
  };
 }
);


