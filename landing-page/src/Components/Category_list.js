import './Category_list.css'
function CategoryList() {
    const categories = [{name:"Fashion"},{name:"Accesories"}]
  return(
  <div class = "lista">
    <h2>Categories</h2>
    <ul class="kategorije">
    {categories.map(cat => (
      <li>{cat.name}</li>
    ))}
    </ul>
  </div>
  );
}

export default CategoryList;