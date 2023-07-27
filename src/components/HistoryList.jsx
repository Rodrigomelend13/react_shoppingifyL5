import React from 'react';
import listStore from '../store/ListStore';
import HistoryListsRegisters from './HistoryListRegister';
import HistoryListsDetails from './HistoryListDetails';

function HistoryLists() {
    const { showDetails } = listStore();

    return (
        <>
            {showDetails ? (
                <HistoryListsDetails />
            ) : (
                <HistoryListsRegisters />
            )}
        </>
    );
}

export default HistoryLists;
