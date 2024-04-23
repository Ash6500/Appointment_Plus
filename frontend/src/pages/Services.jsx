import {services} from '../assets/data/services.js'
import ServiceCard from "../components/Services/ServiceCard.jsx";

const Services = () => {
    return (
        <>
            <section>
                <div className={'container'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'}>
                        {services.map((item, index) => (
                            <ServiceCard item={item} key={index} index={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;