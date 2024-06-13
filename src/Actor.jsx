

//Maping with props

export default function Actor({actorDetails}){

    return(

        <div>
        <h1>Actor Name:{actorDetails.name}</h1>
        <p>Actor Age:{actorDetails.age}</p>
        </div>
    )

}