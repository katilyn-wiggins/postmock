import React from 'react'; 
import PropTypes from 'prop-types'; 

const Controls = ({ apiUrl, onSubmit, onApiUrlChange }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor="api-search">URL Here</label>
        <input
            id="api-endpoint"
            type="text"
            value={apiUrl}
            onChange={onApiUrlChange}
            />
        <button aria-label="submit-url">Submit</button>
        </form>    
    ); 

Controls.propTypes = {
    apiUrl: PropTypes.string.isRequired, 
    onApiUrlChange: PropTypes.string.isRequired, 
    onSubmit: PropTypes.func.isRequired, 

}; 

export default Controls; 