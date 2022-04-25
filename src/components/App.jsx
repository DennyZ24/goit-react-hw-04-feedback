import {useState} from 'react'
import Section from "components/Section/Section";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleGoodFeedbackClick = () => {
    setGood(state => state + 1);
  };

  const handleNeutralFeedbackClick = () => {
    setNeutral(state => state + 1);
  };

  const handleBadFeedbackClick = () => {
    setBad(state => state + 1);
  };

   const countTotalFeedback = () => {
    const total = good + bad + neutral;
    return total
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
 
    const positiveFeedbackPercentage = (good * 100) / total;
    const fixedcount = positiveFeedbackPercentage.toFixed(2);
    return positiveFeedbackPercentage ? fixedcount : 0
  };

  const feedbackArr = [good, neutral, bad];

  const availabilityOfFeedback = feedbackArr.find(feedback => feedback !== 0);
  
  return (
    <>
      <Section title='Please liave feedback'>
        <FeedbackOptions onGoodFeedback={handleGoodFeedbackClick} onNeutralFeedback={handleNeutralFeedbackClick} onBadFeedback={handleBadFeedbackClick} />
      </Section>
      

      {availabilityOfFeedback ?
        <Section title='Statistics'>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad} 
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />  
        </Section> :
        <Section>
          <Notification message={"There is no feedback"} />
        </Section>}
    </> 
  )
}

export default App;
  
// class App extends Component { 
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

  // handleClick = ({ currentTarget: {name}}) => {
  //   this.setState(
  //     prevState => {
  //       return {
  //         [name]: prevState[name] + 1,
  //       }
  //     }
  //   )
  //  }

  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
 
  //   const positiveFeedbackPercentage = (this.state.good * 100) / total;
  //   const fixedcount = positiveFeedbackPercentage.toFixed(2);
  //   return positiveFeedbackPercentage ? fixedcount : 0
  // };

  //  countTotalFeedback = () => {
  //   const { good, bad, neutral} = this.state
  //   const total = good + bad + neutral;
  //   return total
  // };



//   render() {
//     const { good, neutral, bad } = this.state;
    // const feedbackArr = [good, neutral, bad];
    // const availabilityOfFeedback = feedbackArr.find(feedback => feedback !==0)

//     return (
      // <>
      //   <Section title='Please liave feedback'>
      //     <FeedbackOptions onLeaveFeedback={this.handleClick} />
      //   </Section>
        

      //   {availabilityOfFeedback ?
      //     <Section title='Statistics'>
      //     <Statistics
      //       good={this.state.good}
      //       neutral={this.state.neutral}
      //       bad={this.state.bad} 
      //       total={this.countTotalFeedback}
      //       positivePercentage={this.countPositiveFeedbackPercentage}
      //     />  
      //     </Section> :
      //     <Section>
      //       <Notification message={"There is no feedback"} />
      //     </Section>}
      // </> 
//     )
//   }
// }