import React, { useState } from 'react';
import{ Redirect} from "react-router-dom";
import './Home.css'
const Home =()=>{

    const [isAuth ,setIsAuth] = useState(true);

if(!isAuth){

    return <Redirect to ="/Register"/>

}

        return (
            <div>
      
                <div className="header">
                Tuesday, Mar 23 , 2021
                <hr></hr>
                <div className="footer">
                    <button type="submit" class="btn" onClick={()=>setIsAuth(false)}>
                  <span> GET STARTED</span>  
                    </button>
                </div>
              
  </div>
       </div>
        )
    }


export default Home;
