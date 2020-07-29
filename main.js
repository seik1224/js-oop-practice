class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vec2(this.x + v.x, this.y + v.y);
  }
  sub(v) {
    return new Vec2(this.x - v.x, this.y - v.y);
  }
  mul(v) {
    if(typeof v === "number"){
        return new Vec2(this.x * v, this.y * v)
    }
    return new Vec2(this.x * v.x, this.y * v.y);
  }
  div(v) {
    return new Vec2(this.x / v.x, this.y / v.y);
  }
  dot(v) {
    const u1 = this.unit();
    const u2 = v.unit();
    return u1.x * u2.x + u1.y * u2.y;
  }
  unit() {
    const len = this.len();
    if (len == 0) return this;
    return new Vec2(this.x / len, this.y / len);
  }
  len() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const v1 = new Vec2(1, 0);
const v2 = new Vec2(0, 1);