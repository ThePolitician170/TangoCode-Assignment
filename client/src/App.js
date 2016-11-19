import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Grid, Row, Col, Navbar, Nav, NavItem, Glyphicon, Button, Carousel } from 'react-bootstrap';
import './App.css';
import Client from './Client';

function TopBar(props) {
  return (
    <Navbar inverse>
      <Nav pullRight className="stayRight">
        <NavItem eventKey={1} href="#" className="orange-bkgrnd">
          <Glyphicon glyph="earphone" className="white"/>
        </NavItem>
        <NavItem eventKey={2} href="#" className="orange-bkgrnd">
          <Glyphicon glyph="globe" className="white"/>
        </NavItem>
      </Nav>
      <Nav pullRight className="hidden-xs">
        <NavItem onClick={props.executeFunction} eventKey={1} href="#">
          <Glyphicon glyph="search" className="white smallest-right-spacer"/>
        </NavItem>
        <NavItem eventKey={2} href="#" className="orange-bkgrnd">
          <Glyphicon glyph="time" className="white"/>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

function CurrentPic(props) {
  if(props.pic) {
    return (
      <View>
        <Image className="img-responsive" style={{maxWidth: 728, maxHeight: 432}}
               source={require(props.loc + props.pic)}/>
      </View>
    )
  } else {
    return (
      <View style={{marginTop: 50}}>
        <Button onClick={props.executeFunction} bsStyle="info">
          Click to see the car!
        </Button>
      </View>
    )
  }
}

function PicCarousel(props) {
  if(props.pics) {
      var reactPics = props.pics.map((v, i) => {
        return (
          <Carousel.Item key={i}>
              <Image key={i} style={{height:256}} source={require(props.loc+v)} />
          </Carousel.Item>

        )
      })
    return (
      <View>
        <Carousel>
          {reactPics}
        </Carousel>
      </View>
    )
  } else {
    return (
      <View style={{marginTop: 50}}>
        <Button onClick={props.executeFunction} bsStyle="info">
          Click to see the car!
        </Button>
      </View>
    )
  }
}

function Overview(props) {
    return (
      <View style={{width: 296, height: 432, backgroundColor: '#FFFFFF'}}>
        <div className="default-left-spacer">
          <h1 className="larger-top-spacer default-bottom-spacer">
            {props.data.name}
          </h1>
          <div className="h9 smallest-bottom-spacer">
            Year
          </div>
          <h4 className="smaller-bottom-spacer">
            {props.data.year}
          </h4>
          <div className="h9 smallest-bottom-spacer">
            Price Range
          </div>
          <h4 className="smaller-bottom-spacer">
            {props.data.price}
          </h4>
          <div className="h9 smallest-bottom-spacer">
            Mileage
          </div>
          <h4 className="default-bottom-spacer">
            {props.data.mileage}
          </h4>
          <div className="h9 smallest-bottom-spacer">
            Item Number : {props.data.itemNum}
          </div>
          <div className="h9 default-bottom-spacer">
            VIN : {props.data.vin}
          </div>
          <div className="h9 default-bottom-spacer">
            Share this car <Glyphicon glyph="envelope"/>
          </div>
          <table>
            <tbody>
              <tr>
                <td><div className="h9">Views</div></td>
                <td><div className="h9">Saves</div></td>
                <td><div className="h9">Shares</div></td>
              </tr>
              <tr>
                <td><h3>{props.data.views}</h3></td>
                <td><h3>{props.data.saves}</h3></td>
                <td><h3>{props.data.shares}</h3></td>
              </tr>
            </tbody>
          </table>
        </div>
      </View>
    )
}

function CallButton(props) {
  return (
  <View style={{marginTop:-16}}>
    <Col lgHidden mdHidden smHidden>
      <Button block onClick={props.executeFunction} bsStyle="success">
        CALL US
      </Button>
    </Col>
  </View>
  )
}

function AvailablePics(props) {
  if(props.pics) {
      var reactPics = props.pics.map((v, i) => {
        return (
          <Col key={i} sm={2} xsHidden>
            <a href="#" id={v} key={i} onClick={props.changePic}>
              <Image key={i} stretch source={require(props.loc+v)} />
            </a>
          </Col>
        )
      })
    return (
      <div>
        {reactPics}
      </div>
    )
  } else {
    return (
      <View>
      </View>
    )
  }
}

function ExtDetails(props) {
  return(
    <View style={{width: 480, height: 266, backgroundColor: '#FFFFFF'}}>
      <div className="default-left-spacer">
        <h5 className="default-top-spacer middle-bottom-spacer">
          EXTERIOR
        </h5>
        <table className="underline table table-hover">
          <tbody>
            <tr>
              <td className="h7">Color</td>
              <td className="h8">{props.data.color}</td>
            </tr>
            <tr>
              <td className="h7">Tires</td>
              <td className="h8">{props.data.tires}</td>
            </tr>
            <tr>
              <td className="h7">Rims</td>
              <td className="h8">{props.data.rims}</td>
            </tr>
            <tr>
              <td className="h7">Style</td>
              <td className="h8">{props.data.style}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </View>
  )
}

function PerfDetails(props) {
  return(
    <div className="smaller-right-spacer">
      <View style={{width: 480, height: 266, backgroundColor: '#FFFFFF'}}>
        <div className="default-left-spacer">
          <h5 className="default-top-spacer middle-bottom-spacer">
            PERFORMANCE
          </h5>
          <table className="underline table table-hover">
            <tbody>
              <tr>
                <td className="h7">Cylinders</td>
                <td className="h8">{props.data.cylinders}</td>
              </tr>
              <tr>
                <td className="h7">City MPG</td>
                <td className="h8">{props.data.cityMPG}</td>
              </tr>
              <tr>
                <td className="h7">Highway MPG</td>
                <td className="h8">{props.data.highwayMPG}</td>
              </tr>
              <tr>
                <td className="h7">Engine</td>
                <td className="h8">{props.data.engine}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </View>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    //Set initial state
    this.state = {
      carDetail: {
        overview: {},
        exterior: {},
        performance: {}
      },
      pics: {}
    };
    //Functions must be bound manually with ES6 classes
    this.getCar = this.getCar.bind(this);
    this.changePic = this.changePic.bind(this);
  }

  getCar(e) {
    Client.search(1, (data) => {
      this.setState({
          carDetail: data,
          pics: {
            imgLoc: "./img/",
            current: "File_005.jpeg",
            picList: [
                    "File_000.jpeg",
                    "File_001.jpeg",
                    "File_002.jpeg",
                    "File_003.jpeg",
                    "File_004.jpeg",
                    "File_005.jpeg"
                  ]
          }
        });
      });
  }

  changePic(e) {
    const tempPics = this.state.pics;
    tempPics.current = e.currentTarget.id;
    this.setState({
      pics: tempPics
    });
  }

  render() {
    return (

        <Grid className="App container app-bkgrnd">
          <Row style={{height:56}}>
            <TopBar executeFunction={this.getCar}/>
          </Row>
          <Row style={{marginBottom:32}}>
            <Col md={8} xsHidden>
              <CurrentPic loc={this.state.pics.imgLoc} pic={this.state.pics.current}
                executeFunction={this.getCar}/>
            </Col>
            <Col lgHidden mdHidden smHidden xs={12}>
              <PicCarousel loc={this.state.pics.imgLoc} pics={this.state.pics.picList}
                executeFunction={this.getCar}/>
            </Col>
            <Col md={4} xs={12}>
              <Overview data={this.state.carDetail.overview}/>
            </Col>
          </Row>
          <Row>
            <AvailablePics loc={this.state.pics.imgLoc} pics={this.state.pics.picList}
              changePic={this.changePic}/>
            <CallButton />
          </Row>
          <Row style={{marginTop:16}}>
            <Col md={5} xs={12} style={{marginBottom:16}}>
              <ExtDetails data={this.state.carDetail.exterior}/>
            </Col>
            <Col md={5} xs={12}>
              <PerfDetails data={this.state.carDetail.performance}/>
            </Col>
          </Row>
        </Grid>

    );
  }
}

export default App;
