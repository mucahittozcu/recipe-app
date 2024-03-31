import Recipe from "./Recipe"


const App = () => {

const YOURAPP_ID = "3116104d"
const YOURAPP_KEY = "081c6256fad6b2fb7dfe5f8ca25a4aa8"

  return (
    <div className="container">
    <Recipe YOURAPP_ID={YOURAPP_ID} YOURAPP_KEY={YOURAPP_KEY}  />

    </div>
  )
}
export default App