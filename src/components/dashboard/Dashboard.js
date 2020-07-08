import React, { Component } from 'react';
import Display from '../design/Display';
import Settings from '../design/Setting';
import { storage } from '../../config/firebaseConfig';

class Dashboard extends Component {

    state = {

        tshirtColor: 'black',
        upperText: 'This is Upper Text',
        lowerText: 'This is Lower Text',
        memeImg: '',
        url: '',
        textSize: 44,
        textColor: "white"

    }

    handleTshirtColor = (e) => {

        this.setState({ tshirtColor: e.target.id });
    }

    handleUpperText = (e) => {

        this.setState({ upperText: e.target.value })
    }

    handleLowerText = (e) => {

        this.setState({ lowerText: e.target.value })
    }

    handleImageUpload = (e) => {
        if (e.target.files[0]) {
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapchot) => {

                    console.log(snapchot);
                },
                (error) => {
                    console.log(error);
                },
                () => {

                    storage.ref('image').child(image.name).getDownloadURL()
                        .then(url => {
                            this.setState({ url });

                        })
                }
            )
        }

    }
    handleTextSize = (e) => {
        this.setState({ textSize: e.target.value })

    }

    formatText() {

        const size = this.state.textSize;
        return parseInt(size);
    }

    handleTextColor = (e) => {

        this.setState({ textColor: e.target.value })
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <Display
                            display={this.state} />
                        textFormat={this.formatText()}
                    </div>
                    <div className="col-lg-4">
                        <Settings
                            color={this.handleTshirtColor}
                            upperText={this.handleUpperText}
                            lowerText={this.handleLowerText}
                            uploadImage={this.handleImageUpload}
                            textSize={this.handleTextSize}
                            textColor={this.handleTextColor}
                        />

                    </div>
                </div>
            </div>
        )

    }

}

export default Dashboard;