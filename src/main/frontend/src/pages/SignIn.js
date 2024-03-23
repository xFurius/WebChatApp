import { useState } from "react"
import axios from 'axios'

export default function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        console.log(email, password)

        const authData = {
            email: email,
            password: password,
        }

        axios.post("/api/signIn", authData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
            //errors like wrong email or/and password
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Sign In"/></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}