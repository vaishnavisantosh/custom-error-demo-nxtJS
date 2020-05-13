
import Router from 'next/router'
function Error({ statusCode }) {
  return (
    <>
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
     <button type="button" onClick={() => Router.reload()}>
     Reload 
   </button>
   {
     window.setTimeout(()=>{Router.reload()},5000)
   }
  </>);
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
