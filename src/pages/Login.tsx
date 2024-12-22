import { UserAuth } from "../context/AuthContext"

const Login = () => {
    const {currentUser,signinWithGoogle} = UserAuth();
    console.log(currentUser);
    

    const handleLogin = async () =>{
        try{
            await signinWithGoogle();
        } catch(error){
            console.log(error);   
        }
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there 👋🏼</h1>
                    <p className="py-6">
                        Join the conversation,meet new people, and make 
                        connections in one shared room.
                    </p>
                    <button onClick={handleLogin} className="btn btn-active btn-neutral">LOGIN WITH GOOGLE</button>
                </div>
            </div>
        </div>
    )
}

export default Login