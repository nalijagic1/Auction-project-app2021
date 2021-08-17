import './LogInBar.css';
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import google from "../../images/google-plus.png"
function LogInBar() {
  return(
    <div class="nav">
      <div class = "socialMedia">
        <img src={facebook} alt="facebook"></img>
        <img src={instagram} alt="instagram"></img>
        <img src={twitter} alt="twitter"></img>
        <img src={google} alt="google plus"></img>
      </div>
      <div class = "logIn">
        <a href="#logIn">Log in</a>
        <p>or</p>
        <a href="#create">Create an Account</a>
      </div>
</div>
  );
}

export default LogInBar;