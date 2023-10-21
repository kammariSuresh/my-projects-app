import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">S</p>

      <ul className="nav-menu">
        <li>
          <a href="https://kammarisuresh.github.io/suresh/">
            <img
              className="social-network-img"
              src="https://cdn-icons-png.flaticon.com/512/726/726056.png"
              alt="Portfolio"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kammarisuresh/">
            <img
              className="social-network-img"
              src="data:image/png;base64,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"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/kammariSuresh">
            <img
              className="social-network-img"
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png "
              alt="Git Hub"
            />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/Sureshchary24">
            <img
              className="social-network-img"
              src="https://play-lh.googleusercontent.com/A-Rnrh0J7iKmABskTonqFAANRLGTGUg_nuE4PEMYwJavL3nPt5uWsU2WO_DSgV_mOOM"
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
