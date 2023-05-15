
 import './App.css';
 import { useGetAllPostQuery } from './services/post';
import React from 'react'

function App  ()  {

    const responsInfo = useGetAllPostQuery () 

    console.log("Response Information:",responsInfo)
    console.log("data:",responsInfo.data)
    console.log("success:",responsInfo.isSuccess)

    // if(responsInfo.isLoading) return <div>loading..</div>
    // if(responsInfo.isError) return <h1>an error occured{responsInfo.error.error}</h1>



  return (
    //get all data
    <div className='app'>
        
        {
            responsInfo?.data?.data?.results?.map((post)=>
            // <div>
            //     <h2>{post.name}</h2>
            //     <h3>{post.images}</h3>
            //     </div>
            <div className="container">
                <div className="card"  style={{width: "18rem"}}>
                <img className="card-img-top" src={post.images} alt="Card image cap"/>
            <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                   <p className="card-text">{post.description}</p>
                    <div className="main">
                    <p className="amount"> <div className="option">{post.unit_price.currency} - {post.unit_price.amount} &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <input type="checkbox" name="" id="" /></div></p> 
                    
                    </div>

                  
               

                    







               </div>
              </div>
              </div>

            )
        }
    </div>
   
  )
}

 export default App;

