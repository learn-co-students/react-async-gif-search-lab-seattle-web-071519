import React, {Component} from 'react'

class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    updateState = (event) => {
        console.log(event)
        // debugger
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSearch = (event) => {
        // debugger
        event.preventDefault()
        this.props.onSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <form>
                <input type="search" id="search" onChange={this.updateState}></input>
                <button onClick={this.handleSearch}>Search</button>
            </form>
        )
    }
}

export default GifSearch