import { useState } from "react"

export default function SignUp(){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log(firstName, lastName, email, password)
  }

  document.title = "SignUp"
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
            </label>
            <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
            <label>
              Last Name:
            </label>
            <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
            <label>
              Email:
            </label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
            <label>
              Password
            </label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" />
          </form>
        </div>
      )
};

//     <div th:if="${param.error}">
//         <p>USER ALREADY EXISTS</p>
//     </div>
//     <div class="formDiv">
//     <form th:action="@{/register}" method="post" th:object="${user}">
//         <table>
//         <tr>
//             <td><input type="text" th:field="*{firstName}" placeholder="First Name" class="formInput"></td>
//             <td th:if="${#fields.hasErrors('firstName')}" th:errors="*{firstName}"></td>
//         </tr>
//         <tr>
//             <td><input type="text" th:field="*{lastName}" placeholder="Last Name" class="formInput"></td>
//             <td th:if="${#fields.hasErrors('lastName')}" th:errors="*{lastName}"></td>
//         </tr>
//         <tr>
//             <td><input type="text" th:field="*{email}" placeholder="Email" class="formInput"></td>
//             <td th:if="${#fields.hasErrors('email')}" th:errors="*{email}"></td>
//         </tr>
//         <tr>
//             <td><input type="password" th:field="*{password}" placeholder="Password" class="formInput"></td>
//             <td th:if="${#fields.hasErrors('password')}" th:errors="*{password}"></td>
//         </tr>
//         <tr>
//             <td><input type="submit" value="REGISTER" class="buttonSubmit"></td>
//         </tr>
//     </table>
//     </form>
//     </div>
// </body>
// </html>