import React,{useState} from 'react';


const OurTeam = ({data}) => {

    //state

    const [index, setIndex] = useState(0);

    //destructure data

    const {picture, firstName, lastName, email, title} = data[index];

    //Functions

    const leftArrowClick = () => {
        let leftArrow = setIndex(index - 1)
        return leftArrow;
    }

    const rightArrowClick = () => {
        let rightArrow = setIndex(index + 1)
        return rightArrow;
    }

    //JSX return

        return(

            <div>
                
                <div className="container">
            <section className="section">
                <div className="main-text">
                    <h1>Who We Are? Meet Our Team!</h1>
                    <p className="main-small-text">We listen, we discuss, we advise and develop. We love to learn </p>
                </div>
                <div className="team-contener">
                    <div className="team-member">
                        <div className="avatar">
                            <img src={picture} alt={firstName}/>
                        </div>
                        <div className="name">{firstName} {lastName}</div>
                        <div className="position">{title}</div>
                        <div className="text">{email}</div>
                        <div className="social-icons">
                            <ul className="social-ul">
                                <li><ion-icon name="logo-facebook"></ion-icon></li>
                                <li><ion-icon name="logo-twitter"></ion-icon></li>
                                <li><ion-icon name="logo-pinterest"></ion-icon></li>
                                <li><ion-icon name="logo-google"></ion-icon></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <button onClick={leftArrowClick} className="btn left-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>
                    <button onClick={rightArrowClick} className="btn right-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></button>
                </div>
            </section>
        </div>
            </div>
        );
}


export default OurTeam;