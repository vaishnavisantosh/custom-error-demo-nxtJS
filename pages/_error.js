
import Router from 'next/router'
function Error({ statusCode }) {
  return (
    <div>
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
     <button type="button" onClick={() => Router.reload()}>
     Reload 
   </button>
   {/* {
     window.setTimeout(function(){Router.reload},5000)
   } */}
  
  </div>);
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
