import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import styles from "./EditPet.module.scss";
import * as Yup from 'yup';
import axios from "axios";
import Swal from "sweetalert2";



const EditPet = () => {
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const history = useHistory();

    const getPetById = async () => {
        console.log(`id: ${id}`);
        try {
            const response = await axios.get(`http://localhost:8000/pets/${id}`);
            setPet(response.data.pet);
            console.log("pet", pet);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log("useEffect");
        getPetById();
    }, [id])


    const SignupSchema = Yup.object().shape({
        petName: Yup.string()
            .min(3, 'Name debe tener dos caracteres como minimo')
            .max(50, 'Nombre debe tener un maximo de 50 caracteres')
            .required('Required'),
        petType: Yup.string()
            .min(3, 'Type debe tener dos caracteres como minimo')
            .required('Este campo es requerido'),
        petDescription: Yup.string()
            .min(3, 'Descripcion debe tener 4 caracteres')
            .required('Este campo es requerido'),
        Skill1: Yup.string(),
        Skill2: Yup.string(),
        Skill3: Yup.string()

    });


    const editPet = async (values) => {
        console.log(`createPet values: ${values}`);
        try {
            const response = await axios.put(`http://localhost:8000/pets/${id}`, values);
            console.log(`response: ${response.petName}`);
            Swal.fire({
                title: "Mascota editada satisfactoriamente",
                text: `Bienvenido `,
                icon: "success",
                confirmButtonText: "Cool"
            });
            history.push("/");
        } catch (err) {
            console.log(err.response.data.err.message);
            Swal.fire({
                title: "Error!",
                text: `${err.response.data.err.message}`,
                icon: "error",
                confirmButtonText: "Not Cool"
            }
            )
        }
    }


    return (
        <div>
            <h2>Pet Shelter</h2>                     <Link to="/">back to home</Link>

            <p>Edit {pet.petName}</p>

            <div className={styles.editPetContainer}>
                {

                    pet && (
                        <Formik
                            enableReinitialize={true}
                            initialValues={pet}
                            validationSchema={SignupSchema}
                            onSubmit={editPet}

                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <label htmlFor="petName">Pet Name: </label>
                                    <Field name="petName" />
                                    {errors.petName && touched.petName ? (<div className={styles.errors}>{errors.petName}</div>) : null}

                                    <label htmlFor="petType">Pet Type: </label>
                                    <Field name="petType" />
                                    {errors.petType && touched.petType ? (<div className={styles.errors}>{errors.petType}</div>) : null}

                                    <label htmlFor="petDescription">Description: </label>
                                    <Field name="petDescription" type="text" />
                                    {errors.petDescription && touched.petDescription ? <div className={styles.errors}>{errors.petDescription}</div> : null}


                                    <label htmlFor="skill1">Skill 1: </label>
                                    <Field name="skill1" type="text" />
                                    {errors.skill1 && touched.skill1 ? (<div className={styles.errors}>{errors.skill1}</div>) : null}

                                    <label htmlFor="skill2">Skill 2: </label>
                                    <Field name="skill2" type="text" />
                                    {errors.skill2 && touched.skill2 ? (<div className={styles.errors}>{errors.skill2}</div>) : null}


                                    <label htmlFor="skill3">Skill 3: </label>
                                    <Field name="skill3" type="text" />
                                    {errors.skill3 && touched.skill3 ? (<div className={styles.errors}>{errors.skill3}</div>) : null}

                                    <button type="submit">Edit Pet</button>
                                </Form>
                            )}
                        </Formik>
                    )
                }


            </div>






        </div>
    )
}
export default EditPet;