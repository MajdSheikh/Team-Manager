import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const PlayerForm = (props) => {
    // const [name, setName] = useState(props.initialName);
    const { initialName, initialPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);
    // const [status, setStatus] = useState(["Undecided", "Undecided", "Undecided"]);


    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, position});
        setName("");
        setPosition("");
    }

    return (
        
        <div>
        <h3><Link to={"/players/list"}>List</Link> | <Link to={"/players/create"}>Add Player</Link></h3>
        <h3>Add Player</h3>
        <form onSubmit={onSubmitHandler}>
        {props.errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
            <div>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label>Position</label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </div>
            <input type="submit" value="Add"/>
        </form>
        </div>
    )
}
export default PlayerForm


