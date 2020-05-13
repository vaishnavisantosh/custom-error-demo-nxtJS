import Router from 'next/router';
import {useEffect} from 'react';
function Error({ statusCode,err }) {
  
  useEffect(()=>{
    window.setTimeout(function(){window.location.reload()},5000)
  })
  
  return (
    <div>
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server 
           error : ${err} `
        : "An error occurred on client"}
    </p>
     <button type="button" onClick={() => Router.reload()}>
     Reload 
   </button>
  </div>);
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode,err };
};

export default Error;
