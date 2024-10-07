import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.scss';
import { Button, Modal } from 'antd';

const Header = () => {
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
        <div>
            <header className={styles.header}>
                <div className={styles.title}>
                    <h1>Welcome to Nextjs</h1>
                    <p>This is the homepage of your Next.js app.</p>
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
                            <Button onClick={showModal}>Booking session</Button>
                        </li>
                    </ul>
                </nav>
            </header>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default Header;
