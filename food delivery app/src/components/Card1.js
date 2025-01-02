import {images} from "./swiggyData";
const Card1=(props)=>{
    return(
      
        <div className="cardInfo">
              <img src={images+props.c.info.cloudinaryImageId}/> 
             <h3>{props.c.info.name}</h3>
             <h3>{props.c.info.avgRating}</h3>
             <h3>{props.c.info.costForTwo}</h3>
          <h3>{props.c.info.cuisines.join(", ")}</h3>
        </div>
        
    );
};
export default Card1;