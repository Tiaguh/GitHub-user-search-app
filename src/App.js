import './App.css';

import { useState } from 'react';

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdLocationPin, MdSunny } from "react-icons/md";
import { FaTwitter, FaCity } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";

export default function App() {
  const [background, setBackground] = useState(false)

  return (
    <div
      className="container"
      style={{ background: background ? "#F1F1F1" : "#141d2f" }}
    >

      <header>
        <h1
          style={{ color: background ? "#000" : "#FFF" }}
        >
          DevFinder
        </h1>

        <button onClick={() => setBackground(!background)} >
          {
            background ? (
              <div className='button-icon'>
                <h2 style={{ color: "#697c9a" }}>Dark</h2>
                <FaMoon color="#697c9a" size={20} />
              </div>
            ) : (
              <div className='button-icon'>
                <h2 style={{ color: "#FFF" }}>Light</h2>
                <MdSunny color="#FFF" size={20} />
              </div>
            )
          }
        </button>

      </header>

      <div
        className="input-container"
        style={{ background: background ? "#FFF" : "#1e2a47" }}
      >
        <HiOutlineMagnifyingGlass color="#0079ff" size={45} />
        <input placeholder="Search Github Username..." />
        <button>Search</button>
      </div>

      <div
        className="user-info-container"
        style={{ background: background ? "#FFF" : "#1e2a47" }}
      >

        <main>

          <img />

          <div className="user-info">

            <div>
              <h1
                style={{ color: background ? "#000" : "#FFF" }}
              >
                UserName
              </h1>

              <h2>
                NickName
              </h2>

              <h3
                style={{ color: background ? "#D9D9D9" : "#FFF" }}
              >
                Bio
              </h3>
            </div>

            <div>
              <p>Joined</p>
            </div>

          </div>

        </main>

        <section>

          <div
            className="repo-container"
            style={{ background: background ? "#F1F1F1" : "#141d2f" }}
          >

            <div>
              <h1 style={{ color: background ? "#2b3442" : "#FFF" }} >
                Repos
              </h1>
              <p style={{ color: background ? "#2b3442" : "#FFF" }} >
                0
              </p>
            </div>

            <div>
              <h1 style={{ color: background ? "#2b3442" : "#FFF" }} >
                Followers
              </h1>
              <p style={{ color: background ? "#2b3442" : "#FFF" }} >
                0
              </p>
            </div>

            <div>
              <h1 style={{ color: background ? "#2b3442" : "#FFF" }} >
                Following
              </h1>
              <p style={{ color: background ? "#2b3442" : "#FFF" }} >
                0
              </p>
            </div>

          </div>

        </section>

        <div className="user-social">

          <div>
            <div className="icon-container" >
              <MdLocationPin size={28} color="#4b6a9b" />
              <h3
                style={{ color: background ? "#000" : "#FFF" }}
              >
                Location</h3>
            </div>

            <div className="icon-container" >
              <FaTwitter size={25} color="#4b6a9b" />
              <h3
                style={{ color: background ? "#000" : "#FFF" }}
              >
                Twitter
              </h3>
            </div>
          </div>

          <div>
            <div className="icon-container" >
              <IoIosLink size={28} color="#4b6a9b" />
              <h3
                style={{ color: background ? "#000" : "#FFF" }}
              >
                Site
              </h3>
            </div>

            <div className="icon-container" >
              <FaCity size={26} color="#4b6a9b" />
              <h3
                style={{ color: background ? "#000" : "#FFF" }}
              >
                Company
              </h3>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}