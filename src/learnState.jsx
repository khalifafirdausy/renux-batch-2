import React, { Component, Fragment } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";

class LearnState extends Component {
  
  state = {
    nama: "rehan",
    namaSementara: "",
    umur: 19,
    teman: ["tidak aja", "imajinasi", "halu"],
    makananMinuman: [{
      makanan: "ciki",
      minuman: "tea jus"
    }, {
      makanan: "lontong",
      minuman: "gula batu"
    }, {
      makanan: "oreo",
      minuman: "susu"
    }],
    keluarga: {
      ayah: "dasdas",
      ibu: "dasdasd"
    }
  }

  render(){

    console.log(this.state.nama)
    console.log(this.state.umur)

    // for(let i = 0; i < this.state.pacar.length; i++){
    //   console.log(this.state.pacar[i])
    // }
    const addFriend = () => {
      const oldTeman = this.state.teman
      oldTeman.push("kalipa")
      this.setState({teman: oldTeman})
    }

    const addAge = () => {
      const age = this.state.umur
      this.setState({umur: age+1})
    }

    const minAge = () => {
      const age = this.state.umur
      // cek kondisi umurnya kurang dari 18
      if (age > 18) {
        this.setState({umur: age-1})
      }
    }

    const changeName = (value) => {
      // masukan nama kedalam state
      this.setState({namaSementara: value})
    }

    const changeNameAction = () => {
      this.setState({nama: this.state.namaSementara})
    }

    return(
      <>
        <h1>nama saya {this.state.nama}</h1>
        <h2>umur saya {this.state.umur}</h2>
        {
          this.state.teman.map((data,index) => {
            if (index < this.state.teman.length) {
              return(
              <>
                <p>teman saya {data}</p>
              </>
              )
            }
          })
        }
        <Button onClick={() => addFriend()} color={"success"} >Tambah Pacar</Button>
        <br/>
        <br/>
        <br/>
        <Button onClick={() => addAge()} color={"info"} > + </Button>{" "}
        <Button onClick={() => minAge()} color={"danger"} > - </Button>
        <br/>
        <br/>
        <br/>
        <br/>
        <FormGroup>
          <Label for="name">Nama</Label>
          <Input onChange={(event) => changeName(event.target.value)} type="text" name="nama" id="name" placeholder="Masukan namamu" />
        </FormGroup>
        <Button  onClick={() => changeNameAction()} color={"warning"} >ganti nama</Button>
      </>
    )
  }
}

export default LearnState