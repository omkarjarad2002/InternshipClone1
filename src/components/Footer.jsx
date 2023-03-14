import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_div_1">
        <div className="learn">
          <h2>LEARN</h2>
          <p>Docs</p>
          <p>Guides</p>
          <p>BLog</p>
          <p>API</p>
        </div>
        <div className="ecosystem">
          <h2>ECOSYSTEM</h2>
          <p>Releases</p>
          <p>Discussions</p>
          <p>Developer tools</p>
          <p>Examples Repository</p>
        </div>
        <div className="support">
          <h2>SUPPORT</h2>
          <p>GitHub</p>
          <p>Discord</p>
          <p>Twitter</p>
        </div>
        <div className="contactus">
          <h2>CONTACT US</h2>
          <p>Want to learn more about moonrepo? Have questions?</p>
          <div className="input_next_btn">
            <div>
              <input></input>
            </div>
            <div>
              <button>
                <h3>Next</h3>
              </button>
            </div>
          </div>
          <div className="b_img_c">
            <div className="in_b_img_c">
              <div>
                <p className="backedby">Backed by</p>
              </div>
              <div className="Y">
                <p>Y</p>
              </div>
              <div>
                <p className="combinator">Combinator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="footer_div_2">
        <div className="footer_div_2_p_div">
          <p>Copyright@2023,moonrepo,Inc.</p>
        </div>
        <div className="footer_div_2_sticker_div">
          <div className="footer_div_2_sticker_div_all">
            <img src="../Images/github.png" />
            <img src="../Images/discord.jpg" />
            <img src="../Images/twitter.png" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
