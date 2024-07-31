import "./AboutWork.scss";
import {useState} from "react";
import {Lyrics, Headphones, Public, School, Place} from '@mui/icons-material';

function AboutWork() {
    const [workClick1, setworkClick1] = useState(false);
    const [workClick2, setworkClick2] = useState(false);
    const [workClick3, setworkClick3] = useState(false);
    const [workClick4, setworkClick4] = useState(false);

    const handleWorkClick1 = () => {
        setworkClick1(!workClick1)
    }
    const handleWorkClick2 = () => {
        setworkClick2(!workClick2)
    }
    const handleWorkClick3 = () => {
        setworkClick3(!workClick3)
    }
    const handleWorkClick4 = () => {
        setworkClick4(!workClick4)
    }

    return (
        <section class="about-work">
            <section class="about-work__center-wrap">
                <h1 class="about-work__title">Work Experiences</h1>
                <section class="about-work__container">
                    <section class="about-work__item">
                        <section class="about-work__preview-container">
                            <section class="about-work__preview">
                                <p>Data Scientist @</p>
                                <section class="about-work__company-container">
                                    <p class="about-work__company">Universal Music Group</p>
                                    <Lyrics style={{color: 'white'}}/>
                                </section>
                            </section>
                            {!workClick1 && (
                                <p class="about-work__preview-logo about-work__preview-logo--off" onClick={handleWorkClick1}>+</p>
                            )}
                            {workClick1 && (
                                <p class="about-work__preview-logo about-work__preview-logo--on" onClick={handleWorkClick1}>-</p>
                            )}
                        </section>
                    </section>
                    {workClick1 && (
                        <section class="about-work__detail-container">
                            <section class="about-work__location-container">
                                <Place style={{color: 'white'}}/>
                                <p class="about-work__location">Toronto, Canada</p>
                            </section>
                            <p class="about-work__role">Core Responsibilities: Automation, Machine Learning Deployment, Analytical Tools Development, Industry Deep Dives, Data Engineering</p>
                            <section class="about-work__skill-container">
                                <p class="about-work__skill">Python</p>
                                <p class="about-work__skill">SQL</p>
                                <p class="about-work__skill">Selenium</p>
                                <p class="about-work__skill">GCP</p>
                                <p class="about-work__skill">Docker</p>
                                <p class="about-work__skill">Git</p>
                                <p class="about-work__skill">HTML</p>
                            </section>
                        </section>
                    )}
                    <section class="about-work__item">
                        <section class="about-work__preview-container">
                            <section class="about-work__preview">
                                <p>Data Analyst Roles @</p>
                                <section class="about-work__company-container">
                                    <p class="about-work__company">Universal Music Group</p>
                                    <Headphones style={{color: 'white'}}/>
                                </section>
                            </section>
                            {!workClick2 && (
                                <p class="about-work__preview-logo about-work__preview-logo--off" onClick={handleWorkClick2}>+</p>
                            )}
                            {workClick2 && (
                                <p class="about-work__preview-logo about-work__preview-logo--on" onClick={handleWorkClick2}>-</p>
                            )}
                        </section>
                    </section>
                    {workClick2 && (
                        <section class="about-work__detail-container">
                            <section class="about-work__location-container">
                                <Place style={{color: 'white'}}/>
                                <p class="about-work__location">Toronto, Canada</p>
                            </section>
                            <p class="about-work__role">Core Responsibilities: Automation, Analytical Tools Development, Industry Deep Dives, Machine Learning</p>
                            <section class="about-work__skill-container">
                                <p class="about-work__skill">Python</p>
                                <p class="about-work__skill">SQL</p>
                                <p class="about-work__skill">GCP</p>
                                <p class="about-work__skill">Excel</p>
                                <p class="about-work__skill">Tableau</p>
                                <p class="about-work__skill">Looker</p>
                            </section>
                        </section>
                    )}
                    <section class="about-work__item">
                        <section class="about-work__preview-container">
                            <section class="about-work__preview">
                                <p>Business Systems Analyst Intern @</p>
                                <section class="about-work__company-container">
                                    <p class="about-work__company">Environment Canada</p>
                                    <Public style={{color: 'white'}}/>
                                </section>
                            </section>
                            {!workClick3 && (
                                <p class="about-work__preview-logo about-work__preview-logo--off" onClick={handleWorkClick3}>+</p>
                            )}
                            {workClick3 && (
                                <p class="about-work__preview-logo about-work__preview-logo--on" onClick={handleWorkClick3}>-</p>
                            )}
                        </section>
                    </section>
                    {workClick3 && (
                        <section class="about-work__detail-container">
                            <section class="about-work__location-container">
                                <Place style={{color: 'white'}}/>
                                <p class="about-work__location">Toronto, Canada</p>
                            </section>
                            <p class="about-work__role">Core Responsibilities: Developing Canadian Weather Systems and Feature Integrations (Systems Engineering Perspective)</p>
                            <section class="about-work__skill-container">
                                <p class="about-work__skill">Data Modelling</p>
                                <p class="about-work__skill">Process Optimization</p>
                                <p class="about-work__skill">Debugging</p>
                                <p class="about-work__skill">System Architecture</p>
                                <p class="about-work__skill">Specifications Documents</p>
                            </section>
                        </section>
                    )}
                    <section class="about-work__item">
                        <section class="about-work__preview-container">
                            <section class="about-work__preview">
                                <p>Full Stack Developer Intern @</p>
                                <section class="about-work__company-container">
                                    <p class="about-work__company">Top Olympiads</p>
                                    <School style={{color: 'white'}}/>
                                </section>
                            </section>
                            {!workClick4 && (
                                <p class="about-work__preview-logo about-work__preview-logo--off" onClick={handleWorkClick4}>+</p>
                            )}
                            {workClick4 && (
                                <p class="about-work__preview-logo about-work__preview-logo--on" onClick={handleWorkClick4}>-</p>
                            )}
                        </section>
                    </section>
                    {workClick4 && (
                        <section class="about-work__detail-container">
                            <section class="about-work__location-container">
                                <Place style={{color: 'white'}}/>
                                <p class="about-work__location">Toronto, Canada</p>
                            </section>
                            <p class="about-work__role">Core Responsibilities: Frontend Development, Backend Development, Deployment</p>
                            <section class="about-work__skill-container">
                                <p class="about-work__skill">JavaScript</p>
                                <p class="about-work__skill">SQL</p>
                                <p class="about-work__skill">HTML</p>
                                <p class="about-work__skill">CSS</p>
                                <p class="about-work__skill">PHP</p>
                                <p class="about-work__skill">GoDaddy</p>
                            </section>
                        </section>
                    )}    
                </section>
            </section>
        </section>
    )
}

export default AboutWork;