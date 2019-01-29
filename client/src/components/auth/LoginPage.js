import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import Backbone from 'backbone';

class LoginPage extends React.Component{

    constructor(){
        super();
        this.state = { user: null};
        this.widget = new OktaSignIn({
          baseUrl: 'https://{https://dev-652600.oktapreview.com}',
          clientId: '{0oaj2zlfq93H0Pfq10h7}',
          redirectUri: 'http://localhost:3001',
          authParams: {
            responseType: 'id_token'
          }
        });

        this.showLogin = this.showLogin.bind(this);
        this.logout = this.logout.bind(this);
      }

      componentDidMount(){
        this.widget.session.get((response) => {
          if(response.status !== 'INACTIVE'){
            this.setState({user:response.login});
          }else{
            this.showLogin();
          }
        });
      }

      showLogin(){
        Backbone.history.stop();
        this.widget.renderEl({el:this.loginContainer},
          (response) => {
            this.setState({user: response.claims.email});
            this.widget.remove();
          },
          (err) => {
            console.log(err);
          }
        );
      }

      logout(){
        this.widget.signOut(() => {
          this.setState({user: null});
          this.showLogin();
        });
      }

  render(){ 

    return(
        <div className="container">
        {this.state.user ? (
          <div className="container">
            <div>Welcome, {this.state.user}!</div>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        {this.state.user ? null : (
          <div ref={(div) => {this.loginContainer = div; }} />
        )}
      </div>

    );
  }
}
export default LoginPage;