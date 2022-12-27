import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PlayerForm from '../components/PlayerForm'
import axios from 'axios';

const Create = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/player', player)
            .then(res => navigate("/"))
            .catch(err=>{
              const errorResponse = err.response.data.errors;
              const errorArr = [];
              for (const key of Object.keys(errorResponse)) {
                  errorArr.push(errorResponse[key].message)
              }
              setErrors(errorArr);
          })
    }

  return (
    <div>
        <PlayerForm onSubmitProp={createPlayer} initialName=" " initialPosition=" " errors={errors}/>
    </div>
  )
}

export default Create


