import "../HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-content">
      <h1 className="homepage-title">Stop. Sei arrivato.</h1>
      <p className="homepage-subtitle">
        Sì, proprio tu, che scrolli da ore alla ricerca di qualcosa di
        interessante.
        <br />
        Sei stanco dei soliti negozi online? Anche noi.
      </p>
      <p className="homepage-text">
        Qui trovi solo cose che piacciono davvero a noi, quelle che
        consiglieremmo a un amico.
      </p>
      <Link to="/prodotti" className="btn-scopri">
        Portami alle cose belle!
      </Link>
    </div>
  );
};
export default HomePage;
