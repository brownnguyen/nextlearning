import React from 'react';
import { Modal, Button } from 'antd';
import styles from '../styles/index.module.scss';
import { addSession } from '../store/reducers/bookingSlice';
import { useDispatch } from 'react-redux';

export interface Session {
    id: string;
    title: string;
    summary: string
    date: string;
}

type BookSessionModalProps = {
    session: Session
    open: boolean;
    onOk: () => void;
    onCancel: () => void;
};


const BookSessionModal: React.FC<BookSessionModalProps> = ({ open, onOk, onCancel, session }) => {
    const dispatch = useDispatch();
    const bookSession = (session: Session) => {
        dispatch(addSession(session));
        onOk();
    }
    return <Modal title="Book session" open={open} onOk={onOk} onCancel={onCancel}
        footer={() => (
            <div className={styles.sessionModal}>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={() => bookSession(session)}>Book Session</Button>
            </div>
        )}

    >
        <h3 className={styles.titleConfirmBookingModal}>Confirm your booking</h3>
    </Modal>;
}

export default BookSessionModal;