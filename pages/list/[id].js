import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { db } from '../../utils/db.js';
import { ListCategory } from '../../components/ListCategory/index.jsx';

export default function List() {
  const { id } = useRouter().query;
  const [seznam, setSeznam] = useState(null);
  const [urlCopied, setUrlCopied] = useState(false);
  const [jsonData, setJsonData] = useState('');
  const formRef = useRef();

  const generateJson = () => {
    const seznamRef = db.collection('seznamy').doc(id);
    return seznamRef
      .get()
      .then((seznamDoc) => {
        return seznamRef
          .collection('kategorie')
          .orderBy('poradi')
          .get()
          .then((kategorieRef) => {
            return {
              nazev: seznamDoc.data().nazev,
              kategorie: kategorieRef.docs.map((kategorieDoc) => {
                return {
                  nazev: kategorieDoc.data().nazev,
                  polozkyPromise: kategorieDoc.ref
                    .collection('polozky')
                    .orderBy('datumVytvoreni', 'desc')
                    .get(),
                };
              }),
            };
          });
      })
      .then((data) => {
        return Promise.all(
          data.kategorie.map((kategorie) => kategorie.polozkyPromise),
        ).then((promises) => {
          const kategorie = data.kategorie.map((kategorie) => {
            return { nazev: kategorie.nazev };
          });
          kategorie.forEach((item, index) => {
            item.polozky = promises[index].docs.map((polozkaDoc) =>
              polozkaDoc.data(),
            );
          });
          return {
            nazev: data.nazev,
            kategorie: kategorie,
          };
        });
      });
  };

  useEffect(() => {
    return db
      .collection('seznamy')
      .doc(id)
      .onSnapshot(function (doc) {
        setSeznam(doc.data());
      });
  }, [id]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (seznam != null) {
      body.classList.add(`type-${seznam.typ}`);
      return () => {
        body.classList.remove(`type-${seznam.typ}`);
      };
    }
  }, [seznam]);

  if (seznam === undefined) {
    return (
      <div className="zadny-seznam">
        <h1>Je nám líto, ale tento seznam neexistuje.</h1>
        <Link href="/">
          <a className="h3-home">
            Tady si můžete vytvořit nový
          </a>
        </Link>
      </div>
    );
  } else if (seznam === null) {
    return (
      <div className="container">
        <div className="spinner"></div>
      </div>
    );
  } else {
    return (
      <main className="list-main">
        <div className="seznam-container">
          <div className="container-icons--action">
            <button
              type="submit"
              className="btn-icon-action"
              onClick={() =>
                generateJson().then((jsonData) => {
                  setJsonData(JSON.stringify(jsonData));
                  formRef.current.submit();
                })
              }
            >
              <img
                className="ikonky-action"
                src="/assets/download.svg"
                alt="stáhnout"
                title="stáhnout"
              />
            </button>
            <button
              className="btn-icon-action"
              onClick={() => {
                const { title } = document
                const url = location.href

                if ('share' in navigator) {
                  navigator.share({ title, url })
                } else {
                  navigator.clipboard.writeText(url);
                  setUrlCopied(true);
                  setTimeout(() => setUrlCopied(false), 4000);
                }
              }}
            >
              <img
                className="ikonky-action"
                src="/assets/sharegreen.svg"
                alt="sdílení"
                title="zkopírovat URL adresu"
              />
            </button>
            {urlCopied ? (
              <div className="message-copied">URL adresa zkopírována</div>
            ) : null}
          </div>
          <h2 className="seznam-title">{seznam.nazev}</h2>
          <p className="instruction">
            Přidejte položku, množství a označte její kategorii
          </p>

          <ListCategory id={id} type={seznam.typ} />
        </div>
        <form ref={formRef} method="POST" action="https://pdf.zkusmo.eu/seznam">
          <input name="type" value="json" type="hidden" />
          <input name="root" value="json" type="hidden" />
          <input name="data" value={jsonData} type="hidden" />
        </form>
      </main>
    );
  }
};
