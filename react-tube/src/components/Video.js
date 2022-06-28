import {  useState } from "react";
const Video = (props) => {
    // const [valoraciones, setValoraciones] = useState(35);

    // const valorar = () => {
    //     setValoraciones(valoraciones + 1);
    // }

    //estado
    const [valoraciones,setValoraciones] = useState(0); //hook
 
    const valorar = () => {
        if(valoraciones<10)
        setValoraciones( valoraciones+1);
    } 

  
    return (
        <div className="video-container">
            <div className="video-image">
            <iframe width="560" height="315" src="https://www.youtube.com/watch?v=8ANU4cdAkbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video-info">
              <h3>{props.title}</h3>
              <button onClick= {valorar}>Likes</button>
              <p>{valoraciones}</p>
              <p>Upload date: {props.dateAdded}</p>
              <h4>Channel's Title: {props.channel}</h4>
              <p>{props.description}</p>
            </div>
        </div>
    );
}
export default Video;