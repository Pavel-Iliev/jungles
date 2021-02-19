import './Header.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function Header() {
  return (
    <>
      <div className="home-header">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="container">
              <div className="home-header__text">
                <h2 className="title-color">Nuove. Imperdibili. Per te.<br />Preparati a un 2021 di serie&nbsp;TV.</h2>
                <button className="btn btn-blue-dark">Scopri di più</button>
              </div>
            </div>
            <img className="img-cover" src="/images/img-1.jpg" alt="img-1"/>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="home-header__text slide-2">
                <h2 className="title-color">Sky e Netflix</h2>
                <div className="wrap__price disp-flex">
                  <div className="price-left">
                    <div className="price aside disp-flex">
                      <div className="price-main">
                        <span className="price-curr">€</span>
                        <span className="price-int">19</span>
                      </div>
                      <div className="price-side disp-flex">
                        <span className="price-dec">,90 <span>€</span></span>
                        <span className="price-per">al mese</span>
                      </div>
                    </div>
                  </div>
                  <div className="price-right disp-flex">
                    <div className="price-ex ">
                      <sup>Per <strong>18 mesi</strong></sup>
                    </div>
                    <div className="price-ex ">
                      anzichè <strong>30€</strong> al mese
                    </div>
                  </div>
                </div>
                <p>Alla scadenza puoi <strong>rinnovare Sky Smart</strong> allo sconto applicabile.</p>
                <button className="btn btn-blue">Scopri di più</button>
              </div>
            </div>
            <img className="img-cover" src="/images/img-2.jpg" alt="img-2"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Header;
