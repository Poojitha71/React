function Student(props){
    console.log(props)
    return(
        <div> 
            <h1> Student details</h1>
            <p> name:{props.name}</p>
            <p> rollno:{props.rollno}</p>
        </div>
    )
}
export default Student