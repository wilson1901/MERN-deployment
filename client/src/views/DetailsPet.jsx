import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./DetailsPet.module.scss"


const DetailsPet = () => {
    const { id } = useParams();
    const [pet, setPet] = useState({});

    const getPetById = async () => {
        console.log(`id: ${id}`)
        try {
            const response = await axios.get(`http://localhost:8000/pets/${id}`);
            console.log(`DetailsPet -  ${response.data}`);
            setPet(response.data.pet);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPetById();
    }, [id])



    const deletePet = async (id) => {
        console.log(id);
        try {
            const response = await axios.delete(`http://localhost:8000/pets/${id}`);
            console.log(response);
            Swal.fire({
                title: "Mascota Eliminado title",
                text: "Mascota eliminado text",
                icon: "success"

            });

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <div className={styles.encabezado}>
                <div>
                    <h2>Pet Shelter</h2>
                    <p>Details about: {pet.petName} </p>
                </div>

                <div>
                    <Link to="/">back to home</Link>
                    <button className={styles.detailsButton} onClick={() => deletePet(pet._id)}>Adopt {pet.petName}</button>
                </div>

            </div>

            <div className={styles.detailPetContainer}>
                <p>Pet Type:  {pet.petType} </p>
                <p>Description:  {pet.petDescription} </p>
                <div className={styles.skills}>
                    <p>Skills: </p>
                    <div>
                        <p>{pet.skill1}</p>
                        <p>{pet.skill2}</p>
                        <p>{pet.skill3}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default DetailsPet;