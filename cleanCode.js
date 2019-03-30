const userLogs = ['2017-03-10 08:13:11', '2017-03-10 19:01:27', '2017-03-11 07:35:55', '2017-03-11 16:15:11', '2017-03-12 08:01:41', '2017-03-12 17:19:08']
let threeLastLog = 0;

//Sprawdzenie liczby nowych sesji(min.30min przerwy) 
function numbersOfSessions() {
    let sessionCounter = 1;
    for (i = 0; i < userLogs.length - 1; i++) {
        let previousLog = new Date(userLogs[i]).getTime();
        let log = new Date(userLogs[i + 1]).getTime();
        let minutesDifference = Math.floor((log / (1000 * 60) - previousLog / (1000 * 60)));
        if (minutesDifference >= 30) {
            sessionCounter++;
        }
    }
    return sessionCounter;
}

//Sprawdzanie, czy logowanie odbylo sie w ciagu trzech dni od daty ostatniego logowania
function lastThreeDaysLog() {
    let todayDate = new Date(userLogs[userLogs.length - 1]).getTime();
    let i = -2;
    if (threeLastLog < 2) {
        beforeLog = new Date(userLogs[length - i]).getTime();
        let compareLogs = Math.floor((todayDate / (1000 * 60 * 60 * 24) - beforeLog / (1000 * 60 * 60 * 24)));
        if (compareLogs > 1) {
            return false;
        } else if (compareLogs === 1) {
            threeLastLog += 1;
        }
        i--;
    }
    if (threeLastLog === 2) {
        return true;
    } else {
        return false;
    }
}
lastThreeDaysLog();

//Główna funkcja
function usersActive() {
    let sessions = numbersOfSessions();
    if (sessions < 6) {
        console.log(`False: User has only ${sessions} new sessions`);
        return false;
    } else {
        if (lastThreeDaysLog()) {
            console.log(`True: ${sessions} sessions during over 3 days `);
            return true;
        } else {
            console.log(`False: User has ${sessions} new sessions, but he has not used the app each of the last three days `);
            return false;
        }
    }
}
usersActive();
