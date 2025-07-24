const Display = ({link}) => {


    if (link != null && link.endsWith('mp4')){
        return(
            <div>
                <video src={link} muted='muted'controlslist="nodownload" autoplay="" loop=""/>
            </div>
        )

    }

    return(
        <div>
            <img src={link} />
        </div>
    )
}

export default Display