// components/DigitalTwinArticle.tsx

import styles from "@/styles/pricing.module.css"; // Import du module CSS

type DigitalTwinArticleProps = {
  type: "Startup - SME" | "Industry - Enterprise";
};

const DigitalTwinArticle: React.FC<DigitalTwinArticleProps> = ({ type }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>
        {type === "Startup - SME" ? (
          <>
            <header className={styles.header}>
              <h1 className={styles.title}>
                You have a concept, process, or tech project you want to visualize?
              </h1>
              <p className={styles.subtitle}>
                Our digital twin service transforms your ideas into a concrete visual model. Whether you need to test your concept, build a proof of concept (PoC), or enhance your communication on your new tech, our solution helps you.
              </p>
            </header>

            <article className={styles.article}>
              <ul>
                <li className={styles.paragraph}>
                  <strong>Bring Your Ideas to Life:</strong> Create an immersive visual model of your projects and processes for greater clarity and understanding.
                </li>
                <li className={styles.paragraph}>
                  <strong>Test and Validate Quickly:</strong> Use the digital twin to experiment and refine your ideas even before development starts.
                </li>
                <li className={styles.paragraph}>
                  <strong>Enhance Your Communication:</strong> Present a tangible product or service that engages and convinces clients, investors, and partners.
                </li>
              </ul>

              <hr />
              <h2 className={styles.sectionTitle}>Our Process</h2>
              <ol>
                <li className={styles.paragraph}>
                  <strong>We understand your idea:</strong> In-depth analysis of your process or concept to ensure accurate, tailored modeling
                </li>
                <li className={styles.paragraph}>
                  <strong>Digital Twin Creation:</strong> Development of an interactive or visual prototype, customized to meet your business's unique needs
                </li>
                <li className={styles.paragraph}>
                  <strong>Marketing Customization:</strong> Tailoring models into a compelling marketing asset that’s visually engaging and easy to share
                </li>
                <li className={styles.paragraph}>
                  <strong>Feedback Loop:</strong> Insights and recommendations from the digital twin are fed back to the physical entity, enabling real-time adjustments and improvements. This creates a continuous feedback loop that enhances efficiency and effectiveness.
                </li>
              </ol>
              <a>
                <img src="/image/png/where_your_idea_gets_real.png" alt="How Digital Twin Works" className={styles.sectionImages} />
              </a>
              <hr />
              <h2 id="content-2" className={styles.sectionTitle}>Why Choose Our Service?</h2>
              <p className={styles.paragraph}>
                <strong>Made for Small Tech Businesses:</strong> A flexible, affordable solution designed specifically for innovative small companies
              </p>
              <p className={styles.paragraph}>
                <strong>Expertise & Cutting-Edge Technology:</strong> Leverage our skills in modeling, CAD, and UX design for an impactful, high-fidelity digital twin
              </p>
              <p className={styles.paragraph}>
                <strong>Save Time and Money:</strong> Get a prototype quickly to test ideas without heavy development investments
              </p>
              <hr />
              <h2 id="content-3" className={styles.sectionTitle}>Take Your Ideas to the Next Level!</h2>
              <h3 className={styles.sectionSubTitle}>
                Create, test, and showcase your concepts with our digital twin, designed for tech SMEs ready to innovate.
              </h3>
            </article>
          </>
        ) : (
          <>
            <header className={styles.header}>
              <h1 className={styles.title}>
                Leading operational innovation
              </h1>
              <p className={styles.subtitle}>
                From design and monitoring to a powerful simulation interface.It is of interest for any industrial project for optimisation, SHE, predictive maintenance, alert system... All within our immersive 3D environment.I am sure it can be interesting for developing a front-end of your industrial plants, interfaces for decision-makers/engineers/operators.
              </p>
            </header>

            <article className={styles.article}>
              <ul>
                <li className={styles.paragraph}>
                  <strong>Create Immersive Simulations:</strong> Develop virtual models of your systems and industrial processes for deeper understanding and better decision-making
                </li>
                <li className={styles.paragraph}>
                  <strong>Rapid Validation and Optimization:</strong> Use the digital twin to test scenarios and refine your operations before actual implementation, reducing risks and costs
                </li>
                <li className={styles.paragraph}>
                  <strong>Enhance Your Communication:</strong> Present a tangible model of your facilities and processes to partners and clients, fostering stronger engagement and increased trust
                </li>
              </ul>

              <hr />
              <h2 className={styles.sectionTitle}>Our Process</h2>
              <ul>
                <li className={styles.paragraph}>
                  <strong>System Assessment:</strong> We analyze your existing systems and processes to create an accurate digital twin.
                </li>
                <li className={styles.paragraph}>
                  <strong>Creation and Integration:</strong> Development of an interactive prototype designed to meet the unique needs of your business and industry. Seamlessly integrate the digital twin into your existing operations for real-time data access.
                </li>
                <li className={styles.paragraph}>
                  <strong>Continuous Improvement:</strong> Utilize feedback and analytics to drive ongoing enhancements and adapt to changing needs.
                </li>
                <li className={styles.paragraph}>
                  <strong>Stakeholder Engagement:</strong> Involve key stakeholders in the process to ensure the solution meets all business requirements.
                </li>
              </ul>
              <a>
                <img src="/image/png/industrial-scale-digitaltwin.png" alt="Industrial Process Visualization" className={styles.sectionImages} />
              </a>
              <hr />
              <h2 id="content-2" className={styles.sectionTitle}>Why Choose Our Service?</h2>
              <p className={styles.paragraph}>
                <strong>Designed for Enterprises:</strong> A robust solution tailored for complex industrial environments.
              </p>
              <p className={styles.paragraph}>
                <strong>Cutting-Edge Analytics:</strong> Employ advanced analytics to uncover insights and enhance operational efficiency.
              </p>
              <p className={styles.paragraph}>
                <strong>Proven ROI:</strong> Drive significant cost savings and efficiency gains through smart, data-driven decisions.
              </p>
              <hr />
              <h2 id="content-3" className={styles.sectionTitle}>Empower Your Industrial Operations!</h2>
              <h3 className={styles.sectionSubTitle}>
                Leverage our digital twin technology to transform your industrial processes and drive success.
              </h3>
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default DigitalTwinArticle;
