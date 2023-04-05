import validator from 'validator';
import FirebaseServices from '../../firebase/FirebaseServices';
import { collection, addDoc } from "firebase/firestore"; 

const mailName1 = 'joni'
const mailName2 = 'rinta-kahila'
const mailDomain = 'hotmail.com'

export interface IContactformData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

const validateEmail = (email: string): boolean => {
  return validator.isEmail(email);
}

const validatePhone = (phone: string): boolean => {
  if (!phone) return true
  return validator.isMobilePhone(phone);
}

const validateAlphanumeric = (alphanumeric: string): boolean => {
  if (!alphanumeric) return true
  return validator.isAlphanumeric(alphanumeric, 'sv-SE');
}

const handleSubmit = async (
  data: IContactformData,
  e: React.FormEvent<HTMLFormElement>,
) => {
  e.preventDefault();

  let response = {
    valid: true,
    success: true,
    err: {
      name: false,
      company: false,
      email: false,
      phone: false,
      subject: false,
      message: false,
    },
    responseErr: false,
    errCode: '',
  }

  response.err.name = false;//!validateAlphanumeric(data.name); TODO fix validation (- . ...yms)
  response.err.company = false;//!validateAlphanumeric(data.company);
  response.err.email = false;//!validateEmail(data.email);
  response.err.phone = false;//!validatePhone(data.phone);
  response.err.message = false;//!validateAlphanumeric(data.message);
  response.err.subject = false;//!validateAlphanumeric(data.subject);

  response.valid = !response.err.email
    && !response.err.name
    && !response.err.company
    && !response.err.phone
    && !response.err.message
    && !response.err.subject

    if (!response.valid) return response;
  
  const firestoreInstance = FirebaseServices.FirestoreInstance();

  const docRef = (await addDoc(collection(firestoreInstance, 'personal-portfolio'), {
    message: {
      html: `<h1><b>Uusi viesti portfoliosta, ${data.company ? 'yritykseltä ' + data.company : 'henkilöltä ' + data.name}</b></h1><br>
      <h2>Yhteystiedot:</h2>
      Nimi: <b>${data.name}</b><br>
      Yritys: <b>${data.company}</b><br>
      Nimi: <b>${data.name}</b><br>
      Email: <b>${data.email}</b><br>
      Puhelin: <b>${data.phone}</b><br><br>
      <h2>Viesti:</h2>
      <h3>${data.subject}</h3>
      ${data.message}
      `,
      subject: data.subject,
    },
    to: `${mailName1}.${mailName2}@${mailDomain}`
  }));

  console.log("Document written with ID: ", docRef.id);

  response.success = !!docRef.id;

  return response;
}

export default handleSubmit;
