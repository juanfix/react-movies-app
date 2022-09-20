import { LoginForm } from "../components"

export const LoginPage = () => {  
  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <LoginForm />
        </div>
        <div className="col-2"></div>
      </div>
    </>
  )
}
