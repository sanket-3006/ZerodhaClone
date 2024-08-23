function RightSection({productName,productDescription,imageUrl,lernMore}) {
    return (
        <div className="container mt-5">
            <div className="row mt-5 d-flex align-items-center">
            <div className="col-1 p-5"></div>
                <div className="col-4 p-5 " >
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="p-3">
                        <a href={lernMore} style={{ textDecoration: "none" }}>{lernMore} </a>
                    </div>                 
                </div>
                <div className="col-1 p-5"></div>
                <div className="col-5">
                    <img src={imageUrl} alt="" />
                </div>
            </div>
            <div className="col-1 p-5"></div>
        </div>
    );
}

export default RightSection;