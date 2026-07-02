import  { useParams, useNavigate } from 'react-router-dom';

function UserProfile() {
    const  userId = useParams();
    const naviagte = useNavigate();
    return (
        <div>
            <h1>User Profile Page</h1>
            <p>User ID: {userId.id}</p>
            <button onClick= { () => naviagte('/') }>Go to Home</button>
        </div>
    );
}

export default UserProfile; 