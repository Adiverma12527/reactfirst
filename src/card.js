
export default function Card(props){
    return(
      <div 
      ><div >
        <img src={props.image} 
        style={props.neww
        } alt="nothing"/>
        <h4>
        {props.heading}</h4>
        <h1>{props.heading2}</h1>
        <p >{props.description}
        </p>
        <button onClick={props.onclickfunction} style={props.buttoncss1} >see more</button>
        </div>
<div>


</div>

        </div>
        
    )
}