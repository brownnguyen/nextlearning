import React from 'react';
import { useRouter } from 'next/router';
import { SESSIONS } from '../../dummy-sessions';
import { Image, Button, Modal } from 'antd';
import styles from '../../styles/index.module.scss';
import { useState } from 'react';
import BookSessionModal from '../../component/book-session-modal';
const SessionDetailPage: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    const session = SESSIONS.find((s) => s.id === slug);
    if (!session) {
        return <div>Session not found</div>;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.sessionDetails}>
            <div className={styles.sessionDetailsTitle}>
                <Image
                    width={300}
                    src={session.image.src}
                />
                <div>
                    <h2>{session.title}</h2>
                    <p>{session.date}</p>
                    <Button onClick={showModal}>Booking session</Button>
                </div>
            </div>
            <div className={styles.sessionDetailsDescription}>
                <h3>{session.description}</h3>
            </div>
            <BookSessionModal session={session} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
        </div>
    );
};

export default SessionDetailPage;