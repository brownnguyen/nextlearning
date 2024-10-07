
import { Image } from 'antd';
import studentsImg from '../assets/students.jpg';
import listImg from '../assets/list.jpg';
import certificateImg from '../assets/certificate.jpg';
import styles from '../styles/index.module.scss';
{ console.log(studentsImg) }
const Home: React.FC = () => (
  <div className={styles.home}>
    <h2>Our Mission: Your Success</h2>
    <section>
      <Image className={styles.image} width={200} src={studentsImg.src} alt="A group of students" />
      <div className={styles.homeContent}>
        <h3>What we do</h3>
        <p>
          ReactMentoring is a platform for React developers to find mentors
          who can help them with their React-related questions and problems.
          We are a community of React developers who want to help each other
          succeed.
        </p>
      </div>
    </section>

    <section>
      <div className={styles.homeContent}>
        <h3>What we offer</h3>
        <p>
          We offer a variety of mentoring sessions, from one-on-one mentoring
          to group mentoring sessions. Browse our available sessions to find
          the one that best fits your needs.
        </p>
      </div>
      <Image className={styles.image} width={200} src={listImg.src} alt="A list of sessions" />
    </section>
    <section>
      <Image className={styles.image} width={200} src={certificateImg.src} alt="A certificate" />
      <div className={styles.homeContent}>
        <h3>What you get</h3>
        <p>
          No matter if you are a beginner or an experienced React developer,
          we are here to help you level up your React skills.
        </p>
      </div>
    </section>
  </div>
);

export default Home;
