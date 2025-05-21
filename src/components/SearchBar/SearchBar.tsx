import React from 'react';
import { Formik, Form, Field, ErrorMessage as FormikError } from "formik";
import * as Yup from "yup";
import css from "./SearchBar.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
    onSubmit: (query: string) => void; // <--- ВИПРАВЛЕНО: Пропс називається onSubmit
}

interface FormValues {
    query: string;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => { // <--- ВИПРАВЛЕНО: Деструктуризуємо onSubmit
    const initialValues: FormValues = { query: "" };

    const validationSchema = Yup.object({
        query: Yup.string().required("This field is required")
    });

    const handleSubmit = (data: FormValues, { resetForm }: { resetForm: () => void }) => {
        if (!data.query.trim()) {
            toast.error("Search field cannot be empty!");
            return;
        }
        onSubmit(data.query); // <--- ВИПРАВЛЕНО: Викликаємо onSubmit
        resetForm();
    };

    return (
        <>
            <ToastContainer />
            <header>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className={css.form}>
                        <Field className={css.field} type="text" name="query" placeholder="Search..." />
                        <FormikError name="query" component="div" className={css.errorText} />
                        <button className={css.btn} type="submit">Search</button>
                    </Form>
                </Formik>
            </header>
        </>
    );
};

export default SearchBar;