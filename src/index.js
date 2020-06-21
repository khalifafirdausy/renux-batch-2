import React from 'react';
import ReactDOM from 'react-dom';

import FormBlog from './formBlog';
import AlbumBlog from './albumBlog';
import FooterBlog from './footerBlog';
import LearnState from "./learnState";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Axios
import Axios from 'axios';

class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     album: []
  //   }
  // }

  state = {
    album: [],
    blog: []
  }
  
  // Get Data 
  getDataToAPI = () => {
    Axios.get('http://localhost:3004/blog').then(res => {
      this.setState({
        blog: res.data
      })
      console.log(res.data)
    })
  }

  // Delete Data
  deleteDataToAPI = (id) => {
    console.log(id)
    
    Axios.delete(`http://localhost:3004/blog/${id}`).then(res => {
      console.log(res)
      this.getDataToAPI()
    })
  }

  handleButtonDelete = (id) => {
    console.log("Clicked Handle Button Delete")
    console.log("Ini id", id)

    this.deleteDataToAPI(id)
  }

  componentDidMount() {
    console.log("ini did mount")

    this.getDataToAPI()

    // console.log(this.state.blog)
    // this.setState({
    //   album: [
    //     {
    //         title: "Ini foto pertama",
    //         text: "Ini isi"
    //     },
    //     {
    //         title: "Ini foto kedua",
    //         text: "Ini isi"
    //     },
    //     {
    //         title: "Ini foto ketiga",
    //         text: "Ini isi"
    //     },
    //     {
    //         title: "Ini foto keempat",
    //         text: "Ini isi"
    //     },
    //   ]
    // })
  }

  render(){
    return(
      <React.Fragment>
        <Container>

          <FormBlog /> 
          <AlbumBlog handleButtonDelete={this.handleButtonDelete} blog={this.state.blog} /> 
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
