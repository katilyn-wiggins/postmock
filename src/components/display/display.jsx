import React from 'react'; 
import Styles from '../../index.css'

const Display = ( {jsonResults} ) => {
    console.log(jsonResults);
    return(

        <pre className={Styles.display}>{JSON.stringify(jsonResults, null, 2)}</pre>
    )
}

export default Display; 