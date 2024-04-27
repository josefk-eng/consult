import React from 'react'

export default function Home() {
  return (
    <div>
           {/* ======= hero Section ======= */}
  <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol class="carousel-indicators">
            <li class="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">

          <div className="carousel-item active" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/edify-de3fa.appspot.com/o/crystal%2Fantennas.jpg?alt=media&token=c68de3f8-bc9b-47ea-97dd-aa3db775043b')`}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">The Best Business Information </h2>
                <p className="animate__animated animate__fadeInUp">We're In The Business Of Helping You Start Your Business</p>
                <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

          <div className="carousel-item" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/edify-de3fa.appspot.com/o/crystal%2Fpower%20cables.jpg?alt=media&token=984f00c8-9994-4891-a3c3-6de7b0d1dc2c')`}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">At vero eos et accusamus</h2>
                <p className="animate__animated animate__fadeInUp">Helping Business Security & Peace of Mind for Your Family</p>
                <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

          <div className="carousel-item" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/edify-de3fa.appspot.com/o/crystal%2Fgenerator.jpg?alt=media&token=b17fbc81-dbeb-4653-90b9-471137fd2cbb')`}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">Temporibus autem quibusdam</h2>
                <p className="animate__animated animate__fadeInUp">Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div>
  </section>
   {/* End Hero Section */}
    </div>
  )
}
