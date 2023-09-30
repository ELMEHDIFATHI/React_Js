export default function TextField(props){
    return(
        <>
        <label>{props.inputlabel}</label>
        <input name={props.inputname} type="text" />
        
        <div>{props.children}</div>
        </>
       

    )
    
}