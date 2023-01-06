const hasMeeting = false;

// promise is used to creating asynchronous function 
// promise receives a call back function 
// and the callback function receives two function - resolve and reject
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM',
        };

        resolve(meetingDetails);
    } else {
        reject(new Error('meeting already scheduled!'));
    }
});

// multiple promise - one promise get the result of another promise
// describe promise 
// const addToCalendar_1 = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calender = meetingDetails.name + ' has been scheduled on ' + 
//                         meetingDetails.location + ' at ' + 
//                         meetingDetails.time;
//         resolve(calender);
//     });
// };

// short form of promise
const addToCalendar_2 = (meetingDetails) => {
    const calender = meetingDetails.name + ' has been scheduled on ' + 
                    meetingDetails.location + ' at ' + 
                    meetingDetails.time;
    return Promise.resolve(calender);
};

// here callback hell became more readable for (then and catch)
// there may have multiple (then) for each (resolve) but 
// all (reject) will act on only one (catch)
meeting
    .then(addToCalendar_2)
    .then((res) => {
        console.log(res);
        // console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err.message);
    })

console.log('next after - promise');