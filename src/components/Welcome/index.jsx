import React from 'react';
import {styles, waffleStyles, messageStyles} from './styles';
import WelcomeWaffle from './WelcomeWaffle';
import WelcomeMessage from './WelcomeMessage';
import Intro from './Intro';

export default class Welcome extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      introShow: false
    };
    this.handleIntroChange = this.handleIntroChange.bind(this);
  }

  handleIntroChange(){
    this.setState({
    introShow: true
    });
  }

  render(){
    return (
      <div style={styles}>

        {!this.state.introShow &&
        <div>
          <div style={waffleStyles}>
            <WelcomeWaffle  onIntroChange={this.handleIntroChange}/>
          </div>

          <div style={messageStyles}>
            <WelcomeMessage/>
          </div>
        </div>
        }

        {this.state.introShow &&
          <Intro/>}

      </div>
    );
  }
}
