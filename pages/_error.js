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
  // const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  // return { statusCode};

  let statusCode;
  // If the res variable is defined it means nextjs
  // is in server side
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    // Something really bad/weird happen and status code
    // cannot be determined.
    statusCode = null;
  }
  return { statusCode };
};

export default Error;
