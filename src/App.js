import { Link, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between">

      <div className="logo">
        <h1><a href="index.html"><span>Crystal</span>Consult</a></h1>
         {/* Uncomment below if you prefer to use an image logo  */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a> */}
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link  to="/">Home</Link></li>
          <li><Link  to="/services">Services</Link></li>
          <li><Link  to="/products">Products</Link></li>
          <li><Link  to="/about">About</Link></li>
          {/* <li><Link  to="#portfolio">Portfolio</Link></li> */}
           {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
          {/* <li><a href="blog.html">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  <Routes>
    <Route path="/" >
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>



   {/* ======= Footer ======= */}
  <footer>
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-content">
              <div className="footer-head">
                <div className="footer-logo">
                  <h2><span>Crystal</span>Consult</h2>
                </div>

                <p>“An efficient Telecommunications network is the foundation upon which an information society is built”
<br /><strong>We make sure that it never happens.</strong></p>
                <div className="footer-icons">
                  <ul>
                    <li>
                      <a href="#"><i className="bi bi-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="bi bi-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
           {/* end single footer  */}
          <div className="col-md-4">
            <div className="footer-content">
              <div className="footer-head">
                <h4>information</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                <div className="footer-contacts">
                  <p><span>Tel:</span> +123 456 789</p>
                  <p><span>Email:</span> contact@example.com</p>
                  <p><span>Working Hours:</span> 9am-5pm</p>
                </div>
              </div>
            </div>
          </div>
           {/* end single footer */}
          <div className="col-md-4">
            <div className="footer-content">
              <div className="footer-head">
                <h4>Projects</h4>
                <div className="flicker-img">
                  <a href="#"><img src="assets/img/portfolio/1.jpg" alt="" /></a>
                  <a href="#"><img src="assets/img/portfolio/2.jpg" alt="" /></a>
                  <a href="#"><img src="assets/img/portfolio/3.jpg" alt="" /></a>
                  <a href="#"><img src="assets/img/portfolio/4.jpg" alt="" /></a>
                  <a href="#"><img src="assets/img/portfolio/5.jpg" alt="" /></a>
                  <a href="#"><img src="assets/img/portfolio/6.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-area-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="copyright text-center">
              <p>
                &copy; Copyright <strong>Crystal Consult</strong>. All Rights Reserved
              </p>
            </div>
            <div className="credits">
              
              {/* All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
             */}
              Designed by <a href="http://jonestah.com">Jones & estah Systems</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
   {/* End  Footer  */}
    </div>
  );
}

export default App;
