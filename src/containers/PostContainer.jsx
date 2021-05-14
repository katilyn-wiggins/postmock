import React, { Component } from 'react'
import Controls from '../components/controls/controls';
import Header from '../components/header/header';

export default class PostContainer extends Component {
    state = {
        loading: true, 
        apiUrl: '', 
    }
    
    handleUrlChange = ({ target }) => {
        this.setState({ apiUrl: target.value })
    }; 

    handleSubmit = async (e) => {
        e.preventDefault(); 

        this.setState({ loading: true }); 
    
    }



    render() {
        return (
            <div>
                <Header />
                <Controls 
                    mugName={this.state.apiUrl}
                    onMugNameChange={this.handleUrlChange}
                    onSubmit={this.handleSubmit}
                /> 
            </div>
        )
    }
}
