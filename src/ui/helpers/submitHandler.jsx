import swAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(swAlert)

export const submitHandler = (e, navigate) => {
  e.preventDefault();
  const keyword = e.target.keyword.value.trim();

  if (keyword.length === 0) {
    MySwal.fire({
        title: <p>You must write a keyword.</p>,
    });
    return;
  }

  if (keyword.length < 4) {
    MySwal.fire({
        title: <p>You must write at least 4 characters.</p>,
    });
    return;
  }
  e.target.keyword.value = '';
  navigate(`/moviesearchlist?keyword=${ keyword }`);
  
}
