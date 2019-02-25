import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slide = styled.div
`
display:flex;
justify-content:space-around;
`
const Image = styled.img
    `
    width:30vw !important
    height:60vh;
    border:41px  solid rgba(10, 30, 40, 0.3) !important;
    border-radius:600px 600px;

  `
const NewCarous = styled(Carousel)
    `
    .carousel .slide{
        justify-content:space-beetween;
        background: rgba(330,330,330,0.5);

    }
    .carousel .control-dots{
        width: 0;
        height:0;
  }
  .carousel .control-dots .dot{
        width: 0;
        height:0;
    }
    .slide .legend{
        background-color:rgba(0,0,0,0);
  }
  `
const Paragraphe = styled.p
    `
    color:rgba(310,232,159);
    font-weight:bold
    font-size: 3em;
    text-shadow:4px 2px black;
    margin-left:3vw;
    margin-right:3vw;
    
    `

class Home extends Component {
    state = {
        restaurants: [],
    }


    newId = event => {
        const id = event.target.value
        this.setState({ id }) // shortcut to: this.setState({ id: id })
        this.getRestaurantByArea(id)
            .then(() => console.log('1', this.state.selectRestaurant))
    }




    getAllrestaurant = () => {
        axios.get("http://localhost:1080/restaurants/allRestaurants")
            .then(json => this.setState({ restaurants: json.data }))
    }


    componentDidMount() {
        this.getAllrestaurant()

    }

    render() {
        return (
            <NewCarous
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}

            >
                {this.state.restaurants
                    .map(e =>
                        <Slide><Image
                            src={e.image_url}
                            style={{ width: "40vw" }} />
                            <Paragraphe>
                                {e.name}<br/>
                                {e.mainCategory}<br/>
                                {e.description}
                            </Paragraphe>
                        </Slide>)}
            </NewCarous>

        );
    }
}
export default Home;
