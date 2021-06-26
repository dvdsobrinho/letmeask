import { ReactNode } from "react"
import cx from 'classnames'

import '../styles/question.scss'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: ReactNode;
    isHighlighted?: ReactNode;
    isAproved?: ReactNode;

}


export function Question ({content, author, children, isAnswered = false, isHighlighted = false, isAproved = false}: QuestionProps) {
    return (
     <div className={cx('question', {answered: isAnswered}, {highlighted: isHighlighted && !isAnswered}, {noaproved: !isAproved} )}>
         <p>{content}</p>
         <footer>
             <div className="user-info">
                 <img src={author.avatar} alt={author.name} />
                 <span>{author.name}</span>
             </div>
             <div>{children}</div>
         </footer>
     </div>   
    )
}