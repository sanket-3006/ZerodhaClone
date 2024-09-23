function Universe() {
    return (
        <div className="container mt-5">
            <div className="row mt-5 text-center">
                <h1 className="pb-3 mt-5">The Zerodha Universe</h1>
                <p>TExtend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-5 mb-5">
                    <img src="\public\Images\smallcaseLogo.png" style={{width:"50%"}}/>
                    <p className="text-small text-muted p-3 mb-5">Thematic investment platform</p>

                    <img src="\public\Images\zerodhaFundhouse.png" style={{width:"50%"}} />
                    <p className="text-small text-muted  p-3">Thematic investment platform</p>
                </div>
                <div className="col-4 p-5 mb-5">
                    <img src="\public\Images\streakLogo.png" style={{width:"50%"}} />
                    <p className="text-small text-muted  mb-5 p-3">Algo & strategy platform
                    </p>

                    <img src="\public\Images\goldenpiLogo.png" style={{width:"50%"}}/>
                    <p className="text-small text-muted p-3">Thematic investment platform</p>
                </div>
                <div className="col-4 p-5 mb-5">
                    <img src="\public\Images\sensibullLogo.svg" style={{width:"50%"}} />
                    <p className="text-small text-muted mb-5 p-3">Options trading platform
                    </p>

                    <img src="\public\Images\dittoLogo.png" style={{width:"50%"}}/>
                    <p className="text-small text-muted  p-3">Thematic investment platform</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 ' style={{width:"15%",margin:"0 auto"}}>Sign up Now</button>
            </div>
        </div>
    );
}

export default Universe;