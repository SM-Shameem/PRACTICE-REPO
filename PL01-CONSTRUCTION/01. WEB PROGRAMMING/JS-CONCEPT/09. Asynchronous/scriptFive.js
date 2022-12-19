function friendlyFunction() {
    return 'hello - synchronous';
}

function friendlyFunction_1() {
    return Promise.resolve('hello - asynchronous (return)')
}

async function friendlyFunction_2() {
    return 'hello - asynchronous (async)';
}

console.log(friendlyFunction());
console.log(friendlyFunction_1());
console.log(friendlyFunction_2());
console.log('hello end');

// Using (async and await -> instead of then and catch) .......................
const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '11:00 PM',
        };

        resolve(meetingDetails);
    } else {
        reject(new Error('meeting already scheduled!'));
    }
});

const addToCalendar_1 = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calender = meetingDetails.name + ' has been scheduled on ' + 
                        meetingDetails.location + ' at ' + 
                        meetingDetails.time;
        resolve(calender);
    });
};

// meeting
//     .then(addToCalendar_2)
//     .then((res) => {
//         console.log(res);
//         // console.log(JSON.stringify(res));
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

// here the (async) function usages (await) instead of (then) 
// and to catch any error using (try .. catch) statement 
async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar_1(meetingDetails);
        console.log(calendar);
    } catch {
        console.log('something wrong ......');
    }    
}

myMeeting();
console.log('hello world');

