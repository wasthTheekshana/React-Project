import React from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {


  return (
    <section className="section search">
        <form className="search-form">
            <div className="form-control">
                <label>Search your favorite Cocktail</label>
                <input type="text" name="search" id="name"/>
            </div>
        </form>
    </section>
  )
}

export default SearchForm
