import PropTypes from 'prop-types'
import s from "components/FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
  const { onLeaveFeedback } = props;
  return (
    <ul className={s.list}>
      <li className={s.item}><button className={s.button} type='button' name='good' onClick={onLeaveFeedback} >Good</button></li>
      <li className={s.item}><button className={s.button} type='button' name='neutral' onClick={onLeaveFeedback} >Neutral</button></li>
      <li className={s.item}><button className={s.button} type='button' name='bad' onClick={onLeaveFeedback} >Bad</button></li>
    </ul>
  )
}

FeedbackOptions.propTypes={
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;