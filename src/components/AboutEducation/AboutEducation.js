import "./AboutEducation.scss";
import {useState} from "react";
import {School, Place} from '@mui/icons-material';

function AboutEducation() {
    const [educationClick1, setEducationClick1] = useState(false);
    const [educationClick2, setEducationClick2] = useState(false);

    const handleEducationClick1 = () => {
        setEducationClick1(!educationClick1)
    }
    const handleEducationClick2 = () => {
        setEducationClick2(!educationClick2)
    }

    return (
        <section class="about-education">
            <section class="about-education__center-wrap">
                <h1 class="about-education__title">Educational Background</h1>
                <section class="about-education__container">
                    <section class="about-education__item"  onClick={handleEducationClick1}>
                        <section class="about-education__preview-container">
                            <section class="about-education__preview">
                                <p>Industrial Engineering @</p>
                                <section class="about-education__school-container">
                                    <p class="about-education__school">University of Toronto</p>
                                    <School style={{color: 'white'}}/>
                                </section>
                            </section>
                            {!educationClick1 && (
                                <p class="about-education__preview-logo about-education__preview-logo--off">+</p>
                            )}
                            {educationClick1 && (
                                <p class="about-education__preview-logo about-education__preview-logo--on">-</p>
                            )}
                        </section>
                    </section>
                    {educationClick1 && (
                        <section class="about-education__detail-container">
                            <section class="about-education__location-container">
                                <Place style={{color: 'white'}}/>
                                <p class="about-education__location">Toronto, Canada</p>
                            </section>
                            <p class="about-education__degrees">Business Minor and Artificial Intelligence Certificate</p>
                            <section class="about-education__skill-container">
                                <p class="about-education__skill">Object Oriented Programming</p>
                                <p class="about-education__skill">Data Structures and Algorithmns</p>
                                <p class="about-education__skill">Machine Learning</p>
                                <p class="about-education__skill">Deep Learning</p>
                                <p class="about-education__skill">Statistics</p>
                                <p class="about-education__skill">Operations Research</p>
                            </section>
                        </section>
                    )}
                    <section class="about-education__item" onClick={handleEducationClick2}>
                        <section class="about-education__preview-container">
                            <section class="about-education__preview">
                                <p>Software Engineering @</p>
                                <section class="about-education__school-container">
                                    <p class="about-education__school">BrainStation</p>
                                    <School style={{color: 'white'}}/>
                                </section>
                            </section>
                            {!educationClick2 && (
                                <p class="about-education__preview-logo about-education__preview-logo--off">+</p>
                            )}
                            {educationClick2 && (
                                <p class="about-education__preview-logo about-education__preview-logo--on">-</p>
                            )}
                        </section>
                    </section>
                    {educationClick2 && (
                        <section class="about-education__detail-container">
                            <section class="about-education__location-container">
                                <Place style={{color: 'white'}}/>
                                <p class="about-education__location">Toronto, Canada</p>
                            </section>
                            <p class="about-education__degrees">Modern Web Development Frameworks</p>
                            <section class="about-education__skill-container">
                                <p class="about-education__skill">Frontend</p>
                                <p class="about-education__skill">Backend</p>
                                <p class="about-education__skill">Web APIs</p>
                                <p class="about-education__skill">DevOps and Deployment</p>
                            </section>
                        </section>
                    )}
                </section>
            </section>
        </section>
    )
}

export default AboutEducation;