//giải phương trình bậc 2
class QuadraticEquation {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getA():number{
        return this.a;

    }
    setA(a:number){
         this.a = a;
    }
    getB():number{
        return this.b;

    }
    setB(b:number){
        this.b = b;
    }
    getC():number{
        return this.c;

    }
    setC(c:number){
        this.c = c;
    }
    getResult(){
        return`${this.a}x^2 +${this.b}x +${this.c}=0`
    }


    Equation() {
        let delta: number = this.b * this.b - 4 * this.a * this.c;
        console.log(delta)
        console.log((-this.b + Math.sqrt(delta))/(2*this.a))


        if (this.a == 0 && this.b == 0 && this.c == 0) {
            console.log(` ${this.getResult()}phuong trinh vo so nghiem `)
        } else if (this.a == 0 && this.b == 0) {
            console.log(`${this.getResult()} phuong trinh vo nghiem`)

        } else if (this.a == 0) {
            console.log(`${this.getResult()} Phuong trinh co nghiem ${(-this.c / this.a)}`);
        } else {
            if (delta == 0) {
                console.log(`${this.getResult()} Nghiem kep${(-this.b /2*this.a) }`)

            } else if(delta>0){
                console.log(`${this.getResult()} Hai nghiem phan biet x1 = ${(-this.b + Math.sqrt(delta)/2*this.a)}
                x2= ${(-this.b + Math.sqrt(delta)/2*this.a)}
                `)
            } else {
                console.log('phuong trinh vo nghiem')

            }
        }
    }
}
let pt1 = new  QuadraticEquation(2,5,7);
pt1.getResult()
pt1.Equation()

