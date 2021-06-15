import './LogInBar.css';

function LogInBar() {
  return(
    <div class="nav">
      <div class = "socialMedia">
        <img src="../images/facebook.png" alt="facebook"></img>
        <img src="../images/instagram.png" alt="instagram"></img>
        <img src="../images/twitter.png" alt="twitter"></img>
        <img src="../images/google-plus.png" alt="google plus"></img>
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