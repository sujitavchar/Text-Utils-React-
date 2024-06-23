import React, {useState} from "react";

export default function Textform(props) {

    const handleOnUpClick = ()=>{
        console.log("Clicked");
        setText(text.toUpperCase())
    }
    const handleOnLowClick = ()=>{
        console.log("Clicked");
        setText(text.toLowerCase())
    }

    const handleReverse = ()=>{
        let res= text.split(" ").reverse().join(); //devides text into array of strings, reverses the array and join it. we get reversed string
        
        res=res.replace(/,/g," ");
        setText(res)
    }

    const handleOnChange = (event)=>{
        console.log("Changed");
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here');
  return (
    <div>
        <h1  style={{color: props.mode==='dark'? 'white':'black'} }>{props.heading}</h1>
      
        <div className="mb-3"> 
          <textarea
            value={text}
            type="textarea"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            rows="8"
            onChange={handleOnChange}
            style = {{backgroundColor: props.mode==='dark'? 'gray':'white',
                      color: props.mode==='dark'? 'white':'black'
            }}
          />
          <button className="btn btn-class mx-2 my-2 btn btn-primary" onClick={handleOnUpClick}>To Uppercase</button>
          <button className="btn btn-class mx-2 my-2 btn btn-primary" onClick={handleOnLowClick}>To Lowercase</button>
          <button className="btn btn-class mx-2 my-2 btn btn-primary" onClick={handleReverse}>Reverse</button>

        </div>
        <div className="container">
            <p style={{color: props.mode==='dark'? 'white':'black'}} >{text.split(" ").length} words and {text.length} characters</p>
            <h2 style={{color: props.mode==='dark'? 'white':'black'}}>Preview</h2>
            <p style={{color: props.mode==='dark'? 'white':'black'}} >{text}</p>
        </div>
      
    </div>
  );
}
