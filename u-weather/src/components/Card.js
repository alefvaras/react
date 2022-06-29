// const Card = (props) => {
//   const {name,min,max,img}=props;
//   return (
//     <div>
//     <h4>{name}</h4>

//     <p>{min}</p>
//     <p>{max}</p>
//     <img src = {`http://openweathermap.org/img/wn/${img}@2x.png`} alt="temperatura"></img>
 
//     </div>
//   )
// };

// export default Card;
const Card = ({name,min,max,img,onClose}) => {

  return (
    <div>
 <button onClick={onClose}>x</button>
    <h4>{name}</h4>
    <p>Min</p>
    <p>{min}</p>
    <p>Max</p>
    <p>{max}</p>
    <img src = {`http://openweathermap.org/img/wn/${img}@2x.png`} alt="temperatura"></img>
 
    </div>
  )
};

export default Card;
