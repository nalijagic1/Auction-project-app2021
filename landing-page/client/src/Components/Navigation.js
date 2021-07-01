import './Navigation.css';
import cekic from '../images/hammer.png'
function Navigation() {
  return(
    <div class="topnav">
      <div class = "logo">
      <img src={cekic} alt="logo"></img>
        <h3>AUCTION</h3>
        </div>
      <div class = "menu">
        <input type="text" placeholder="Try enter:Schoes"></input>
        <i class="fa fa-search"></i>
        <a href="#home">HOME</a>
        <a href="#shop">SHOP</a>
        <a href="#profile">MY PROFILE</a>
      </div>
</div>
  );
}

export default Navigation;
