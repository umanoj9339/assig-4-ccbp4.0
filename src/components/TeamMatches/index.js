// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    TeamLastMatchData: {},
    isLoading: false,
    TeamDataList: [],
    TeamImage: '',
  }

  componentDidMount() {
    this.getTheTeamData()
  }

  getTheTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const APIUrl = `https://apis.ccbp.in/ipl/${id}`
    const FeatchTheData = await fetch(APIUrl)
    const DataOfTeam = await FeatchTheData.json()
    const LatestMatchDetails = DataOfTeam.latest_match_details
    const RecentMatches = DataOfTeam.recent_matches
    const TeamBannerUrl = DataOfTeam.team_banner_url
    console.log(LatestMatchDetails)
    console.log(RecentMatches)
    console.log(TeamBannerUrl)
    this.setState({
      TeamLastMatchData: {
        competingTeam: LatestMatchDetails.competing_team,
        competingTeamLogo: LatestMatchDetails.competing_team_logo,
        date: LatestMatchDetails.date,
        FirstInnings: LatestMatchDetails.first_innings,
        idOfLastMatch: LatestMatchDetails.id,
        manOfTheMatch: LatestMatchDetails.man_of_the_match,
        matchStatus: LatestMatchDetails.match_status,
        result: LatestMatchDetails.result,
        SecondInnings: LatestMatchDetails.second_innings,
        umpires: LatestMatchDetails.umpires,
        venue: LatestMatchDetails.venue,
      },
      TeamDataList: RecentMatches.map(itm => ({
        competingTeam1: itm.competing_team,
        competingTeamLogo1: itm.competing_team_logo,
        date1: itm.date,
        firstInnings1: itm.first_innings,
        teamHistoryMatchesId1: itm.id,
        manOfTheMatch1: itm.man_of_the_match,
        matchStatus1: itm.match_status,
        result1: itm.result,
        secondInnings1: itm.second_innings,
        umpires1: itm.umpires,
        venue1: itm.venue,
      })),
      TeamImage: TeamBannerUrl,
    })
  }

  render() {
    const {TeamLastMatchData, TeamDataList, TeamImage} = this.state
    const {
      competingTeam,
      competingTeamLogo,
      date,
      FirstInnings,
      venue,
      idOfLastMatch,
      manOfTheMatch,
      matchStatus,
      result,
      SecondInnings,
      umpires,
    } = TeamLastMatchData
    const {
      competingTeam1,
      competingTeamLogo1,
      date1,
      firstInnings1,
      teamHistoryMatchesId1,
      manOfTheMatch1,
      matchStatus1,
      result1,
      secondInnings1,
      umpires1,
      venue1,
    } = TeamDataList

    const classNameByTitleId = `classNameByTitleId${idOfLastMatch}`
    console.log(classNameByTitleId)
    return (
      <div className={`sec-Con-Team-Matches  ${classNameByTitleId}`}>
        <div className="top-banner-img-con">
          <img src={TeamImage} alt="team banner" className="team-banner" />
        </div>
        <p className="para-Team-Matches">Latest Matches</p>
        <LatestMatch TeamLastMatchData={TeamLastMatchData} />
        <ul className="Team-Match-Main-COn">
          {TeamDataList.map(itm => (
            <MatchCard itm={itm} key={itm.teamHistoryMatchesId1} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
