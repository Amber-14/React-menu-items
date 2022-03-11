import React, { useState } from "react";
import './App.css';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';


// const allCategories =  ["All",'Breakfast','Lunch','Shakes']
const allCategories = ['all',...new Set(items.map((item)=>item.category))]

function App() {
  
  const [menuItems,setMenuItems] = useState(items)
  const [categories,setcategories] = useState(allCategories)

 const filterItems = (categoryName)=>{
   if(categoryName === 'all'){
     setMenuItems(items)
   }else{
     const newItems = items.filter((item)=>item.category === categoryName)
     setMenuItems(newItems)
   }
 }

  return (
    <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>    
                </div>
                <Categories categories={categories} filterItems = {filterItems}/>
                <Menu items = {menuItems} />
            </section>
        </main>
  );
}

export default App;
