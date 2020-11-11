import React from 'react'

const Search = (props) =>{

    let handleChange = (event) => {
        // desestructuramos el name y el value de event.target
        let { value } = event.target
        props.foodToColect(value)
    }

    return(
        <>
            <label htmlFor="search">Search food</label>
            <input type="text" name="name" onChange={(e) =>handleChange(e)}></input>
        </>
    )

}

export default Search
