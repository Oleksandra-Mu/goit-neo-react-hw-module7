import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import Buttons from "../Buttons/Buttons";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.contactForm}>
          <div className={css.formItem}>
            <label>Name</label>
            <Field className={css.formField} type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div className={css.formItem}>
            <label>Number</label>
            <Field className={css.formField} type="text" name="number" />
            <ErrorMessage name="number" component="span" />
          </div>
          <div className={css.btn}>
            <Buttons type="submit" tag="Add contact" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
