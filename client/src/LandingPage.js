
import Category_list from "./Components/CategoryList/Category_list";
import ItemPreview from "./Components/ItemPreview/itemPreview";
import FCollection from "./Components/FCollection/FCollection";
import FProducts from "./Components/FProducts/FProducts";
import Offers from "./Components/Offers/Offers"
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