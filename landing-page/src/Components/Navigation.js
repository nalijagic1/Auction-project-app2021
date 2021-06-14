
import './Navigation.css';

function Navigation() {
  return(
    <div class="topnav">
      <div class = "logo">
        <h3>Auction</h3>
        </div>
      <div class = "menu">
        <input type="text" placeholder="Try enter:Schoes"></input>
        <i class="fa fa-search"></i>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#profile">My Profile</a>
      </div>
</div>
  );
}

export default Navigation;
