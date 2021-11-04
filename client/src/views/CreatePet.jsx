import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import styles from "./CreatePet.module.scss";
import * as Yup from 'yup';
import axios from "axios";
import Swal from "sweetalert2";



const CreatePet = () => {

    const history = useHistory();


    const SignupSchema = Yup.object().shape({
        petName: Yup.string()
            .min(3, 'Name debe tener 3 caracteres como minimo')
            .max(50, 'Nombre debe tener un maximo de 50 caracteres')
            .required('Required'),
        petType: Yup.string()
            .min(3, 'Type debe tener 3 caracteres como minimo')
            .required('Este campo es requerido'),
        petDescription: Yup.string()
            .min(3, 'Descripcion debe tener 3 caracteres')
            .required('Este campo es requerido'),
        Skill1: Yup.string(),
        Skill2: Yup.string(),
        Skill3: Yup.string()

    });


    const createPet = async (values) => {
        console.log(`createPet values: ${values}`);
        try {
            const response = await axios.post("http://localhost:8000/pets/new", values);
            console.log(`response: ${response.petName}`);
            Swal.fire({
                title: "Mascota registrada satisfactoriamente",
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
        <div >
            <Link className={styles.linkNav} to="/">back to home</Link>
            <div className={styles.header}>
                <h1>Pet Shelter</h1>
                <h2>Know a pet needing a home?</h2>
            </div>

            <div className={styles.createPetContainer}>
                <Formik
                    initialValues={{
                        petName: '',
                        petType: '',
                        petDescription: '',
                        skill1: '',
                        skill2: "",
                        skill3: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={createPet}

                >
                    {({ errors, touched }) => (
                        <Form className={styles.formAdd}>
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

                            <button className={styles.addButton} type="submit">Add Pet</button>
                        </Form>
                    )}
                </Formik>
            </div>




        </div>
    )
}
export default CreatePet;