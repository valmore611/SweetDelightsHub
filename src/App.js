import './App.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation  } from "swiper";

function App() {
 
  return (
    <div className="App">
    <header class="header">
        <div class="logoContent">
            <a href="#" class="logo"><img src={require(`../src/images/logo.png`)} alt="logo"/></a>
            <h1 class="logoName">RECETARIO COCINA II </h1>
        </div>

        <nav class="navbar">
            <a href="#home">Inicio</a>
            <a href="#product">Recetas</a>
            <a href="#blogs">Blogs</a>
            <a href="#review">Reviews</a>
            <a href="#contact">Contacto</a>
        </nav>

        <div class="icon">
            <i class="fas fa-search" id="search"></i>
            <i class="fas fa-bars" id="menu-bar"></i>
        </div>

        <div class="search">
            <input type="search" placeholder="search..."/>
        </div>
    </header>
    <section class="home" id="home">
        <div class="homeContent">
            <h2>Postres irresistibles deliciosamente fáciles </h2>
            <p>¡Bienvenido(a)s al dulce mundo de las delicias! 
              Descubre recetas irresistibles y crea tus propias obras maestras de: Galletas de vainilla, alfajores, pasta seca
              Torta Pie de Limón, ponquesitos, Fressier, Shots cítricos, Shots brulee de fresa, Selva negra, Cinco leches,
              Profisteroles, Golfeados, Pan dulce, Trenzas de chocolate, Rolls de canela, Donas, Bombas, Pan de guayaba y queso ¡A disfrutar!</p>
            <div class="home-btn">
                <a href="#product"><button>Recetas</button></a>
            </div>
        </div>
    </section>
    <section className="product" id="product">
        <div className="heading">
            <h2>Nuestra variedad de recetas</h2>
        </div>
        <Swiper
        loop={true}
        // slidesPerView={"auto"}
        // centeredSlides={true}
        spaceBetween={20}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1160: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          2350: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          }
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className="swiper product-row">  
        <div className="swiper-slide box">   
            <div className="img">
                <img src={require(`../src/images/galletasDeVainilla.png`)} alt=""/>
            </div>
            <div className="product-content">
                <h3>Galletas de vainilla</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                </p>
                <div className="orderNow">
                    <button>Order Now </button>
                </div> 
            </div>
        </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/alfajores.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Alfajores</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/pastaSeca.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Pasta seca</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/tortaDeLimon.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Torta pie de limón</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                <div className="orderNow">
                    <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide className="swiper product-row">  
        <div className="swiper-slide box">   
            <div className="img">
                <img src={require(`../src/images/cupCake.png`)} alt=""/>
            </div>
            <div className="product-content">
                <h3>Ponquesitos</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                </p>
                <div className="orderNow">
                    <button>Order Now </button>
                </div> 
            </div>
        </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/fressier.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Fressier</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/shot1.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Shots Cítricos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/shot2.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Shots Brulee De Fresa</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                <div className="orderNow">
                    <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/selvaNegra.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Selva Negra</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/5leches.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Torta 5 Leches</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                <div className="orderNow">
                    <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide className="swiper product-row">  
        <div className="swiper-slide box">   
            <div className="img">
                <img src={require(`../src/images/profisteroles.png`)} alt=""/>
            </div>
            <div className="product-content">
                <h3>Profisteroles</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                </p>
                <div className="orderNow">
                    <button>Order Now </button>
                </div> 
            </div>
        </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/golfeados.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Golfeados</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/pan.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Pan Dulce</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/trenzas.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Trenzas De Chocolate</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                <div className="orderNow">
                    <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide className="swiper product-row">  
        <div className="swiper-slide box">   
            <div className="img">
                <img src={require(`../src/images/roll.png`)} alt=""/>
            </div>
            <div className="product-content">
                <h3>Rolls De Canela</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                </p>
                <div className="orderNow">
                    <button>Order Now </button>
                </div> 
            </div>
        </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/donas.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Donas Rellenas</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/bomba.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Bombas Rellenas</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                    <div className="orderNow">
                        <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className="swiper product-row">
            <div className="swiper-slide box">
                <div className="img">
                    <img src={require(`../src/images/guayaba.png`)} alt=""/>
                </div>
                <div className="product-content">
                    <h3>Pan De Guayaba</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
                    </p>
                <div className="orderNow">
                    <button>Order Now </button>
                    </div>
                </div>
            </div></SwiperSlide>
      </Swiper>
    </section>
    <section className="blogs" id="blogs">

    <div className=" swiper blogs-row">
    <div className="swiper-wrapper">
        <div className=" swiper-slide box">
            <div className="img">
                <img src={require(`../src/images/blog-img5.png`)} alt=""/>
            </div>
            <div className="content">
                <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
                    corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
                    laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
                    eaque at.</p>
                <a href="#blogs" className="btn">learn more</a>
            </div>
        </div>
        <div className=" swiper-slide box">
            <div className="img">
                <img src={require(`../src/images/blog-img2.png`)} alt=""/>
            </div>
            <div className="content">
                <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
                    corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
                    laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
                    eaque at.</p>
                <a href="#blogs" class="btn">learn more</a>
            </div>
        </div>
        <div className=" swiper-slide box">
            <div className="img">
                <img src={require(`../src/images/blog-img3.png`)} alt=""/>
            </div>
            <div className="content">
                <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
                    corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
                    laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
                    eaque at.</p>
                <a href="#blogs" class="btn">learn more</a>
            </div>
        </div>
    </div>
    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>
    <div className="swiper-pagination"></div>

    </div>
    <section>
        <div className="newsletter">
            <form action="">
                <h3>subscribe for latest update</h3>
                <input type="email" name="" placeholder="enter your email" id="" className="box" />
                <input type="button" value="subscribe" className="box2" />
            </form>
        </div>
    </section>
    <section className="review" id="review">
        <div className="heading">
            <h2>client review</h2>
        </div>


        <div className=" swiper review-row">
            <div className="swiper-wrapper">
                <div className="swiper-slide box">
                    <div className="client-review">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis architecto
                            quasi eveniet aliquam sed?</p>
                    </div>
                    <div className="client-info">
                        <div className="img">
                            <img src={require(`../src/images/client1.jpg`)} alt=""/>
                        </div>
                        <div className="clientDetailed">
                            <h3>Hardy Devid</h3>
                            <p>UI / UX designer</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide box">
                    <div className="client-review">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis architecto
                            quasi eveniet aliquam sed?</p>
                    </div>
                    <div className="client-info">
                        <div className="img">
                            <img src={require(`../src/images/client1.jpg`)} alt=""/>
                        </div>
                        <div className="clientDetailed">
                            <h3>Hardy Devid</h3>
                            <p>UI / UX designer</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide box">
                    <div className="client-review">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis architecto
                            quasi eveniet aliquam sed?</p>
                    </div>
                    <div className="client-info">
                        <div className="img">
                            <img src="./images/client1.jpg" alt=""/>
                        </div>
                        <div className="clientDetailed">
                            <h3>Hardy Devid</h3>
                            <p>UI / UX designer</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide box">
                    <div className="client-review">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis architecto
                            quasi eveniet aliquam sed?</p>
                    </div>
                    <div className="client-info">
                        <div className="img">
                            <img src="./images/client1.jpg" alt=""/>
                        </div>
                        <div className="clientDetailed">
                            <h3>Hardy Devid</h3>
                            <p>UI / UX designer</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>

            </div>
        </div>
    </section>
    </section>
    <footer class="footer" id="contact">
        <div class="box-container">
            <div class="mainBox">
                <div class="content">
                    <a href="#"><img src="./images/logo.png" alt=""/></a>
                    <h1 class="logoName"> Sweet Cake </h1>
                </div>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus maxime quod.</p>

            </div>
            <div class="box">
                <h3>Quick link</h3>
                <a href="#"> <i class="fas fa-arrow-right"></i>Home</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>product</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>blogs</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>review</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>contact</a>

            </div>
            <div class="box">
                <h3>Extra link</h3>
                <a href="#"> <i class="fas fa-arrow-right"></i>Account info</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>order item</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>privacy policy</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>payment method</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>our  services</a>
            </div>
            <div class="box">
                <h3>Contact Info</h3>
                <a href="#"> <i class="fas fa-phone"></i>+58 41435 76403</a>
                <a href="#"> <i class="fas fa-envelope"></i>luzvalentinavaleragil@gmail.com</a>

            </div>

        </div>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
            <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="credit">
            created by <span>Luz Valentina Valera Gil </span> |all rights reserved ! 
        </div>
    </footer>
    </div>
  );
}

export default App;
