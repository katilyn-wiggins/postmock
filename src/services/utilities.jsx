export const fetchRequestByMethod = async (url, jsonBody, method ) => {
    if( method.toUpperCase() === 'GET' || 'DELETE') {
    const res =  
      await fetch(url
    , {
        method: method.toUpperCase(), 
    })
    const results = await res.json();
    // console.log(results, 'json results');
  
    return results;

    } else {
        const res =  
          await fetch(url
        , {
            method: method.toUpperCase(),
            body: jsonBody,  
        })
        const results = await res.json();
        // console.log(results, 'json results');
      
        return results;
        }
  };

