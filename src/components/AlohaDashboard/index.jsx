import { Component } from "react";
import SortedAlohaList from "../SortedAlohaList";

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Ben",
          lastname: "Bosh",
        },
        {
          id: 2,
          firstname: "Katrin",
          lastname: "Dottirs",
        },
        {
          id: 3,
          firstname: "Sara",
          lastname: "Parker",
        },
        {
          id: 4,
          firstname: "Brooke",
          lastname: "Wells",
        },
      ],
    };
  }

  setUsers = (users) => {
    this.setState({
      users,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <SortedAlohaList users={users} setUsers={this.setUsers} />
      </>
    );
  }
}

export default AlohaDashboard;
