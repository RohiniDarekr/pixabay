import React, { useEffect, useState } from 'react'

const Pix = () => {
    const [data,setData]=useState([]);
    const[search,setSearch]=useState("");
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=39413047-b59afbec20289c0587ebe3839&q=${search}&image_type=photo&pretty=true`)
         .then((res)=>res.json())
         .then((data)=>setData(data.hits))
          
    }
    
    )
  return (
    <div>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        {data&&data.map((d)=>{
            return(
                <section>
                    <img src={d.webformatURL} alt="" />
                </section>
            )
        })}
    </div>
  )
}

export default Pix