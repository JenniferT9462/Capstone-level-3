import { useState } from "react";

export default function Journal() {
    // const itemDate = moment(item.date).fromNow();
    const [journalEntry, setJournalEntry] = useState('');
    const [entryLog, setEntryLog] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (journalEntry.trim()) {
            setEntryLog([...entryLog, { date: new Date(), journalEntry }])
            setJournalEntry('');
        }
    };

    const handleEntryChange = (event) => {
        setJournalEntry(event.target.value);
    }

    console.log(journalEntry);

    // const handleEntryLog = (entry) => {
    //     if(entry) {
    //         //setMood the '...' is a separator operator to include the old logs as well
    //         setEntryLog([...entryLog, { date: new Date(), journalEntry }]); //Mood object
    //         setJournalEntry(''); //Reset the selected mood
    //     }
    // }


    return (
        <div className="bg-white rounded-md w-4/5 text-blue-500 p-6 shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <h2 className="text-2xl text-center mb-4">Journal</h2>
                <p className="mb-2">What do you wish to record?</p>
                <textarea
                    placeholder="Enter your thoughts here..."
                    className="border-2 border-purple-400 rounded-md p-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={journalEntry}
                    onChange={handleEntryChange}
                />
                <button type="submit" className="bg-purple-900 text-white rounded-md px-4 py-2 w-1/3 mx-auto hover:bg-purple-700 transition"
                >
                    Submit Entry
                </button>
            </form>
            <div>
                <h3 className='text-blue-500 text-xl font-semibold mb-4'>Entry Logs</h3>
                <div className="space-y-4">
                {entryLog.map((entry, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 border border-gray-300 rounded-md p-4 shadow-sm"
                        >
                        <p className="text-sm text-gray-600">
                            {entry.date.toLocaleString()}
                        </p>
                        <p className="text-base text-gray-800 mt-2">
                            {entry.journalEntry}
                        </p>
                    </div>
                  ))}
               </div>
             </div>
        </div>
    );
}