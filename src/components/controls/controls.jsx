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
        <table className={Styles.table}>
        <tbody>
            <tr>
                <td><label className={Styles.label}><input className={Styles.radio} type='radio' name="crud-buttons" value="get" onChange={onRadioCheck}/>GET</label></td>
                <td><label className={Styles.label}><input className={Styles.radio} type='radio' name="crud-buttons" value="put" onChange={onRadioCheck}/>PUT</label></td>
                <td><label className={Styles.label}><input className={Styles.radio} type='radio' name="crud-buttons" value="post" onChange={onRadioCheck}/>POST</label></td>
                <td><label className={Styles.label}><input className={Styles.radio} type='radio' name="crud-buttons" value="delete" onChange={onRadioCheck}/>DELETE</label></td>
            </tr>
         </tbody>
         </table>

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