import PropTypes from 'prop-types'

export default function Statistics(props) {
  const {good, neutral, bad, total, positivePercentage} = props;

  return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li>
        <li>Positiv feedback: {positivePercentage()} %</li>
    </ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage:PropTypes.func.isRequired,
}