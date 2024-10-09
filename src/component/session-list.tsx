import { StaticImageData } from 'next/image';
import SessionItem from './session-item';
import styles from '../styles/index.module.scss';
type SessionsListProps = {
    sessions: {
        id: string;
        title: string;
        summary: string;
        date: string;
        image: StaticImageData;
      }[]
};

const SessionsList: React.FC<SessionsListProps> = ({ sessions }) => {
    return (
        <ul className={styles.listMenuSession}>
            {sessions.map((session) => (
                <li key={session.id}>
                    <SessionItem session={session} />
                </li>
            ))}
        </ul>
    );
}

export default SessionsList