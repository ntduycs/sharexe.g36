import React, { Component } from 'react'
import axios from 'axios';

import './BookCarPage.css';

export default class BookCarPage extends Component {
    state = {
        trips: []
    }
    
    componentDidMount = () => {
        axios.get('/api/trips/all').then(({data}) => {
            this.setState({trips: data.content});
        }).catch((err) => alert(err));
    }

    bookOnSubmit = (tripID) => {
        axios.post('/api/trips/join/' + tripID, {}, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
        .then((err) => alert("Join trip successfully"))
        .catch((err) => alert("Fail to join trip"))
    }

    render() {
        return (
            <div className="BookContainer">

            {
                this.state.trips.map(trip => (
                    <div className="BookItem">
                    <div style={{textAlign:'center'}}>
                        <div class="author__avatar">
                            <img src="images/usr_avatar.png" alt="user avatar" />
                        </div>
                        <p >{trip.createdBy}</p>
                    </div>

                    <div>
                        <p>From: <b>{trip.from}</b> - To: <b>{trip.to}</b></p>
                        <p>Price: {trip.price}$ - # Seats: {trip.numOfPeople} - Start at: {new Date(trip.begin).toLocaleTimeString()}</p>
                    </div>

                    <div>
                        <button class="btn btn--round" type="submit" onClick={() => this.bookOnSubmit(trip.id)}>Book</button>
                    </div>
                </div>
                ))
            }

            </div>
        )
    }
}
