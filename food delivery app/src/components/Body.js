import Card1  from "./Card1";
import { swiggyData } from "./swiggyData";
import React,{ useState } from "react";
import { fetchmovies } from "./Api";
const restaurant=swiggyData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
const BodyComponent=()=>{ 
    const[filteredres,setfilteredres]=useState(restaurant);
    const searchbox=()=>{
        const searchinput= document.getElementById("main-search").value.toLowerCase();
        const filteredlist=restaurant.filter((res)=>
            res.info.name.toLowerCase().includes(searchinput)
        )
     setfilteredres(filteredlist);
    }
    return(
          
        <div className="bodypart">
            <div className="Search">
                <input type="text" id="main-search" ></input>
                <button id="searchbtn" onClick={searchbox}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="bodyinfo">
            {filteredres.map((res)=>(
                      <Card1 c ={res}/>
            

            )
            )}
            </div>
        </div>
        
    );

};
export default BodyComponent;