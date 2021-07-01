import './Category_list.css'
import {useEffect,useState} from "react";
import {ApiUrl} from "../../const"

function CategoryList() {
  const [categories,setCategories] = useState()
  useEffect(() => {
    fetch("http://"+ApiUrl+"/categories")
      .then((response) => response.json())
        .then((data) => {
            console.log(data)
          setCategories(data)
      });
  }, []);
  return(
  <div class = "lista">
    <h3>CATEGORIES</h3>
    <ul class="kategorije">
    {categories && categories.map(cat => (
      <li  key={cat.id}>{cat.name}</li>
    ))}
    <li key="10">All Categorie</li>
    </ul>
  </div>
  );
}

export default CategoryList;