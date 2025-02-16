import React from 'react'
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = ({ type }) => {
    return (
        <div className='main'>
            {type === "artists" || type === undefined ? (
                <ItemList
                    title="Artistas"
                    items={8}
                    itemsArray={artistArray}
                    border="a"
                    path="/artists"
                    idPath="/artist" />
            ) : (
                <></>
            )}

            {type === "songs" || type === undefined ? (
                <ItemList
                    title="Músicas"
                    items={20}
                    itemsArray={songsArray}
                    border="b"
                    path="/songs"
                    idPath="/song" />
            ) : (
                <></>
            )}

        </div>
    );
};

export default Main;