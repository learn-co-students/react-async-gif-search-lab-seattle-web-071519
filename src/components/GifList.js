import React, {Component} from 'react'

class GifList extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        // debugger
    }

    render() {
        return (
                <ul>
                    {this.props.gifs.map(gif => {
                        return <li key={gif.id}><img alt="gif" src={gif.images.original.url}></img></li>
                    })}
                </ul>
        )
    }
}

export default GifList