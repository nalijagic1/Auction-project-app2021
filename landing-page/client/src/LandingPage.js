import LogInBar from "./Components/LogInBar";
import Navigation from "./Components/Navigation";
import Category_list from "./Components/Category_list";
import ItemPreview from "./Components/itemPreview";
import FooterBar from "./Components/FooterBar";
import FCollection from "./Components/FCollection";
import FProducts from "./Components/FProducts";
import Offers from "./Components/Offers"
function LandingPage() {
  return(
    <div>
      <div style={{display:'flex'}}>
        <Category_list/>
        <ItemPreview/>
      </div>
<FCollection/>
<FProducts/>
<Offers/>
</div>
  );
}

export default LandingPage;