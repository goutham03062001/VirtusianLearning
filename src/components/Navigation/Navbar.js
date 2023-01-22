import React from 'react'
import styles from "./navbar.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.main_wrapper}>
        <div className={styles.left_nav}>
            <div className={styles.left_nav_logo}>
            <h3 style={{fontStyle:'italic '}}>FlipKart</h3>
            <small style={{fontStyle:'italic '}}>Explore Plus</small>
            </div>
           
           <div className={styles.searchBar}>
           <input type="search" placeholder=" search for products, brands and more"className={styles.inputStyle}/>
            <SearchIcon className={styles.searchIcon}/>
           </div>
           
        </div>
        <div className={styles.right_nav}>
            <button className={styles.login_btn}>Login</button>
            <p>Become a seller</p>
            <p>
              <Link to="/login" className={styles.link}>Login</Link>
            </p>
            <div style={{display:"flex", flexDirection:"row" , justifyContent:"space-between",alignItems:"center",gap:"10px"}}>
            <p>Cart</p>
            <span> <ShoppingCartIcon style={{fontSize:"18px",marginTop:'5px'}}/> </span> 
            </div>
            
        </div>
    </div>
  )
}
export default Navbar