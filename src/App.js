import './App.css';
import React, {useState, useMemo, useContext, useEffect} from 'react';
import {SnackBarContext} from "./snackbar";

function App() {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    useEffect(() => {

        if (isSnackbarOpen) {
            setTimeout(() => {
                setIsSnackbarOpen(false)
            }, 3000)
        }

    }, [isSnackbarOpen, setIsSnackbarOpen])

    const memoizedValue = useMemo(() => ({isSnackbarOpen, setIsSnackbarOpen}), [isSnackbarOpen, setIsSnackbarOpen]);

    return (
        <SnackBarContext.Provider value={memoizedValue}>
            <Test />

            { isSnackbarOpen && <div>Snackbar alert</div> }
        </SnackBarContext.Provider>
    );
}

export default App;

const Test = () => {
    const snackbarContext = useContext(SnackBarContext)

    return <React.Fragment>
        <button onClick={() => snackbarContext.setIsSnackbarOpen(true)}>Open Snackbar</button>
    </React.Fragment>
}
