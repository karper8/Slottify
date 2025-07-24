import Button from './Button'
import Content from './Content'
import Display from './Display'
import Tickbox from './Tickbox'


const Slide = ({info, heading, para, features,link}) =>{
    return(
        <>
            <Content info={info} heading={heading} para={para} />
            <Display link={link}/>
            <Tickbox value={features[0]}/>
            <Tickbox value={features[1]}/>
            <Tickbox value={features[2]}/>
        </>
    )
}

export default Slide