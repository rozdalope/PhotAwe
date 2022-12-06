import React from 'react';
import '../styles/LoginPageStyles.css';

const SignupPage = ({ setSignupOpenProps }) => {

    return (
        <div className='login-modal-container'>
            {/* Modal */}
            <div className='login-modal-content'>
                <h2 className="modal-title fs-5"
                    id="staticBackdropLabel">
                    Sign up
                </h2>
                <div className="modal-body">
                    <form>
                        <label
                            htmlFor="exampleInputFName"
                            className="form-label"
                        >First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputFName"
                            aria-describedby="emailHelp" />
                        <label
                            htmlFor="exampleInputLName"
                            className="form-label"
                        >Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputLName"
                            aria-describedby="emailHelp" />
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >Email address:</label>
                        <input
                            type="email"
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
                        <br></br>
                        <div className='login-button'>
                            <button>
                                Register
                            </button>
                            <button
                                type='button'
                                onClick={setSignupOpenProps}
                            >Cancel
                            </button>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default SignupPage;