import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function About() {
  return (
    <>
      <header>
        <div class="navigation-container">
          <button id="nav-btn" class="nav-btn"></button>
          <nav class="nav-closed">
            <a id=" domu-btn" class="nav-polozky" href="index.html">
              Úvodní stránka
            </a>
            <a id="seznamy-btn" class="nav-polozky" href="">
              Moje seznamy
            </a>
            <a id="app-btn" class="nav-polozky" href="pages/about/index.html">
              O aplikaci
            </a>
          </nav>
        </div>
      </header>
      <main>
        <h3>List it!</h3>
        <h1>Jak to funguje</h1>
        <div>
          <p>
            V aplikaci si vytvoříte seznam s unikátní url adresou. Tu můžete
            nasdílet, komu potřebujete. Každý, kdo otevře odkaz, bude moci do
            seznamu dále přispívat a upravovat ho.
          </p>
          <div>
            <p>1. Vyberte seznam podle účelu</p>
            <p>
              2. Přidejte do seznamu položky. Jednotlivým položkám můžete
              přidávat i kategorie pro přehlednější zobrazení. Položky můžete
              označit jako již vyřešené, nebo je odstranit úplně.
            </p>
            <p>
              3. Pošlete odkaz na seznam rodině či přátelům pomocí svého
              oblíbeného komunikačního kanálu. Odkaz na seznam si nejlépe uložte
              do záložek pro snadný opětovný přístup.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
