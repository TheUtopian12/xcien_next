import React,{useState} from "react";
import style from "../../styles/ExpandCard.module.css";

export const Card = (props) => {
  const { data } = props;
  const [datos, setDatos]= useState(data)

  const onCardClick =(id)=>{
    
    const newState = [...datos]
    
    newState.map((item) => item.id === id ? item.active = 'active': item.active = ''
   
    )
    setDatos(newState)
    }
  console.log(data);
  return (
    <>
      {data.map((card) =>
       <div key={card.id}
       className={[style[`card`], style[`${card.active}`]].join(" ") }
       style={{ backgroundImage: `url(${card.url})` }}
        onClick={()=>onCardClick(card.id)}
     >
      
     </div>
      )}
     
    </>
  );
};
