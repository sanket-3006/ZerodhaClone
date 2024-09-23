function Team() {
    return ( 
        <div className="container">
            <div className="row mt-5 mb-5 border-top">
                <h1 className="p-5 text-center" style={{fontSize:"2.5rem"}}>People</h1>
                <div className="col-6 p-3 text-center ">
                   <img src="\Images\nithinKamath.jpg" alt="" className="" style={{borderRadius:"100%",width:"50%"}}/>
                   <p className="p-3  mt-3 lh-" > <h3> Nithin Kamath </h3>
                   Founder, CEO</p>
                </div>
                <div className="col-6 p-3 text-start">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p>

                    <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>  Playing basketball is his zen.</p>
                    <p>  Connect on <a href="" className="text-decoration-none">Homepage</a>  
                                   / <a href="" className="text-decoration-none">TradingQnA</a> 
                                   / <a href="" className="text-decoration-none">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;