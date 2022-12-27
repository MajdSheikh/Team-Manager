import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;

    const deletePlayer = e => {
        const confirm = window.confirm("Do you want to delete "+ playerId.name + "?" );
        if (confirm) {
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(res=> successCallback())
            .catch(err => console.error(err));
            
    }
}
    
    return (
        <button onClick={deletePlayer}>
            Delete
        </button>
    )
}




