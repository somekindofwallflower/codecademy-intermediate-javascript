class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        if (this._ratings.length) {
            return this._ratings.reduce((acc, rating) => acc + rating) / this._ratings.length;
        } else {
            throw 'No ratings';
        }
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(rating) {
        if (rating >= 1 && rating <= 5) {
            this._ratings.push(rating)
        } else {
            throw 'Rating has to be between 1 and 5'
        }
    }
}


class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }

    static shuffle(songs) {
        for (let i = songs.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]];
        }
        return songs;
    }
}

class Catalog {
    constructor(mediaList) {
        this._MyCatalog = [];
    }

    get mediaList() {
        return this._MyCatalog;
    }

    set mediaList(newMedialist) {
        this._MyCatalog.push(newMedialist);
    }
}

// Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(3);
console.log(speed.getAverageRating());

// CD instance
const cd = new CD('Coldplay', 'Ghost Stories', ['Always in My Head', 'Magic', 'Ink', 'True Love', 'Midnight', 'Another\'s Arms', 'Oceans', 'A Sky Full of Stars', 'O']);
cd.toggleCheckOutStatus();
console.log(cd.isCheckedOut);
cd.addRating(5);
cd.addRating(5);
cd.addRating(4);
console.log(cd.getAverageRating());
console.log(CD.shuffle(cd.songs));

const catalog = new Catalog();
catalog.mediaList = historyOfEverything;
catalog.mediaList = speed;
catalog.mediaList = cd;
console.log(catalog.mediaList);