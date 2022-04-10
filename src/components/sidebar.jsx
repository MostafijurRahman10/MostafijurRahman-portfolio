import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Mostafijur Rahman</a></h1>
              <span className="email"><i className="icon-mail"></i>mostafijur.rahman10@northsouth.edu</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/mostafijurrahmanbipulofficial" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
               <li><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2FMostafijur999%3Ft%3DCQQwR2Omd8Tg98t6Hq7Nyg%26s%3D09%26fbclid%3DIwAR11jGepxwyF4qd43HzNXGkSStyZ-xZV9Y_r1sAtoRuq1jXiL-MYPT1bN7g&h=AT3AfRKHx83e-FN8skgUq0lg4l0H64ntyhywYztiaEOSEhmoMyO8Jabkkd7ju6CvUK1NPPUd_Sx9iEuvf9TsrMJcJ5CSKl330nCOXEWVMo9JBXlKHuqCDRutTO2heG5G9V5b8w" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/bipul_rahman/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href=" linkedIn/linkedin.com/in/mostafjur-rahman7/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="github/https://github.com/MostafjurRahman10" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>

              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
              You can contact with me through email or social media.
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
