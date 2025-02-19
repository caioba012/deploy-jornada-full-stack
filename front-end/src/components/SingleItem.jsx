import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SingleItemArtists = ({ _id, name, image, banner, artist, border, idPath }) => {
    const classeDoBorderRadius = border === "a" ? 'borda-50' : 'borda-5';
    
    return (
        <Link to={`${idPath}/${_id}`} className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img
                        className={`single-item__div-image ${classeDoBorderRadius}`}
                        src={image}
                        img={`Imagem do Artista ${name}`}
                    />
                </div>
                <FontAwesomeIcon
                    className="single-item__icon"
                    icon={faCirclePlay} />
            </div>
            <div className="single-item__texts">
                <div className="single-item__2lines">
                    <p className="single-item__title">{name}</p>
                </div>
                <p className="single-item__type">{artist ?? "Artista"}</p>
            </div>
        </Link>
    )
};

export default SingleItemArtists;