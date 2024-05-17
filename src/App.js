import './App.css';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function App() {
  return (
    <div className="container">

      <header>
        <h1>DevFinder</h1>
        <button>Light</button>
      </header>

      <div className="input-container" >
        <HiOutlineMagnifyingGlass color="#0079ff" size={45} />
        <input placeholder="Search Github Username..." />
        <button>Search</button>
      </div>

      <div className="user-info-container" >

        <main>

          <img alt="user-img" />

          <div className="user-info">

            <div>
              <h1>UserName</h1>
              <h2>NickName</h2>
              <h3>Bio</h3>
            </div>

            <div>
              <p>Joined</p>
            </div>

          </div>

        </main>

        <section>

          <div className="repo-container">

            <div>
              <h1>Repos</h1>
              <p>Repos Number</p>
            </div>

            <div>
              <h1>Followers</h1>
              <p>Followers Number</p>
            </div>

            <div>
              <h1>Following</h1>
              <p>Following Number</p>
            </div>

          </div>

        </section>

        <div className="user-social">
          
          <div>
            <h3>Location</h3>
            <h3>Twitter</h3>
          </div>

          <div>
            <h3>Site</h3>
            <h3>Company</h3>
          </div>

        </div>


      </div>
    </div>
  );
}