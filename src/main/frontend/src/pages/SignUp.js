import { useState } from "react"
import axios from 'axios'

//add form validation


// useEffect(() => {
//   axios.get("/signUp").catch(err => window.location.reload() /*zamiast window.location.reload() po prostu redirect na "/signIn"*/) //stupid way but it works //tutaj bedzie dodatkowo header z tokenem i jak token bedzie zly to wywola sie catch
// }, [])


export default function SignUp(){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailExists, setEmailExists] = useState(false)

  function handleSubmit(e){
    e.preventDefault()

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }

    axios.post("/api/signUp", user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err =>{
      console.log(err.response)
      //email exists in db
      if(err.response.status === 302){
        setEmailExists(true)
      }
    })
  }

  document.title = "SignUp"
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td><label>First Name:</label></td>
                <td><input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/></td>
              </tr>
              <tr>
                <td><label>Last Name:</label></td>
                <td><input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/></td>
              </tr>
              <tr>
                <td><label>Email:</label></td>
                <td><input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/></td>
                {emailExists && <td>Email already in use</td>}
              </tr>
              <tr>
                <td><label>Password</label></td>
                <td><input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/></td>
              </tr>
              <tr>
                <td><input type="submit" value="SignUp"/></td>
              </tr>
            </table>
          </form>
        </div>
      )
};