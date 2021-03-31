
import {data} from "./kariyerinit"

export default function Kariyer(props) {
    return(
        <>
        {data.map(kar=>(
            kar.name===props.kariyer?
            (
            <>
                <div class="row" style={{"paddingTop":"50px"}}>
                    <div class="col-md-4"/>
                    <div class="col-md-4 headCard">{kar.baslik}</div>
                    <div class="col-md-4"/>
                </div>
            {kar.roadmap.map(step=>(
                <div class="row" style={{"paddingTop":"50px"}}>
                    <div class="col-md-5"/>
                    <div class="col-md-2 mycard">{step}</div>
                    <div class="col-md-5"/>
                </div>
            ))}
            </>
            ):(<></>)
        ))}
        
        </>
    )
}