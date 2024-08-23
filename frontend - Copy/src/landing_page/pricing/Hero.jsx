function Hero() {
    return (
        <div className="container">
            <div className="row text-center mT-5 p-5 mb-5 border-bottom">
                <h1 style={{ fontSize: "45px" }} className="mt-5">Pricing</h1>
                <p className="fs-4 pt-2 mb-5">Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className="row text-center mT-5 p-5 mb-5 border-bottom">
                <div className="col-4 ">
                    <img src="\public\Images\pricingEquity.svg" alt="" style={{ width: "60%" }} />
                    <h3>Free equity delivery</h3>
                    <p className="pt-3 text-muted lh-lg">All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 ">
                    <img src="\public\Images\intradayTrades.svg" alt="" style={{ width: "60%" }} />
                    <h3>Intraday and F&O trades</h3>
                    <p className="pt-3 text-muted lh-lg">Flat ₹ 20 or 0.03% (whichever is lower) per <br />executed order on intraday trades across<br /> equity, currency, and commodity trades.<br /> Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 ">
                    <img src="\public\Images\pricingEquity.svg" alt="" style={{ width: "60%" }} />
                    <h3>Free direct MF</h3>
                    <p className="pt-3 text-muted lh-lg">All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP<br /> charges.</p>
                </div>
            </div>

        </div>
    );
}

export default Hero;