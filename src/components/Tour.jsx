const Tour = ({id, image, info, name, price}) => {
    return (
        <div>
            <p>{name}</p>
            <img src={image} alt={name} />
            <p>{info}</p>
            <p>{price}</p>
        </div>
        
    )
};

export default Tour;