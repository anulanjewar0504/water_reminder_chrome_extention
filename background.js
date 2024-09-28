chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            // "drink_water",
            {
                type: "basic",
                iconUrl: "logo.png",
                title: "jaa ree",
                message: "marala tekshin re pani pee",
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "drink_water",
        {
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    );
}
