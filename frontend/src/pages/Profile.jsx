import BottomNav from "../components/BottomNav";

function Profile() {
    return (
        < div className="form-container">
        <h2>Profile</h2>
        <input placeholder="Change Name" />
        <input placeholder="Change Email" type="Email" />
        <button>Update</button>
                    <BottomNav/>

        </div>
    )
}
export default Profile;