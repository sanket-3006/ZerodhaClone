function LeftSection({productName , productDescription, imageUrl, tryDemo, lernMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-6">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="col-6 p-3 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="p-3">
                        <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemo} </a>
                        <a href={lernMore} style={{marginLeft:"100px",textDecoration:"none"}}>{lernMore} </a>
                    </div>
                    <div className="p-2">
                        <a href={googlePlay}><img src="\public\Images\googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src="\public\Images\appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;