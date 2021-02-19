import './Body.css';
import arrow from '../../assests/arrow-blue.svg';

function Body() {
  return (
    <>
      <div className="container body">
        <div className="wrap-elements">
          <div className="card">
            <div className="card__img">
              <img className="img-cover" src="/images/img-1.jpg" alt="card img" />
            </div>
            <div className="card__text">
              <div className="card__text-info">
                <h2>Crea la tua offerta <strong>a partire da 14,90€</strong></h2>
                <p>
                  Scopri pacchetti e servizi più adatti alle tue esigenze, in completa autonomia.
              </p>
              </div>
             <button className="btn btn-white">Configura</button>
            </div>
          </div>
          <div className="trips">
            <h2>Inizia il tuo viaggio</h2>
            <div className="trips__wrap">
              <a href="/">
                <div className="trips__text">
                  <h3 className="title-color">Lorem Ipsum</h3>
                  <p>Tutto quello che ami in un unico posto, facile.</p>
                  <span>Scopri la Tv <img src={arrow} alt="arrow" /></span>
                </div>
                <img src="/images/img-2.jpg" alt="card img" />
              </a>
              <a href="/">
                <div className="trips__text">
                  <h3 className="title-color">Dolro Sit</h3>
                  <p>Lo spettacolo di casa.</p>
                  <span>Scopri la Tv <img src={arrow} alt="arrow" /></span>
                </div>
                <img src="/images/img-2.jpg" alt="card img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
