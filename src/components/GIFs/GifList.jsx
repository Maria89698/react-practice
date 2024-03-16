import { PureComponent } from "react";

export class GifList extends PureComponent {
    state = {
        gif: '',
        error: null,
        status: 'resolved'
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.name!==this.props.name) {
            this.setState({status: 'pending', gif: null})
            fetch(`https://pokeapi.co/api/v2/gif/${this.props.name}`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(new Error (`GIF з іменем ${this.props.name} не знайдено!`))
                }
                return res.json()
            })
            .then(gif => {this.setState({gif: gif, status: 'resolved'})})
            .catch(error => this.setState({error: error, status: 'rejected'}))
        }
    }

    render(){
        const {gif, status, error} = this.state
        const {gifs} = this.props

        if (status === 'idle') {return <p>Про що має бути GIF?</p>}
        if (status === 'pending') {return <p>Loading...</p>}
        if (status === 'rejected') {return <div>{error.message}</div>}
        if (status === 'resolved') {
            return <ul>
                {gif.length || gifs.map(gif => {
                    console.log(gif);
                    return <li>
                        <img width="250px" src={gif.images.original.url} alt={gif.id} />
                    </li>
                })}
            </ul>
        }
    }
}