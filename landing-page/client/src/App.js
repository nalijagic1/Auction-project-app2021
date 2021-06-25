import LogInBar from "./Components/LogInBar";
import Navigation from "./Components/Navigation";
import Category_list from "./Components/Category_list";
import ItemPreview from "./Components/itemPreview";
import FooterBar from "./Components/FooterBar";
import FCollection from "./Components/FCollection";
import FProducts from "./Components/FProducts";
import Offers from "./Components/Offers"
function App() {
  return(
    <div>
      <LogInBar/>
      <Navigation/>
      <div style={{display:'flex'}}>
        <Category_list/>
        <ItemPreview/>
      </div>
<FCollection/>
<FProducts/>
<Offers/>
      <footer>
        <FooterBar/>
      </footer>
</div>
  );
}

export default App;