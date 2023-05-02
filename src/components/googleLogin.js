import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import { useEffect ,useState} from 'react'
import "../style/loginstyle.css"

export default function GLogin() {
    const clientId = "568469783953-91oshsq3dv3cfdof4i5acijp1bul14pu.apps.googleusercontent.com"
    const [profile, setProfile] = useState(null)
    useEffect(() => {
        const inintClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        }
        gapi.load("client:auth2", inintClient)
    }, [])

    function onSuccess(res) {
        setProfile(res.profileObj)
    }

    function onFailure(res) {
        console.log("failed", res);
    }

    function savaData(name, img, email) {
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", "")
    }
    function logOut() {
        setProfile(null)
    }
    return (
        <div className='g-login-container'>
            {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email : {profile.email}</p>
                    <GoogleLogout clientId={clientId} buttonText='Log out' onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText='Sign in with Google'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    )
}