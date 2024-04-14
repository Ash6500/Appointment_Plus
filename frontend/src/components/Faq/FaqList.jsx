import {faqs} from './../../assets/data/faqs.js'
import FaqItem from "./FaqItem.jsx";

const FaqList = () => {
    return(
        <ul className={'mt-[38px]'}>
            {faqs.map((item, index) => (
                <FaqItem key={index} item={item}/>
            ))}
        </ul>
    );
};

export default FaqList;