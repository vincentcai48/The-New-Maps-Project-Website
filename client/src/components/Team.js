import React from "react";

function Team() {
  return (
    <div id="team-container">
      <h2>
        The Team
        <p>The people that work to make The New Maps Project possible</p>
      </h2>
      <ul id="team-members">
        <li>
          <div className="left-section">
            <img
              className="person-image"
              src="https://firebasestorage.googleapis.com/v0/b/weighty-forest-287112.appspot.com/o/teamimages%2Fprofilepicturelight.jpg?alt=media&token=41a12180-2b15-4dea-9263-e3988963bb93"
            ></img>
          </div>
          <div className="right-section">
            <h3>Vincent Cai</h3>
            <h4>Founder and Principal Developer</h4>
            <p>
              Vincent Cai is the founder of The New Maps Project and is the
              creator of many of The New Maps Project's first resources on its
              online platform. He currently runs The New Maps Project website
              and the software for the online resources.
            </p>
            <div className="contact">
              <i class="fas fa-envelope"></i>
              <a href="mailto:contact@vincentcai.tech">
                contact@vincentcai.tech
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Team;
