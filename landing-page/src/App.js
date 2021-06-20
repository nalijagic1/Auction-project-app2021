import LogInBar from "./Components/LogInBar";
import Navigation from "./Components/Navigation";
import Category_list from "./Components/Category_list"

function App() {
  return(
    <div>
      <LogInBar/>
      <Navigation/>
      <div>
        <Category_list/>
      </div>
</div>
  );
}

export default App;