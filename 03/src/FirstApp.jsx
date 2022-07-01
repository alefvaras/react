
const newMessage={
    message:'hola',
    name:'antonio'
};


const getMessage=()=>'hola yoda';
export const Name=(props)=>{

    
    return(
        <>
    <div>{JSON.stringify(newMessage)}</div>
    <p>subtitulo</p>
    <p>{getMessage()}</p>
    </>
    
    )

}