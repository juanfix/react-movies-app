import { useNavigate, Navigate } from 'react-router-dom';
import { getAuthToken, submitHandler } from '../helpers';

export const LoginForm = () => {

    const navigate = useNavigate();

    let token = getAuthToken();

    return (
        <>
            { 
            token ? <Navigate to='/movielist'/>
            : ( <>
                <h2>Login form</h2>
                    <form onSubmit={(e) => submitHandler(e, navigate)}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className='form-control' name="email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className='form-control' name="password" />
                        </div>
                        <button type="submit" className='btn btn-primary mt-2'>Login</button>
                    </form>
                </>
                )
            }
            
        </>
    )
}
