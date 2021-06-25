import "./itemPrewiew.css"
import google from "../images/google-plus.png"
function ItemPreview() {
  return(
    <div class="item">
      <div class ="detail">
        <h1 class ="name">name</h1>
        <h2>Start from</h2>
        <h3>description</h3>
        <button type="button" id="bidButton">BID NOW   &gt;</button>
        </div>
        <img src={google} alt="google plus"></img>
</div>
  );
}

export default ItemPreview;