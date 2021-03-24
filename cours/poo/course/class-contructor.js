
class Rectangle {
	constructor(w, h) {
		// convention: props with _ considered as private
		this._w = w;
		this._h = h;

		this.name = "Rectangle";
	}

	set w(w) {
        if (typeof w !== 'number') {
            throw new Error(
                `invalid entry ${w}`
            );
        }
        this._w = w;
    }
    get w(){
        return this._w;
    }
	// setW(w) {
    //     if (typeof w !== 'number') {
    //         throw new Error(
    //             `invalid entry ${w}`
    //         );
    //     }
    //     this._w = w;
    // }
}

const rec = new Rectangle(30, 50);

// rec._w = 84; direct access is working but we forbid it 

rec.w = 78;

console.log(rec);