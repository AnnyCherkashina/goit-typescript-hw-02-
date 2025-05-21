import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./SearchBar.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ setQuery }) => {
    const initialValues = { query: "" };

    const validationSchema = Yup.object().shape({
        query: Yup.string()
            .required("This field is required")
    });

    const handleSubmit = (data, { resetForm }) => {
        if (!data.query.trim()) {
            toast.error("Search field cannot be empty!");
            return;
        }
        setQuery(data.query);
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
                    {() => (
                        <Form className={css.form}>
                            <Field
                                className={css.field}
                                type="text"
                                name="query"
                                placeholder="Search..."
                            />
                            <ErrorMessage name="query" component="div" style={{ color: 'red' }} />
                            <button className={css.btn} type="submit">
                                Search
                            </button>
                        </Form>
                    )}
                </Formik>
            </header>
        </>
    );
};

export default SearchBar;