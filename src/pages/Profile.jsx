import FormHeader from "../components/form/FormHeader";
import { UserAuth } from "../UserContext";

function Profile() {
    const {user} = UserAuth();
    console.log(user);

    return (
        <div>
            <FormHeader>Profile</FormHeader>
            <p>Welcome, {user.displayName}!</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;