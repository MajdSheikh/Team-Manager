import DeleteButton from './DeleteButton'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import {
    Routes,
    Route,
    Link,
} from "react-router-dom";


const PlayerList = (props) => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res =>{ 
                setPlayers(res.data.players)
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])
    
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId));
    }


    return (
        <div>
            <h3><Link to={"/players/list"}>List</Link> | <Link to={"/players/create"}>Add Player</Link></h3>
            <table style={{margin:"0 auto", border:"1px solid black"}}>
            <thead>
                <th>Team Name</th>
                <th>Preferred position</th>
                <th >Actions</th>
            </thead>
            {players.map((player, i) => {
                    return <tr key={i}>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>
                            {/* <button type="submit"><Link to={"/author/" + author._id + "/edit"}>Edit</Link></button> */}
                            <DeleteButton playerId={player._id} successCallback={ () => removeFromDom(player._id) }/>
                        </td>
                    </tr>
                })}
        </table>
        </div>
    )
}

export default PlayerList;

