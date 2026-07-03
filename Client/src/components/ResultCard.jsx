function ResultCard({
  score,
  total,
}) {
  return (
    <div className="result-card">
      <h1>Quiz Completed</h1>

      <h2>
        Final Score:
        {score}/{total}
      </h2>
    </div>
  );
}

export default ResultCard;