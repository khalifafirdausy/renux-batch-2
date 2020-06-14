import React from 'react';
import ReactDOM from 'react-dom';

import FormBlog from './formBlog';
import AlbumBlog from './albumBlog';
import FooterBlog from './footerBlog';
import LearnState from "./learnState";

import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     album: []
  //   }
  // }

  state = {
    album: []
  }

  componentDidMount() {
    console.log("ini did mount")
    this.setState({
      album: [
        {
            title: "Ini foto pertama",
            text: "Ini isi"
        },
        {
            title: "Ini foto kedua",
            text: "Ini isi"
        },
        {
            title: "Ini foto ketiga",
            text: "Ini isi"
        },
        {
            title: "Ini foto keempat",
            text: "Ini isi"
        },
      ]
    })
  }

  render(){
    return(
      <React.Fragment>
        <Container>

          <FormBlog /> 
          <AlbumBlog album={this.state.album} /> 
          <FooterBlog />
          {/* <LearnState /> */}
        </Container>
      </React.Fragment>
    )
  }
}

ReactDOM.render( <App/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
