import "./App.css";
// import Photo from "./Profile/Photo";
import Profile from "./Profile/Pro";

function App() {
  const infos = {
    fullname: "Boubaker Saif",
    bio: "On a mission to learn React",
    profession: "Web Dev",
  };

  const handlename = () => {
    alert(infos.fullname);
  };

  return (
    <div className="App">
      <Profile
        fullname={infos.fullname}
        bio={infos.bio}
        profession={infos.profession}
        fun={handlename}
      ></Profile>
      {/* <Photo> </Photo> */}
    </div>
  );
}

export default App;
