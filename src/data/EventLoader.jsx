import events from './data';

// Event loader interfaces to the static data currently
// It should be easy to change to a database 

export const GetAllEvents = () => {
    return events;
};

export const GetEvent = ( id ) => {
    return events.find( event => event.id == id );
};