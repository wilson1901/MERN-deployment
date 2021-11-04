import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./ListPets.module.scss"

const ListPets = () => {
    const [petsList, setPetsList] = useState([]);
    //const [isLoading, setIsLoading] = useState(true);

    const getAllPets = async () => {
        try {
            const response = await axios.get("http://localhost:8000/pets");
            console.log(response.data.pets);
            setPetsList(response.data.pets);
          //  setIsLoading(false);
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getAllPets();

    }, []);


    
    return (
        <div>
            <div className={styles.header}><h1>Pet Shelter</h1> <Link to="/pets/new"> add a pet to the shelter </Link></div>
            
            <h2>These pets are looking for a good home</h2>

            {
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Acciones</th>
                    </tr>
                    {
                        petsList?.map((pet, index) => (
                            <tr key={pet._id}>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>Details</Link>&nbsp;
                                    <Link to={`/pets/${pet._id}/edit`}>Editar</Link>
                                </td>
                            </tr>
                        )
                        )
                    }


                </table>

            }
        </div>
    )
}

export default ListPets;