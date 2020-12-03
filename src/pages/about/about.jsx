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
          <div className="step-by-step">
            <div className="step-one">
              <p>1. Vyberte seznam podle účelu</p>
              <div className="step-icons">
                <img
                  className="pg-about-icon"
                  src="/assets/shopping-02.svg"
                  alt="shopping"
                />
                <img
                  className="pg-about-icon"
                  src="/assets/travel-01.svg"
                  alt="travel"
                />
                <img
                  className="pg-about-icon"
                  src="/assets/wish-04.svg"
                  alt="wish"
                />
              </div>
            </div>
            <div className="step-two">
              <p>
                2. Přidejte do seznamu položky. Jednotlivým položkám můžete
                přidávat i kategorie pro přehlednější zobrazení. <br />
                Položky můžete označit jako již vyřešené, nebo je odstranit
                úplně.
              </p>
              <div className="step-icons">
                <img
                  className="pg-about-icon plus"
                  src="/assets/plus.svg"
                  alt="plus"
                />
                <img
                  className="pg-about-icon check"
                  src="/assets/check.svg"
                  alt="check"
                />
                <img
                  className="pg-about-icon delete"
                  src="/assets/x-thin.svg"
                  alt="delete"
                />
              </div>
            </div>
            <div className="step-three">
              <p>
                {' '}
                3. Pošlete odkaz na seznam rodině či přátelům pomocí svého
                oblíbeného komunikačního kanálu. <br />
                Odkaz na seznam si nejlépe uložte do záložek pro snadný opětovný
                přístup. <br /> Seznam si také můžete snadno vytisknout.
              </p>
              <div className="step-icons">
                <img
                  className="pg-about-icon"
                  src="/assets/ms-icon-150x150.png"
                  alt="list"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
