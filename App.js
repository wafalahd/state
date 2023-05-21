import React, { Component } from 'react';

export default class App extends Component {
  state = {
    fullName: "Wafa LAHDOUMI",
    bio: "I am 42 years",
    imgSrc: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/285122770_10227994126986568_5579286937167940633_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=lRPvx-8fPqoAX8KqVTT&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDONJhuOdVP1r6RU8ooWD5Ay0WtoYw3n9MBtTGfosnsFA&oe=64666FD0",
    profession: "I am an employee",
    toggle: true,
  };

  toggleHandler = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };

  render() {
    const { fullName, bio, imgSrc, profession, toggle } = this.state;

    return (
      <>
        <button onClick={this.toggleHandler}>Click Me</button>
        {toggle && (
          <div>
            <h1>My name is {fullName}</h1>
            <h2>{bio}</h2>
            <h2>{profession}</h2>
            <img
              src={imgSrc}
              alt="Profile"
              style={{ width: '200px', height: '250px' }}
            />
          </div>
        )}
      </>
    );
  }
}
