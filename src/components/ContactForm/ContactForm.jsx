import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Notification } from '../utils/notifications';
import {
  FormAddContact,
  LabelContactForm,
  InputContactForm,
  ButtonSubmit,
  MessageError,
} from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();

const numberRegEx =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, {
      message:
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan',
      excludeEmptyString: false,
    })
    .required('Name is required field!'),
  number: yup
    .string()
    .matches(numberRegEx, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      excludeEmptyString: false,
    })
    .required('Number is required field!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isDublicateName = contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    const isDublicateNumber = contacts.find(
      ({ number }) => number === values.number
    );
    if (isDublicateName) {
      return Notification(values.name);
    } else {
      if (isDublicateNumber) {
        return Notification(values.number);
      }
    }

    dispatch(addContact(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormAddContact autoComplete="off">
        <LabelContactForm htmlFor={nameInputId}> Name:</LabelContactForm>
        <InputContactForm type="text" name="name" id={nameInputId} />
        <MessageError name="name" component="div" />

        <LabelContactForm htmlFor={numberInputId}>Number:</LabelContactForm>
        <InputContactForm id={numberInputId} type="tel" name="number" />
        <MessageError name="number" component="div" />

        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormAddContact>
    </Formik>
  );
};
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactSlice';
// import { getContacts } from 'redux/selectors';
// import { Notification } from '../utils/notifications';
// import {
//   FormAddContact,
//   LabelContactForm,
//   InputContactForm,
//   ButtonSubmit,
// } from './ContactForm.styled';

// const nameInputId = nanoid();
// const numberInputId = nanoid();

// export function ContactForm() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();
//   const allContacts = useSelector(getContacts);

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };
//   const addNewContact = ({ name, number }) => {
//     const newContact = {
//       name,
//       number,
//       id: nanoid(),
//     };

//     if (
//       allContacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       return Notification(name);
//     }
//     if (allContacts.find(contact => contact.number === number)) {
//       return Notification(number);
//     }
//     return dispatch(addContact(newContact));
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     addNewContact({ name, number });
//     resetForm();
//   };

//   const resetForm = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <FormAddContact onSubmit={handleSubmit}>
//       <LabelContactForm htmlFor={nameInputId}>Name</LabelContactForm>
//       <InputContactForm
//         id={nameInputId}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={name}
//         onChange={handleChange}
//       />

//       <LabelContactForm htmlFor={numberInputId}>Number</LabelContactForm>
//       <InputContactForm
//         id={numberInputId}
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         value={number}
//         onChange={handleChange}
//       />

//       <ButtonSubmit type={'submit'}>Add contact</ButtonSubmit>
//     </FormAddContact>
//   );
// }
