// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {itm} = this.props
    const {name, id, teamImageUrl} = itm
    return (
      <li className="Li-Team-Card">
        <Link to={`/team-matches/${id}`} className="blog-item-link">
          <img src={teamImageUrl} alt={id} className="Team-Img" />
          <h1 className="name-Tag-display">{name}</h1>
        </Link>
      </li>
    )
  }
}
export default TeamCard
