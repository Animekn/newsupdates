import React,{useState} from "react";
import data from "../data.js";

const Demo = () => {
  
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <img src="/logo.png" alt="" style={{ width: "39px", height: "36px" }} />
        <h3
          style={{
            padding: "10px",
            fontWeight: "10px",
            fontSize: "25px",
            textAlign: "start",
          }}
        >
          How many actions do you want to do daily?
        </h3>
      </div>
   
      <div style={{display:'flex',border:'1px solid grey',padding:'10px' ,flexWrap:'wrap' }}>
         {/* 1 */}
      <div>
      Basic Actions
      <div
        style={{
          backgroundColor: "rgba(42, 131, 236, 0.0862745098)",
          width: "320px",
          marginLeft: "10px",
          padding: "20px",
          borderRadius: "15px",
          height: "315px",
          
        }}
      >
        <img
          src="/danger.png"
          alt=""
          style={{
            height: "70px",
            width: "70px",
            border: "1px solid grey",
            padding: "5px",
            borderRadius: "100%",
            cursor: "pointer",

          }}
        />
        <p style={{ fontSize: "14px" }}>
          Safe mode is off for your account.Linkedin may temporarily ban your
          account for too much activity
        </p>

        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            Configured profile visits
          </p>
          <img
            src="/sclamation.svg"
            style={{ width: "17px", marginLeft: "10px", marginTop: "6px" }}
            alt=""
          />
        </div>
        <div
          style={{ fontWeight: "bold", fontSize: "40px", marginBottom: "20px" }}
        >
          163
        </div>
      </div>
</div>


      {/* 2 */}

{data.map((item)=>{
   return(
      <div
        style={{
          backgroundColor: "white",
          width: "320px",
          marginLeft: "10px",
          padding: "20px",
          borderRadius: "15px",
          height: "315px",
          marginTop: "25px",
        }}
      >
        <img
          src={item.icon}
          alt=""
          style={{
            height: "40px",
            width: "40px",
            border: "1px solid grey",
            padding: "8px",
            borderRadius: "100%",
            cursor: "pointer",
          }}
        />
           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
           {item.heading}
          </p>
        <p style={{ fontSize: "14px" }}>
        {item.description}
        </p>        
        <div>
      <label htmlFor="rangeInput" style={{position :'relative' ,top:'50px',marginLeft:'150px',fontWeight:'bold'}}>{item.value}</label>
      <input
        type="range"
        id="rangeInput"
        defaultValue={item.value}
        min="0"
        style={{width:'100%',position:'relative'}}
        max="100"
      />
    </div>
      </div>   
   )
})}

      </div>
    </div>
  );
};
  


export default Demo;
