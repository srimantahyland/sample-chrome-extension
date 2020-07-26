$(function () {
    chrome.storage.sync.get("limit", function (budget) {
        if (budget.limit) {
            $("#limit").val(budget.limit);
        }
    });
    $("#saveLimit").click(function () {
        var limit = $("#limit").val();
        if (limit) {
            chrome.storage.sync.set({ "limit": limit });
            close();
        }
    });
    $("#resetTotal").click(function () {
        chrome.storage.sync.set({ "total": 0 });
        var notifOptions = {
            type: "basic",
            iconUrl: "icon.png",
            title: "Total Reset",
            message: "Total has been reset to 0"
        };
        chrome.notifications.create("totalResetNotif", notifOptions);
    });

});