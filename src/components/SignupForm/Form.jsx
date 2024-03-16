import { useEffect, useState } from "react"

export const Form = () => {
    // state = {
    //     name: '',
    //     password: ''
    // }
    
    // handleChange = () => {
    //     this.setState((name: e.currentTarget.value))
    // }

    useEffect(() => {
        console.log(name);
        console.log('Виклик useeffect');
    })

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    handleChange = (e) => {
        const name = e.currentTarget.name
        switch (name) {
            case 'name':
                setName(e.currentTarget.value)
                return;
            case 'password':
                setPassword(e.currentTarget.value)
                return;
        
            default:
                return;
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        e.currentTarget.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" name="name" value={name}/>
            </label>
            <br />
            <label>
                Password
                <input type="password" name="password" value={password}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}