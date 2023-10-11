import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  const hUpC = () => {
    let uCase = text.toUpperCase();
    settext(uCase);
    props.showAlert("Converted to UPPERCASE!!","success" )
  };
  const hLpC = () => {
    let lCase = text.toLowerCase(); 
    settext(lCase);
    props.showAlert("Converted to lowercase!!","success" )
  };
  const hCc = () => {
    settext("");
    props.showAlert("Cleared!!","danger" )
  };
  
  const hOnC = (event)=>{
      settext(event.target.value);
    };
    
    // const [myStyle, setmyStyle]= useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    
    // const hMc = () => {
    //     if(myStyle.color === 'white'){
    //      setmyStyle( {
    //         color:'black',
    //         backgroundColor: 'white',
    //     })
    //     }
    //     if(myStyle.color === 'black'){
    //      setmyStyle( {
    //         color:'white',
    //         backgroundColor: 'black',
    //     })
    //     }
    // };

  return (
    <>
      <div className={`container my-4  bg-${props.mode}`}>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
           <h1>{props.head}</h1>
          </label>
          <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'} bg-${props.mode} `} value={text} onChange={hOnC} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-secondary" onClick={hUpC}>
          Convert to Upper case
        </button>
        <button className="btn btn-secondary mx-2 my-1" onClick={hLpC}>
          Convert to Lower  case
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={hCc}>
          Clear
        </button>
        {/* <button className="btn btn-dark mx-2" onClick={hMc}> {btnText} </button> */}

      </div>
      <h1>Text Summary Here</h1>
      <div className="input-group my-2 px-2 w-50">
        <span className={`input-group-text text-${props.mode === 'light'?'dark':'light'} bg-${props.mode}`}>Words</span>
        <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'} bg-${props.mode}`} aria-label="With textarea" value={text.split(/\s+/).filter((element)=>{return element.length!=0}).length} readOnly  ></textarea>
      </div>
        <div className="input-group my-2 px-2 w-50">
        <span className={`input-group-text text-${props.mode === 'light'?'dark':'light'} bg-${props.mode}`}>Time Required to read</span>
        <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'} bg-${props.mode}`} aria-label="With textarea" value={0.25 * text.split(/\s+/).filter((element)=>{return element.length!=0}).length + " seconds"} readOnly ></textarea>
        </div>
      <div className="input-group px-2 w-50">
        <span className={`input-group-text text-${props.mode === 'light'?'dark':'light'} bg-${props.mode}`}>Charecters</span>
        <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'} bg-${props.mode}`} aria-label="With textarea" value={text.length} readOnly ></textarea>
      </div>
    </>
  );
}
