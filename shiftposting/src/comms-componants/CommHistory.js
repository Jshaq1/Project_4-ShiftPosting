export default function CommHistory(props){
    if(props.data !== undefined){
        const staff = props.data.staff
        console.log(props)
        return(
            <div>
                <h1>{staff}</h1>
            </div>
        )
    }
    
}