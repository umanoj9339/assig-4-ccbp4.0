// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const teamsUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    IPLTeamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getDataAndDisplay()
  }

  getDataAndDisplay = async () => {
    const GetFetchTeams = await fetch(teamsUrl)

    const TeamsData = await GetFetchTeams.json()

    console.log(TeamsData.teams)
    console.log(TeamsData)

    const Teams = TeamsData.teams

    this.setState({
      IPLTeamsList: Teams.map(itm => ({
        id: itm.id,
        name: itm.name,
        teamImageUrl: itm.team_image_url,
      })),
      isLoading: false,
    })
  }

  render() {
    const {IPLTeamsList, isLoading} = this.state
    console.log(IPLTeamsList)
    return (
      <div className="Main-con-Home-page">
        {isLoading ? (
          <Loader
            type="Oval"
            color="#ffffff"
            height={50}
            width={50}
            className="loder-Place"
          />
        ) : (
          <div>
            <div className="Team-Card-logo-Top-Con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="Ipl-Logo-Img"
              />
              <h1 className="Logo-Heading">IPL Dashboard</h1>
            </div>
            <ul className="Ul-Team-Card">
              {IPLTeamsList.map(itm => (
                <TeamCard itm={itm} key={itm.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
