import './App.css';

import { useState } from 'react';

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdLocationPin, MdSunny } from "react-icons/md";
import { FaTwitter, FaCity } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";
import axios from 'axios';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

export default function App() {
  const [background, setBackground] = useState(false);
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  console.log(userData);

  async function getUser(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      setUserData(response.data);
    } catch (error) {
      toast.error("Failed to fetch user data. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className="container" style={{ background: background ? "#F1F1F1" : "#141d2f" }}>

      <header>

        <h1 style={{ color: background ? "#000" : "#FFF" }}>DevFinder</h1>
        <button onClick={() => setBackground(!background)}>
          <div className='button-icon'>

            {
              background ? (
                <>
                  <h2 style={{ color: background ? "#697c9a" : "#FFF" }}>Dark</h2>
                  <FaMoon color="#697c9a" size={20} />
                </>
              ) : (
                <>
                  <h2 style={{ color: background ? "#697c9a" : "#FFF" }}>Light</h2>
                  <MdSunny color="#FFF" size={22} />
                </>
              )
            }

          </div>
        </button>

      </header>

      <div
        style={{ height: userData ? "82vh" : "70vh" }}
        className="form-container"
      >

        <form
          onSubmit={(e) => getUser(e)}
          style={{ background: background ? "#FFF" : "#1e2a47" }}
        >
          <HiOutlineMagnifyingGlass color="#0079ff" size={45} />
          <input
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Search Github Username..."
            style={{ color: background ? "#000" : "#FFF" }}
          />
          <button onClick={(e) => getUser(e)}>Search</button>
        </form>

        {userData && (
          <div className="user-info-container" style={{ background: background ? "#FFF" : "#1e2a47" }}>
            <main>
              <img src={userData.avatar_url} alt="User Avatar" />

              <div className="user-info">
                
                <div>
                  <h1 style={{ color: background ? "#000" : "#FFF" }}>{userData.name}</h1>
                  <h2>{userData.login}</h2>
                  <h3 style={{ color: background ? "#D9D9D9" : "#FFF" }}>{userData.bio}</h3>
                </div>

                <div>
                  <p>Joined: {new Date(userData.created_at).toLocaleDateString()}</p>
                </div>

              </div>
            </main>

            <section>
              <div className="repo-container" style={{ background: background ? "#F1F1F1" : "#141d2f" }}>
                <div>
                  <h1 style={{ color: background ? "#2b3442" : "#FFF" }}>Repos</h1>
                  <p style={{ color: background ? "#2b3442" : "#FFF" }}>{userData.public_repos}</p>
                </div>
                <div>
                  <h1 style={{ color: background ? "#2b3442" : "#FFF" }}>Followers</h1>
                  <p style={{ color: background ? "#2b3442" : "#FFF" }}>{userData.followers}</p>
                </div>
                <div>
                  <h1 style={{ color: background ? "#2b3442" : "#FFF" }}>Following</h1>
                  <p style={{ color: background ? "#2b3442" : "#FFF" }}>{userData.following}</p>
                </div>
              </div>
            </section>

            <div className="user-social">
              <div>
                <div className="icon-container" >
                  <MdLocationPin size={28} color="#4b6a9b" />
                  <h3 style={{ color: background ? "#000" : "#FFF" }}>Location: {userData.location}</h3>
                </div>
                <div className="icon-container" >
                  <FaTwitter size={25} color="#4b6a9b" />
                  <h3 style={{ color: background ? "#000" : "#FFF" }}>Twitter: {userData.twitter_username}</h3>
                </div>
              </div>
              <div>
                <div className="icon-container" >
                  <IoIosLink size={28} color="#4b6a9b" />
                  <h3 style={{ color: background ? "#000" : "#FFF" }}>Site: {userData.blog}</h3>
                </div>
                <div className="icon-container" >
                  <FaCity size={26} color="#4b6a9b" />
                  <h3 style={{ color: background ? "#000" : "#FFF" }}>Company: {userData.company}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ToastContainer />

    </div>
  );
}
