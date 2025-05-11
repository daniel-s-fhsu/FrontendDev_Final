import FormHeader from "../components/form/FormHeader";
import { UserAuth } from "../UserContext";

function Profile() {
    const {user} = UserAuth();


    return (
        <div>
            <FormHeader>Profile</FormHeader>
            <p>Welcome, {UserAuth.displayName}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;