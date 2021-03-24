
class Rectangle {
	constructor(w, h) {
		// convention: props with _ considered as private
		this._w = w;
		this._h = h;
	}
    set w(w) {
        this._w = w;
    }
    get w(){
        return this._w;
    }
    get area(){
        return this._w * this._h;
    }
    get perimeter(){
        return 2 * (this._w + this._h);
    }

}
class Square extends Rectangle{
    
}