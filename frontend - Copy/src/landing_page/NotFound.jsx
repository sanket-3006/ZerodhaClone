function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <h1 className='mt-5'>404 Not Found</h1>
            <p>Sorry, the page you are looking for those not exits. </p>
            {/* ya component kam ahe ki jar naslela route koni search kela tr output madhe error show karaycha */}
        </div>
    </div>
     );
}

export default NotFound;