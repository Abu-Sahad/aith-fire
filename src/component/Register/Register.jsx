import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {
    //step-4 authProviders page previous step 1-3 complete
    const { user, createUser } = useContext(AuthContext)

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        //console.log(createUser)

        // createUserWithEmailAndPassword(auth, email, password)
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                //console.log(result.user)
                form.reset();
            })
            .catch(error => {
                console.log(error.message)
            })



    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold py-6">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegisterSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover text-cyan-400">Al ready have and account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;