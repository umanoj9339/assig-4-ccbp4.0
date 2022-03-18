// Write your code here
import './index.css'

const LatestMatch = props => {
  const {TeamLastMatchData} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    FirstInnings,
    venue,

    manOfTheMatch,

    result,
    SecondInnings,
    umpires,
  } = TeamLastMatchData

  return (
    <div className="Latest-Match-Main-Con">
      <div className="Latest-Match-details-con">
        <h1>{competingTeam}</h1>
        <p className="date-Latest-match">{date}</p>
        <p className="decoration-latest-match">{venue}</p>
        <p className="decoration-latest-match">{result}</p>
      </div>
      <div className="latest-match-img-con">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          key={competingTeam}
          className="img-latest-match"
        />
      </div>
      <div className="latest-match-Con-Inn-Details-Con">
        <p className="Inn-details">First Innings</p>
        <p className="inn-value-details">{FirstInnings}</p>
        <p className="Inn-details">Second Innings</p>
        <p className="inn-value-details">{SecondInnings}</p>
        <p className="Inn-details">Man Of The Match</p>
        <p className="inn-value-details">{manOfTheMatch}</p>
        <p className="Inn-details">Umpires</p>
        <p className="inn-value-details">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
