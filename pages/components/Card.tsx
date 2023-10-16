import Styles from "../../styles/Card.module.css";
import React, {useState} from "react";
import {useSpring, animated} from "react-spring";

function Card({imageUrl, title, description, author }) {
    const [show, setShown] = useState(false);
    //
    const props3 = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)"
    });
    return (
        <div className={Styles.wrapper}>
            <h2>Книга для Вас:</h2>
            <animated.div
                className={Styles.card}
                style={props3}
                onMouseEnter={() => setShown(true)}
                onMouseLeave={() => setShown(false)}
            >

                <div className={Styles.content}>
                    <img
                        className={Styles.cardimg}
                        src={imageUrl} alt=""/>
                </div>
                <div className={Styles.content}>
                    <h2>{title}</h2>
                    <p>
                        {author}
                    </p>
                    <p>
                        {description}
                    </p>
                </div>
            </animated.div>
        </div>

    );
}

export default Card;
