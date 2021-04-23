import React from "react";

const Home = (props) => {
  console.log(props);
  function goProfile() {
    props.history.push("/profile", { name: "home" });
  }
  return (
    <div>
      <p>home</p>
      <button onClick={goProfile}>go profile</button>
    </div>
  );
};

export default Home;
