import React from 'react';
import '../styles/LoginPageStyles.css';


const LoginPage = ({ setLoginOpenProps }) => {

    return (
        <div className='login-modal-container'>
            {/* Modal */}
            <div className='login-modal-content'>
                <h2 className="modal-title fs-5"
                    id="staticBackdropLabel">
                    Log in
                </h2>
                <div className="modal-body">
                    <form>
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >Email address:</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1" />
                        <div>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1" />
                            <label
                                className="form-check-label"
                                htmlFor="exampleCheck1">
                                Remember me
                            </label>
                        </div>
                        <div className='login-button'>
                            <button>
                                Login
                            </button>
                            {/* < Link to='/'> */}
                            <button
                                type='button'
                                onClick={setLoginOpenProps}
                            >Cancel
                            </button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default LoginPage;