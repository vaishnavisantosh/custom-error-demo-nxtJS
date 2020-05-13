import Router from 'next/router';
import {useEffect} from 'react';
function Error({ statusCode}) {
  
  useEffect(()=>{
    window.setTimeout(function(){window.location.reload()},5000)
  })
  
  return (
    <div>
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server `
        : "An error occurred on client"}
    </p>
     <button type="button" onClick={() => Router.reload()}>
     Reload 
   </button>
  </div>);
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode};
};

export default Error;
