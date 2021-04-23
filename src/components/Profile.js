import React from "react";

const Profile = (props) => {
  console.log(props);
  function goHome() {
    props.history.goBack();
  }
  return (
    <div>
      <p>profile</p>
      <button onClick={goHome}>返回home</button>
    </div>
  );
};

export default Profile;
