import String from './String'
import Value from './Value'

const Info = ({string, value}) => {
    return(
        <div>
            <String string={string} />
            <Value value={value} />
        </div>
    )
}

export default Info