function Hero() {
    return (
        <div className="  " style={{ backgroundColor: "#387ed1", color: "white" }}>
            <div className="row mb-5 p-5"  >
                <div className="col-6" style={{ paddingLeft: "150px" }} >
                    <h4 className="pb-5">Support Portal</h4>
                    <h4 className="pb-4">Search for an answer or browse help topics to create a ticket</h4>
                    <p style={{ border: "1px solid white", backgroundColor: "white", borderRadius: "4px" }} className="pb-2 ">
                        <input placeholder="Eg: how do i activate F&O, why is my order getting rejected..." className="p-3"style={{ width: "80%", border: "none",outline:"none" }} />
                        <i class="fa-solid fa-magnifying-glass fa-lg" style={{ paddingLeft: "60px", color: "#b5b5b5", }}></i>
                    </p>
                    <div>
                        <a href="" style={{ color: "white"}} className="link-offset-3">Track account opening </a>
                        <a href="" style={{ paddingLeft: "20px", color: "white" }} className="link-offset-3"> Track segment activation</a>
                        <a href="" style={{ paddingLeft: "20px", color: "white" }} className="link-offset-3"> Intraday margins</a><br /><br />
                        <a href="" style={{ color: "white" }} className="link-offset-3">Kite user manual</a>
                    </div>
                </div>
                <div className="col-6" style={{ paddingLeft: "6px" }}>
                    <a href="" style={{ paddingRight: "250px", color: "white" }} className="d-flex justify-content-end pb-5 link-offset-3">Track tickets</a>
                    <div className="" style={{ paddingLeft: "60px" }}>
                        <h3 className="mt-5">Featured</h3>
                        <a href="" style={{ color: "white" }}>1.Surveillance measure on scrips - July 2024</a><br />
                        <a href="" style={{ lineHeight: "3.5", color: "white" }}>2.Latest Intraday leverages and Square-off timings
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;