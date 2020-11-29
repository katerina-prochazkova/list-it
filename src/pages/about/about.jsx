import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <header>
        <div className="navigation-container">
          <button id="nav-btn" className="nav-btn">
            {/* hamburger menu */}
          </button>
          <h3>List it!</h3>
          <nav className="nav-closed">
            <Link to="/" id="home-btn" className="nav-polozky">
              Úvodní stránka
            </Link>
            <Link to="/list/66" id="seznamy-btn" className="nav-polozky">
              Moje seznamy
            </Link>
          </nav>
        </div>
      </header>
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
