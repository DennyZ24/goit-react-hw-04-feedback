import PropTypes from 'prop-types'
import s from "components/FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
  const { onFeedbackClick } = props;
  return (
    <ul className={s.list}>
      <li className={s.item}><button className={s.button} type='button' name='good' onClick={onFeedbackClick} >Good</button></li>

      <li className={s.item}><button className={s.button} type='button' name='neutral' onClick={onFeedbackClick} >Neutral</button></li>

      <li className={s.item}><button className={s.button} type='button' name='bad' onClick={onFeedbackClick} >Bad</button></li>
    </ul>
  )
}

FeedbackOptions.propTypes={
  onFeedbackClick: PropTypes.func.isRequired,
}

export default FeedbackOptions;