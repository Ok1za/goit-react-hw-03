import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const schema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const ContactForm = ({ onSubmit }) => {
    return (
    <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
        onSubmit(values.name, values.number);
        setSubmitting(false);
        }}
    >
        <Form className={styles.contactForm}>
        <label className={styles.contactFormLabel} htmlFor="name">
            Name
            <Field
            type="text"
            name="name"
            className={styles.contactFormInput}
            placeholder="Enter name"
            id="name"
            />
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
        </label>

        <label className={styles.contactFormLabel} htmlFor="number">
            Number
            <Field
            type="tel"
            name="number"
            className={styles.contactFormInput}
            placeholder="Enter number"
            id="number"
            />
            <ErrorMessage name="number" component="div" className={styles.errorMessage} />
        </label>

        <button type="submit" className={styles.contactFormButton}>
            Add contact
        </button>
        </Form>
    </Formik>
    );
};

export default ContactForm;