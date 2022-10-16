import React,{useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    // text ="new text"; wrong way to change the state
    // setText ="new text"; correct way to change the state

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text); hey console sathi asta
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!!","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text); hey console sathi asta
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!!","success");
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text); hey console sathi asta
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!!","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change"); hey console sathi asta
        setText(event.target.value);
    }
    const handleCopy = () => {
     
      navigator.clipboard.writeText(text);
      props.showAlert("copy to keyboard!!","success");

    }
    const handleExtraSpaces = () => {
      let newText = text.split(/ [ ]+/);
      setText(newText.join(" "));
      props.showAlert("extra spaces removed!!","success");
      

    }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading} </h1>
       <div className="mb-3">
  {/* <label for="myBox" className="form-label"></label> */}
      <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: 
      props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} 
  id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and { text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    
    </>
    
    
  );
}
