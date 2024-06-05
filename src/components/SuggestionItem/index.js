// Write your code here
const Suggestion = props => {
  const {value} = props
  const {suggestion} = value

  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default Suggestion
