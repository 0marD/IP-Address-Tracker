
const Footer = ():JSX.Element => {
    return (
      <footer className="footer">
          <div className="footer__section">
              <p className="footer__text">Challenge by</p>
              <a href="https://www.frontendmentor.io/" target="_blank" className="footer__link"> Frontend mentor</a>
          </div>
          <div className="footer__section">
              <p className="footer__text">Coded by</p>
              <a href="https://omar-diaz.vercel.app/" target="_blank" className="footer__link"> Omar Díaz</a>
          </div>
      </footer>
    )
  }
  
  export  {Footer}