import React, { useState } from 'react';

export default function TextForm(props) {

  // Text Colors based on theme
  const textColors = {
    light: 'black',
    dark: 'white',
    red: 'white',
    blue: '#353030ff',
  };

  const [text, setText] = useState('');

  // UPPERCASE
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!","success");
  };

  // LOWERCASE
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase!","success");
  };

  // CLEAR
  const handleClearClick = () => {
    setText('');
    props.showAlert("TextBox Cleared!","success");
  };

  // EMAIL EXTRACT
  const handleEmailExtract = () => {
    let emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);

    if (emails) {
      setText(emails.join("\n"));
      props.showAlert("You Got an Email 😅","success");
    } else {
      props.showAlert("No Email Found 😴","warning");
    }
  };

  // MOBILE EXTRACT
  const handleMobileExtract = () => {
    let numbers = text.match(/(\+91[\s-]?)?[6-9]\d{9}/g);

    if (numbers) {
      setText(numbers.join("\n"));
      props.showAlert("You Got Some Mobile Numbers 😅","success");
    } else {
      props.showAlert("No Mobile Number Found 😴","warning");
    }
  };

  // COPY
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      props.showAlert("Copied Successfully 😅","success");
    })
  };

  // ON CHANGE
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Word count fix
  const wordCount = text.trim().length === 0 
    ? 0 
    : text.trim().split(/\s+/).length;

  return (
    <>
      <div className='container' style={{ color: textColors[props.mode] }}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#2a2a2a' : props.mode === 'red' ? '#300000' : props.mode === 'blue' ? '#385762ff' : 'white',
              color: textColors[props.mode],
              border: "1px solid #888"
            }}
            id="myBox"
            rows="8"
            placeholder="Enter your content"
          ></textarea>
        </div>

        <button className="btn btn-primary m-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary m-2" onClick={handleEmailExtract}>Extract Emails</button>
        <button className="btn btn-primary m-2" onClick={handleMobileExtract}>Extract Numbers</button>
        <button className="btn btn-primary m-2" onClick={handleCopyClick}>Copy</button>
      </div>

      <div className='container' style={{ color: textColors[props.mode] }}>
        <h2>Your Text Summary</h2>
        <p><b>{wordCount} words, {text.length} characters</b></p>
        <p><b>{0.008 * wordCount} Minutes to read</b></p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text above to preview"}</p>
      </div>
    </>
  );
}