import React , {useState} from 'react';

export default function TextForm(props) {
    /* Initializing the text area using useState */
    const [text, setText] = useState('');


    /** Function to convert the text in the text area to lowercase */
    const handleLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    /**Function to convert the text in the text area to uppercase */
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    /**Function to remove the extra spaces in between the text so as to make the text more readable */
    const handleRemoveSpaceClick =() => {
        let newText = text.split(/[ ]+/);
        console.log('.......'+newText);
        setText(newText.join(' '));
        console.log(text);
    }

    /**Function to copy the entire text from the text area into clipboard  */
    const handleCopyClick = () =>{
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    /**Function to clear the textarea */
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
    }

    /**Fuction to read out the text that is currently present in the textarea */
    const handleSpeakClick = () => {
        if(text){
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);}
    }

    /**Function to change the color in the text area randomly. This is fun functionality specific to a page */
    const handleColorClick = () => {
        const colors = ['sandybrown', 'mediumaquamarine', 'coral','indianred','dodgerblue','blueviolet','seagreen']
        let randomcolor = Math.random()*10 ;
        let color = (Math.ceil(randomcolor))%7;
        document.querySelector('#exampleFormControlTextarea1').style.background = 'rgb(33,37,41, 10%)';
        document.querySelector('#exampleFormControlTextarea1').style.color = colors[color];    
    }

    /**Function to record any changes in the text area and use these changes to update the text variable 
     defined in the UseState  */
    const handleOnChange = (event) => {
        setText(event.target.value);
        /*console.log(text); */
    }
    
    return (
        <>
            <div className="container">
                <h1 className="heading">{props.heading} </h1>
                <p className="text-muted">Hi there, Welcome to AnyText Utilities. My web application helps you to do some mundane tasks
                    efficiently. You can convert your text to different cases like(upper case, lower case).You can
                    process the text by removing unwanted spaces or copying the text to the clipboard. Also theres 
                    some fun aspects where you can listen to the text that you have entered in the textbox and change
                    the text color on the page. I hope this helps!!!
                    </p>
                
                <div className="mb-3">
                    <textarea value={text} onChange ={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-2 my-3" onClick={handleLowerClick}>To Lowercase</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleUpperClick}>To Uppercase</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleRemoveSpaceClick}> Remove extra spaces</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleCopyClick}>Copy the text</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleClearClick}>Clear Text Area</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleSpeakClick}>Read the text</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleColorClick}>Change text color</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary:</h1>
                <p>{(text ==='') ? 0 : text.split(' ').length } words and {text.length} characters</p>
                <p>Total read time will be { (text.length>0?(text.split(' ').length)/125 : 0)} minutes</p>
                <h2>Preview:</h2>
                <p>{text.length>0?text: 'Enter some  text above to check the preview . . .'}</p>
            </div>
        </>
    )
}
