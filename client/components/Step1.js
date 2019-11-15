import React from 'react';
import flagIcon from '../Flag_font_awesome.svg.png'; //
import familyIcon from '../child_icon_29.jpg'; //
import animalIcon from '../solid_dog.svg.png'; //

class Step1 extends React.Component {


    state ={
        optionselected: null,
    }

    handleClick = (e) => {
    const buttonClicked = e.target.id
        this.setState({...this.state, optionselected: buttonClicked})

        console.log(e.target.id)
        console.log(this.state.optionselected)
    }


    render() {
        return (


            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 text-center" style={{backgroundColor: 'black',color:'white', padding: 20}}>
                        MyGNV Resource Finder
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 text-center" style={{backgroundColor: 'lightgray', padding: 20}}>
                        Step 1: Who needs help?
                    </div>
                </div>


                <div className="row justify-content-center">
                    <div id="Child" className="col-sm-2 text-center"
                         style={{border:'1px solid black', backgroundColor: 'rgb(225,243,248)', padding: 20}}
                         onClick={this.handleClick}>
                        <p id="Child">Child<br/>0-17</p>
                    </div>
                    <div id="Adult" className="col-sm-2 text-center"
                         style={{border:'1px solid black', backgroundColor: 'rgb(225,243,248)', padding: 20}}
                         onClick={this.handleClick}>
                        <p id="Adult">Adult<br/>18+</p>

                    </div>
                    <div id="Senior" className="col-sm-2 text-center"
                         style={{border:'1px solid black', backgroundColor: 'rgb(225,243,248)', padding: 20}}
                         onClick={this.handleClick}>
                        <p id="Senior">Senior<br/>60+</p>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div id="Veteran" className="col-sm-2 text-center"
                         style={{border:'1px solid black', backgroundColor: 'rgb(225,243,248)', padding: 20}}
                         onClick={this.handleClick}>
                        <p id="Veteran">Veteran<br/></p>
                        <img src={flagIcon} id="Veteran" alt="Flag" style={{width:30, height:30}}></img>
                    </div>
                    <div id="Family" className="col-sm-2 text-center"
                         style={{border:'1px solid black', backgroundColor: 'rgb(225,243,248)', padding: 20}}
                         onClick={this.handleClick}>
                        <p id="Family">Family<br/></p>
                        <img src={familyIcon} id="Family" alt="Family"  style={{width:30, height:30}}></img>
                    </div>
                    <div id="Animal" className="col-sm-2 text-center"
                         style={{border:'1px solid black', backgroundColor: 'rgb(225,243,248)', padding: 20}}
                         onClick={this.handleClick}>
                        <p id="Animal">Animal<br/></p>
                        <img src={animalIcon} id="Animal" alt="Dog"  style={{width:30, height:30}}></img>
                    </div>
                </div>
            </div>

        );
    }

}

export default Step1;