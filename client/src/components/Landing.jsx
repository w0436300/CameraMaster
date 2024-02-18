import { Loader,Segment,Dimmer, Message, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../css/Landing.css'

const Landing = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center loading-background">
          <Segment className="loading-segment">
            <Dimmer active inverted>
              <Loader size='large'>Preparing Something Amazing...</Loader>
            </Dimmer>
    
            <div className="text-center mt-4">
              <h4>Please wait, we are loading something awesome for you!</h4>
              <p>This might take a few seconds, thank you for your patience.</p>
            </div>
          </Segment>
        </div>
      );
}

export default Landing;