import PropTypes from 'prop-types'
import s from "components/FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
  const { onGoodFeedback, onNeutralFeedback, onBadFeedback } = props;
  return (
    <ul className={s.list}>
      <li className={s.item}><button className={s.button} type='button' name='good' onClick={onGoodFeedback} >Good</button></li>

      <li className={s.item}><button className={s.button} type='button' name='neutral' onClick={onNeutralFeedback} >Neutral</button></li>

      <li className={s.item}><button className={s.button} type='button' name='bad' onClick={onBadFeedback} >Bad</button></li>
    </ul>
  )
}

FeedbackOptions.propTypes={
  onGoodFeedback: PropTypes.func.isRequired,
  onNeutralFeedback: PropTypes.func.isRequired,
  onBadFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;