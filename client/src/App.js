import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Grid, Row, Col, Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import './App.css';
import Client from './Client';

class TopBar extends Component {
  getCar(e) {
    Client.search(1);
  }
  render() {
    return (
      <Navbar fixedTop inverse>
        {/*For some wonky reason - 3 & 4 are rendered first...
          So they needed to be swapped. */}
        <Nav pullRight className="stayRight">
          <NavItem eventKey={3} href="#" className="orangeBkgrnd">
            <Glyphicon glyph="earphone" className="white"/>
          </NavItem>
          <NavItem eventKey={4} href="#" className="orangeBkgrnd">
            <Glyphicon glyph="globe" className="white"/>
          </NavItem>
        </Nav>
        <Nav pullRight className="hidden-xs">
          <NavItem onClick={this.getCar} eventKey={1} href="#">
            <Glyphicon glyph="search" className="white smallest-right-spacer"/>
          </NavItem>
          <NavItem eventKey={2} href="#" className="orangeBkgrnd">
            <Glyphicon glyph="time" className="white"/>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

class CurrentPic extends Component {
  render(){
    return (
      <View>
        <Image style={{width: 728, height: 432}}
               source={require('./img/File_005.jpeg')}/>
      </View>
    );
  }
}

class Overview extends Component {
  render(){
    return (
      <View style={{width: 296, height: 432}}>
        <div className="default-left-spacer">
          <h1 className="larger-top-spacer default-bottom-spacer">
            The Whip
          </h1>
          <div className="h9 smallest-bottom-spacer">
            Year
          </div>
          <h4 className="smaller-bottom-spacer">
            2013
          </h4>
          <div className="h9 smallest-bottom-spacer">
            Price Range
          </div>
          <h4 className="smaller-bottom-spacer">
            $0 - Priceless
          </h4>
          <div className="h9 smallest-bottom-spacer">
            Mileage
          </div>
          <h4 className="default-bottom-spacer">
            You don't want to know
          </h4>
          <div className="h9 smallest-bottom-spacer">
            Item Number : #12345<br/>
          </div>
          <div className="h9 default-bottom-spacer">
            VIN : 3GNDSAF43294839284932<br/>
          </div>
          <div className="h9 default-bottom-spacer">
            Share this car *imgGoesHere*
          </div>
          <table>
            <tbody>
              <tr>
                <td><div className="h9">Views</div></td>
                <td><div className="h9">Saves</div></td>
                <td><div className="h9">Shares</div></td>
              </tr>
              <tr>
                <td><h3>37</h3></td>
                <td><h3>20</h3></td>
                <td><h3>15</h3></td>
              </tr>
            </tbody>
          </table>
        </div>
      </View>
    )
  }
}

class AvailablePics extends Component {
  render() {
    var pics = [];
    for(var i=0; i < 6; i++) {
      var fileName = './img/File_00' + i.toString() + '.jpeg';
      pics.push(
        <Col xs={2}>
          <a href="#" className="thumbnail">
            <Image stretch source={require(fileName)}/>
          </a>
        </Col>);
    }
    return (
      <div>
        {pics}
      </div>
    )
  }
}

class ExtDetails extends Component {
  render() {
    return(
      <div className="smaller-left-spacer">
        <View style={{width: 480, height: 266}}>
          <div className="default-left-spacer">
            <h5 className="default-top-spacer middle-bottom-spacer">
              EXTERIOR
            </h5>
            <table className="underline table table-hover">
              <tbody>
                <tr>
                  <td className="h7">Color</td>
                  <td className="h8">Polished Metal</td>
                </tr>
                <tr>
                  <td className="h7">Tires</td>
                  <td className="h8">4 and 1 spare</td>
                </tr>
                <tr>
                  <td className="h7">Rims</td>
                  <td className="h8">Silver</td>
                </tr>
                <tr>
                  <td className="h7">Style</td>
                  <td className="h8">Sedan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </View>
      </div>
    )
  }
}

class PerfDetails extends Component {
  render() {
    return(
      <div className="smaller-right-spacer">
        <View style={{width: 480, height: 266}}>
          <div className="default-left-spacer">
            <h5 className="default-top-spacer middle-bottom-spacer">
              PERFORMANCE
            </h5>
            <table className="underline table table-hover">
              <tbody>
                <tr>
                  <td className="h7">Cylinders</td>
                  <td className="h8">L4</td>
                </tr>
                <tr>
                  <td className="h7">City MPG</td>
                  <td className="h8">25 MPG</td>
                </tr>
                <tr>
                  <td className="h7">Highway MPG</td>
                  <td className="h8">30 MPG</td>
                </tr>
                <tr>
                  <td className="h7">Engine</td>
                  <td className="h8">1.3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </View>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <TopBar />
          <Grid>
            <Row>
              <Col md={8}><CurrentPic /></Col>
              <Col md={4}><Overview /></Col>
            </Row>
            <Row>
              <AvailablePics />
            </Row>
            <Row>
              <Col md={5}><ExtDetails /></Col>
              <Col md={5}><PerfDetails /></Col>
              <Col md={2}></Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
