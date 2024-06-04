import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({searchTerm  , setSearchTerm}) => {
  return (
    <div className={styles.searchBar}>
        <IoSearchOutline className={styles.searchIcon} />
        <input type="text"  placeholder="Search..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
    </div>
  )
}

export default SearchBar