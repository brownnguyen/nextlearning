const initialState = {
    sessions: []
};

export interface Session {
    id: string;
    title: string;
    summary: string
    date: string;
}

export interface BookingState {
    sessions: Session[];
}


export interface AddSessionAction {
    type: typeof ADD_SESSION;
    payload: Session;
}

export interface RemoveSessionAction {
    type: typeof REMOVE_SESSION;
    payload: string;
}

export interface FetchSessionsAction {
    type: typeof FETCH_SESSIONS;
}

const ADD_SESSION = 'ADD_SESSION';
const REMOVE_SESSION = 'REMOVE_SESSION';
const FETCH_SESSIONS = 'FETCH_SESSIONS';

export const bookingReducer = (state: BookingState = initialState, action) => {
    switch (action.type) {
        case FETCH_SESSIONS:
            console.log(action)
            return {
                ...state
            };
        case ADD_SESSION:
            const index: number = state.sessions.findIndex(session => session.id == action.payload);
            console.log("index", index);
            if (index == -1) {
                return {
                    ...state,
                    sessions: [...state.sessions, action.payload],
                };
            }

        case REMOVE_SESSION:
            return {
                ...state,
                sessions: state.sessions.filter(session => session.id !== action.payload),
            };
        default:
            return state;
    }
};

export const fetchSessions = () => ({
    type: FETCH_SESSIONS
});

export const addSession = (session) => ({
    type: ADD_SESSION,
    payload: session,
});

export const removeSession = (sessionId: string) => ({
    type: REMOVE_SESSION,
    payload: sessionId,
});