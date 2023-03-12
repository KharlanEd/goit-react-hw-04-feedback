import {useState} from "react";
import css from '../Widget/interface.module.css'
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";
import { Section } from "./Section";
import { Statistics } from "./statisticts";



export  function Interface()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
    
   const onLeaveFeedback = event => {
   const counter = prevState => prevState + 1;
    switch (event) {
      case 'good':
        setGood(counter);
        break;
      case 'neutral':
        setNeutral(counter);
        break;
      case 'bad':
        setBad(counter);
        break;
      default:
    }
    };
    
  const countTotalFeedback = good + neutral + bad;
 
 const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);
  


return (<div className={css.container}>
            
            <Section title="Please leave your feedback" />
          <FeedbackOptions
            options={['good','neutral','bad']}
            onLeaveFeedback={onLeaveFeedback} />
            
            {countTotalFeedback > 0 && (
             <Section title="Statistics">
            
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                average={countPositiveFeedbackPercentage}
              />
            </Section>
            )}

            {countTotalFeedback === 0 && (
          <Notification message="No feedback given"/>
        )}
        </div >
           
        )
        
    }
    


