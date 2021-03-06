var app = {
    initialize: function () {
        this.game = {
            clicks: 0,
            button: null,
            counter: null
        };
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
            console.log("THIS IS A PHONE");
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            console.log("THIS IS A WEBPAGE");
            this.onDeviceReady(); //this is the browser
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        var game = this.game;
document.addElement()
        game.button = document.getElementById("theButton");
        game.counter = document.getElementById("counter");


        game.button.onclick = function () {
            game.counter.innerHTML = 'Clicks: ' + (++game.clicks).toString();
        };
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
