import reac,{useState} from "react" 


export default function TextForm(props) {

    const HandleUpClick=()=>
        {
            // console.log("Upper Case is clicked"+Text);
            let newtext=Text.toUpperCase();
            setText(newtext);
        }


        const Handleonchange=(event)=>
            {
                // console.log("Handle on changes");
                setText(event.target.value); 
            }

    const[Text,setText]=useState('Enter Text Here2');

    
  return (
    <>
    <h1>{props.heading}</h1> 
<div ClassName="mb-3"> 
  <textarea ClassNameame="form-control"  value={Text}   id="txtMybox"  onChange={Handleonchange} placeholder={props.placeholder} rows="8"/>

  <button type="submit" className="btn btn-primary mb-3" onClick={HandleUpClick}>Change Now</button>
</div>
</> 
  )
}
