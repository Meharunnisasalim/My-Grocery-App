import React from 'react'
import { useSearch } from '../../context/search';
import { useData } from '../../context/data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const SearchInput = () => {
    const [values,setValues]=useSearch();
    const navigate=useNavigate();
    const {data, loading, error}=useData();

   const handleSubmit=async(e)=>{
    e.preventDefault()
try {
    const {data}=await axios.get(`${API_BASE_URL}/api/v1/product/search/${values.keyword}`)
    setValues({...values,results:data});
    navigate('/search');
} catch (error) {
    console.log(error)
}
   } 
  return (
    <div>
     <form className="d-flex" role="search" onSubmit={handleSubmit}>
  <input className="form-control me-2" 
  type="search" 
  placeholder="Search"
   aria-label="Search"
  value={values.keyword}
  onChange={(e)=>setValues({...values,keyword:e.target.value})} />

  <button className="btn btn-outline-success" 
  type="submit">Search</button>
</form>
{loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div>
                    <h2>Data from Context</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
    </div>
  )
}

export default SearchInput
