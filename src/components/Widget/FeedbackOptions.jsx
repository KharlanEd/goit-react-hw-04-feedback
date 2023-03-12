import css from '../Widget/interface.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    // if (options.length == 0) return null;
    
    <div className={css.container_btn}>
        {options.map(option => (
           
            <button
                key={option}
                className={css.btn}
                type="button"
                onClick={() => onLeaveFeedback(option)}
            > {option}</button>
        ))}
    </div>
    
);