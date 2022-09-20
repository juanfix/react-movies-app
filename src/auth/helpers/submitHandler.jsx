import axios from 'axios';
import swAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(swAlert)

export const submitHandler = async (e, navigate) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email === '' || password === '') {
    MySwal.fire({
      title: <p>Fields cannot be empty.</p>,
    });
    return;
  }

  if (email !== '' && !regexEmail.test(email)) {
    MySwal.fire({
      title: <p>You must type a valid email address.</p>,
    });
    return;
  }

  if (email !== 'challenge@alkemy.org' || password !== 'react') {
    MySwal.fire({
      title: <p>Invalid credentials.</p>,
    });
    return;
  }

  await axios
    .post('http://challenge-react.alkemy.org', { email, password })
    .then((res) => {
      MySwal.fire({
        title: <p>Welcome</p>,
      });
      const token = res.data.token;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('name', 'Juan Jose');
      navigate('/movielist');
    });
};
