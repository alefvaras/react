
import s from '../styles/Card.module.css'

const Card=({logo,nombre,descripcion,img,color})=>{
return (

    <div className="card">
        <div className= {`circle ${color}` }>
            <img src={logo} className="logo"/>
        </div>
        <div className="content">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <a href="#">Explore</a>
            {/* <button className="custom_btm">Explore</button> */}

            <button className={s.custom_btn}>Explore</button>
        </div>
        <img src={img} className="product_img"/>
    </div>

);

}

export default Card;