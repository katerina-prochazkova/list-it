import React from 'react';

export default function About() {
  return (
    <>
      <main className="about-main">
        <h1>Jak to funguje</h1>
        <div>
          <p>
            V aplikaci si vytvoříte seznam s unikátní url adresou. Tu můžete
            nasdílet, komu potřebujete. Každý, kdo otevře odkaz, bude moci do
            seznamu dále přispívat a upravovat ho.
          </p>
          <br />
          <br />
          <p>1. Vyberte seznam podle účelu</p>
          <p>
            2. Přidejte do seznamu položky. Jednotlivým položkám můžete přidávat
            i kategorie pro přehlednější zobrazení. Položky můžete označit jako
            již vyřešené, nebo je odstranit úplně.
          </p>
          <p>
            3. Pošlete odkaz na seznam rodině či přátelům pomocí svého
            oblíbeného komunikačního kanálu. Odkaz na seznam si nejlépe uložte
            do záložek pro snadný opětovný přístup.
          </p>
        </div>
      </main>
    </>
  );
}
