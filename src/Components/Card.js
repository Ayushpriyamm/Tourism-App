import { useState } from "react";




function Card ({image, price, name, info, id, removeTour}){

   
    

    const[readMore,setReadMore]=useState(false);

    const description=readMore?info:` ${info.substring(0, 200)}....`;

    function readMoreHandler(){
        setReadMore(!readMore)
    }

    return(
        <div className="card">

             <img src={image} className="image" alt="img"></img>

            <div className="tourInfo">
               
                <div className="tourDetails">
                    <h4 className="tourPrice">₹{price}</h4>
                    <h4 className="tourName">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="readMore" onClick={readMoreHandler}>
                        {readMore? ` Show Less`:`Read More`}
                    </span>
                </div>

            </div>

            <button className="btnRed" onClick={()=>removeTour(id)}>
                Not Interested
            </button>

        </div>
    )

}

export default Card;