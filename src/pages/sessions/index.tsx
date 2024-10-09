import SessionsList from '../../component/session-list';
import { SESSIONS } from '../../dummy-sessions';
const Sessions: React.FC = () => {
    return <div>
        <h2>Available Course</h2>
        <SessionsList sessions={SESSIONS}/>
    </div>
}

export default Sessions;