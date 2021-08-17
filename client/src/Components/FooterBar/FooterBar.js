import './FooterBar.css'
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import google from "../../images/google-plus.png"
function FooterBar() {
  return(
  <div class ="footer">
      <div class="auction">
          <h3>AUCTION</h3>
          <a>About us</a>
          <br/>
          <a>Terms and Conditions</a>
          <br/>
          <a>Privacy and Polacy</a>
      </div>
      <div class="touch">
          <h3>GET IN TOUCH</h3>
          <a>Call us at +123 797-567-2535</a>
          <br/>
          <a>support@auction.com</a>
          <br/>
          <div class = "socialMedia">
            <img src={facebook} alt="facebook"></img>
            <img src={instagram} alt="instagram"></img>
            <img src={twitter} alt="twitter"></img>
            <img src={google} alt="google plus"></img>
          </div>
      </div>
      <div class ="newsletter">
          <h3>NEWSLETTER</h3>
          <a>Enter your email address and get notified <br/> about new products. We hate spam!</a>
          <div class ="emailEnter">
            <input type="text" placeholder="Your email address"></input>
            <button type="button">Go   &gt;</button>
          </div>
      </div>
  </div>
  );
}

export default FooterBar;