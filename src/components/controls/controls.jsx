import React from 'react'; 
import PropTypes from 'prop-types'; 
import Styles from '../../index.css'

const Controls = ({ apiUrl, onSubmit, onApiUrlChange, jsonInput, onJsonInputChange, onRadioCheck }) => (
    <form onSubmit={onSubmit} className={Styles.controlform}>
        <label htmlFor="api-search">URL Here</label>
        <input
            className={Styles.url}
            placeholder="URL"
            id="api-search"
            type="text"
            value={apiUrl}
            onChange={onApiUrlChange}
            aria-label="api-search"
            />

      <div className={Styles.radiobar}>
            
            <input id="get" type='radio' name="crud-buttons" value="get" onChange={onRadioCheck}/>
            <label htmlFor="get">GET</label>

            <input id="put" type='radio' name="crud-buttons" value="put" onChange={onRadioCheck}/>
            <label htmlFor="put">PUT</label>

            <input id="post" type='radio' name="crud-buttons" value="post" onChange={onRadioCheck}/>
            <label htmlFor="post">POST</label>

            <input id="delete" type='radio' name="crud-buttons" value="delete" onChange={onRadioCheck}/>
            <label htmlFor="delete">DELETE</label>

        </div>

        <button aria-label="submit-url" className={Styles.submitbutton}>Submit</button>

        <textarea aria-label="json-body" placeholder="json here" className={Styles.jsonbox} type="json" value={jsonInput}
            onChange={onJsonInputChange} /> 
        </form>    
    ); 

Controls.propTypes = {
    apiUrl: PropTypes.string.isRequired, 
    onApiUrlChange: PropTypes.func.isRequired, 
    onSubmit: PropTypes.func.isRequired, 

}; 

export default Controls; 