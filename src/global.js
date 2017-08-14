var koModel = {
    route: ko.observable(),
    songsPlayed: ko.observableArray([]),
    playSong: function(song) {
        console.log('Song is Playing', song);
        this.songsPlayed.push(song);
    }
};

ko.applyBindings(koModel);

