import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Store</h1>
      <p className='explore-menu-text'>Explore our extensive glossary of grocery essentials, carefully curated to cater to your every need and culinary desire. From fresh produce to pantry staples, our mission is to provide a diverse selection of high-quality products to elevate your shopping experience and meet all your household needs, one aisle at a time.</p>
      <h1>Categories</h1>

      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
