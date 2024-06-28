import "./AboutWork.scss";

function AboutWork() {

    return (
        <section class="about-work">
            <section class="about-work__center-wrap">
                <h1 class="about-work__title">Work Experiences Include</h1>
                <section class="about-work__container">
                    <section class="about-work__item">
                        <section class="about-work__work">Universal Music Group</section>
                        <section class="about-work__role">Data Scientist</section>
                        <section class="about-work__period">Mar 2022 - Jan 2024</section>
                        <ul class="about-work__detail-container">
                            <li class="about-work__detail">Spearheaded the design, build, and maintenance of end-to-end analytics applications using Python, Selenium, HTML, CSS, SQL, GCP, and API data, saving 1,600+ hours/year and exceeding team revenue goals by 16%</li>
                            <li class="about-work__detail">Led a company-wide ML project, collaborating with engineering and analytics teams to scale Python scripts via Git, SQL, GCP, and Docker, presenting insights that shaped executives' 2024 strategies at the company forum</li>
                            <li class="about-work__detail">Recognized 2x with the Optimistic Award within the Digital Strategy Department in 2022 and 2023</li>
                        </ul>
                    </section>
                    <section class="about-work__item">
                        <section class="about-work__work">Universal Music Group</section>
                        <section class="about-work__role">Junior Data Analyst and Data Analyst</section>
                        <section class="about-work__period">Jul 2020 - Feb 2022</section>
                        <ul class="about-work__detail-container">
                            <li class="about-work__detail">Collaborated with senior leadership and data engineering teams to develop automated tools using Python, SQL, and GCP, which saved $60,000/year in subscription costs and improved data processing efficiency</li>
                            <li class="about-work__detail">Redesigned backend, database implementation, and revenue tools UI, helping team surpass financial targets by 5%</li>
                            <li class="about-work__detail">Mentored junior teammates in coding, cloud, and analysis standards as first hire with team currently at 6 members</li>
                        </ul>
                    </section>
                    <section class="about-work__item">
                        <section class="about-work__work">Environment Canada</section>
                        <section class="about-work__role">Business Systems Analyst Intern</section>
                        <section class="about-work__period">May 2018 - Dec 2019</section>
                        <ul class="about-work__detail-container">
                            <li class="about-work__detail">Crafted technical requirements and system architecture for weather application features, collaborating with 20+ members across development, business, and quality assurance (QA)</li>
                            <li class="about-work__detail">Conducted root cause analysis for 30+ weather system bugs and designed testing protocols for software development, improving system accuracy by 5%</li>
                        </ul>
                    </section>
                    <section class="about-work__item">
                        <section class="about-work__work">Top Olympiads</section>
                        <section class="about-work__role">Full Stack Engineer Intern</section>
                        <section class="about-work__period">May 2017 - Jun 2017</section>
                        <ul class="about-work__detail-container">
                            <li class="about-work__detail">Revamped tutoring website in 2 months using JavaScript, PHP, HTML, CSS, and MySQL GoDaddy databases</li>
                            <li class="about-work__detail">Designed database architecture and UI for web pages, automating grading processes and aligning with feedback</li>
                        </ul>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default AboutWork;