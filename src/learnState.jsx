import React, { Component, Fragment } from "react";

class LearnState extends Component {
  
  state = {
    nama: "rehan",
    umur: 19,
    pacar: ["tidak aja", "imajinasi", "halu"],
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

    

    return(
      <>
        <h1>nama saya {this.state.nama}</h1>
        <h2>umur saya {this.state.umur}</h2>
        {
          this.state.pacar.map((data,index) => {
            if (index < this.state.pacar.length) {
              return(
              <>
                <p>pacar saya {data}</p>
                <p>dan saya menyayanginya</p>
              </>
              )
            }
          })
        }
      </>
    )
  }
}

export default LearnState