import { useLocation }
from "react-router-dom";

function Result() {

  const location = useLocation();

  const score =
    location.state?.score || 0;

  return (

    <div className="result-container">

      <div className="result-card">

        <h1>
          Quiz Completed
        </h1>

        <h2>
          Final Score
        </h2>

        <h1>
          {score}/15
        </h1>

      </div>

    </div>
  );
}

export default Result;