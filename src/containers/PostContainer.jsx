import React, { Component } from 'react'
import Controls from '../components/controls/controls';
import Display from '../components/display/display';
import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';
import Styles from '../index.css'
import { fetchRequestByMethod } from '../services/utilities'


export default class PostContainer extends Component {
    state = {
        loading: true, 
        apiUrl: '', 
        radioValue: '', 
        jsonInput: '', 
        jsonResults: ['results will display here']
    }
    
    handleUrlChange = ({ target }) => {
        this.setState({ apiUrl: target.value }, () => (console.log(this.state.apiUrl)))
    }; 

    handleRadioChange = async ({ target }) => {
        this.setState({ radioValue: target.value}, () => console.log(this.state.radioValue));   
    }

    handleJsonInputChange = async ({ target }) => {
        this.setState({ jsonInput: target.value})
        console.log(this.state.jsonInput);
    }

    handleSubmit = async (e) => {
        e.preventDefault(); 
        this.setState({ loading: true }); 

        console.log('on submit', 
         this.state.jsonInput,
         this.state.apiUrl, 
         this.state.radioValue
        )

        const jsonResults = await fetchRequestByMethod(
            this.state.apiUrl, 
            this.state.jsonInput, 
            this.state.radioValue
            );

            this.setState({
                jsonResults,
                loading: false,
            });
    };

    render() {
        return (
            <div className={Styles.gridcontainer}>
                <Header />
                <SideBar />
                <Controls 
                    apiUrl={this.state.apiUrl}
                    onApiUrlChange={this.handleUrlChange}
                    onSubmit={this.handleSubmit}
                    onRadioCheck={this.handleRadioChange}
                    jsonInput={this.state.jsonInput}
                    onJsonInputChange={this.handleJsonInputChange}
                /> 
                <Display 
                    jsonResults={this.state.jsonResults}/>
            </div>
        )
    }
}
