import React from 'react';

class Rating extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            increasing: false,
            decreasing: false
        };
    }
    componentWillReceiveProps(nextProps){
        let newRating = nextProps.rating;
        let currentRating = this.props.rating;
        this.setState({
            increasing: (newRating > currentRating),
            decreasing: (newRating < currentRating)
        })
    }
    render() {
        let trend = 'stable';
        if (this.state.increasing) {
            trend = 'increasing';
        } else if (this.state.decreasing) {
            trend = 'decreasing';
        }

        return (
            <div>
                <p>Rating: {this.props.rating}</p>
                <p>Trend: {trend}</p>
            </div>
        )
    }
}

export default Rating;