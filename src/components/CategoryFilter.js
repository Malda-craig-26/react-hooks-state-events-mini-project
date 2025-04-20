import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  console.log(categories)
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>(
        <button 
        key={category}
        className={category === selectedCategory ? "selected" : ""}
        onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
     
    </div>
  );
}

export default CategoryFilter;
