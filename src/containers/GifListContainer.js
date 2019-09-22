import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            first3Gifs: []
        }
    }

    submitFn = (searchTerm) => {
        console.log(searchTerm)
        this.getGifs(searchTerm)
        // debugger
    }

    render() {
        return (
            <div>
                <GifSearch onSubmit={this.submitFn}/>
                testing testing 1 2 3 
                <GifList gifs={this.state.first3Gifs}/>
            </div>
        )
    }

    componentDidMount () {
        // http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
        this.getGifs()
    }

    getGifs = async (term = "dog") => {
        let fetched = await fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        let jsonEd = await fetched.json()
        console.log(jsonEd.data)
        // let three = jsonEd.data.slice(0,3)
        // debugger
        await this.updateState(jsonEd.data)
        console.log(this.state.first3Gifs)
    }

    updateState = async (gifs) => {
        this.setState({
            first3Gifs: [...gifs]
        })
    }
 }

export default GifListContainer