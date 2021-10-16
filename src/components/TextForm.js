import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(" Copied to Clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode===`dark`?`white`:`#042743`}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode===`dark`?`#13466e`:`white`, color:props.mode===`dark`?`white`:`#13466e`}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
            <button disabled={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#042743`}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
