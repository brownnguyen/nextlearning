import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { RootState } from '../store/reducers';
import { removeSession, fetchSessions } from '../store/reducers/bookingSlice';
const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const sessions = useSelector((state: RootState) =>
        state.sessions
    );

    const removeBooking = (sessionId: string) => {
        dispatch(removeSession(sessionId))
    }

    useEffect(() => {
        dispatch(fetchSessions());
    }, [dispatch]);

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
        <div>
            <header className={styles.header}>
                <div className={styles.title}>
                    <h1>Learning Sessions</h1>
                </div>
                <nav>
                    <ul className={styles.listMenu}>
                        <li>
                            <Link href="/">Our mission</Link>
                        </li>
                        <li>
                            <Link href="/sessions">View Sessions</Link>
                        </li>
                        <li>
                            <Button onClick={showModal}>Upcoming session</Button>
                        </li>
                    </ul>
                </nav>
            </header>
            <Modal title="Upcomming Session" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={() => (
                    <></>
                )}
            >
                <ul className={styles.upcommingSessionModal}>
                    {sessions.length ?
                        sessions.map((session, index) => {
                            return <li key={index}>
                                <div className={styles.upcommingTitle}>
                                    <h2>
                                        {session.title}
                                    </h2>
                                    <p onClick={() => removeBooking(session.id)}>Cancel</p>
                                </div>
                                <p>
                                    {session.summary}
                                </p>
                                <p>{session.date}</p>
                            </li>
                        }) : <li className={styles.emptyBooking}>No Booking Sessions</li>
                    }

                </ul>

            </Modal>
        </div>
    );
};

export default Header;
