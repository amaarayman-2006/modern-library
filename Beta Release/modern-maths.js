class Mathematics {
    /*

    This is a js library made by A.A2006

    */
    constructor() {
        this.euler = 2.718281828459045;
        this.pi = 3.141592653589793;
    }
    range(n) {
        let i = 0;
        let j = [];
        for (i; i < n; i++) {
            j[i] = i + 1;
        }
        return j;
    }
    max(arr) {
        const args = Array.from(arr);
        let max = args[0];
        for (let i = 1; i < args.length; i++) {
            if (args[i] > max) {
            max = args[i];
        }
            }
        return max;
    }
    min(arr) {
        const args = Array.from(arr);
        let min = args[0];
        for (let i = 1; i < args.length; i++) {
            if (args[i] < min) {
            min = args[i];
        }
            }
        return min;
    }
    add(n1, n2) {
        return n1 + n2;
    }
    minus(n1, n2) {
        return n1 - n2;
    }
    mult(n1, n2) {
        return n1 * n2;
    }
    div(n1, n2) {
        return n1 / n2;
    }
    pow(n1, n2) {
        return n1 * n2;
    }
    mod(n1, n2) {
        return n1 % n2;
    }
    sqrt(n) {
        if (n >= 0) {
            return Math.sqrt(n);
        } else if (n < 0) {
            n *= -1;
            return Math.sqrt(n) + "i";
        }
    } 
    cbrt(n) {
        return Math.cbrt(n);
    }
    isEven(n) {
        if (n % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }
    isOdd(n) {
        if (n % 2 != 0) {
            return true;
        } else {
            return false;
        }
    }
    isPrime(n) {
        if (n / n == 1 && n % 2 != 0 && n % 3 !=0 && n % 5 != 0 && n % 7 != 0 || n == 2 || n == 3 || n == 5 || n == 7) {
            return true;
        } else {
            return false;
        }
    }
    factorial(num) {
        if (num < 0) {
            return false;
        } else if (num == 0) {
            return 1;
        } else {
            return (num * this.factorial(num - 1));
          }
        }
    toRadian(degree) {
        return degree * Math.PI / 180;
    }
    toDegree(radian) {
        return radian * 180 / Math.PI;
    }
    addInv(n) {
        return n * (-1);
    }
    pythagoras(s1, s2, hypo) {
        if (hypo == null || hypo == undefined) {
            s1 **= 2; 
            s2 **= 2;
            return Math.sqrt(s1 + s2);
        } else if (s1 == null || s1 == undefined) {
            s2 **= 2;
            hypo **= 2;
            return Math.sqrt(hypo - s2);
        } else if (s2 == null || s2 == undefined) {
            s1 **= 2;
            hypo **= 2;
            return Math.sqrt(hypo - s1);
        } else {
            return false;
        }
    }
    secDegreeEq(a, b, c) {
        let x = [(-1 * b + this.sqrt(b ** 2 - 4 * a * c)) / (2 * a), (-1 * b - this.sqrt(b ** 2 - 4 * a * c)) / (2 * a)];
        return x;
    }
    sin(angleRadian) {
        return Math.sin(angleRadian);
    }
    cos(angleRadian) {
        return Math.cos(angleRadian);
    }
    tan(angleRadian) {
        return Math.tan(angleRadian);
    }
    sec(angleRadian) {
        return 1 / this.cos(angleRadian);
    }
    csc(angleRadian) {
        return 1 / this.sin(angleRadian);
    }
    cot(angleRadian) {
        return 1 / this.tan(angleRadian);
    }
    sinh(angleRadian) {
        return 0.5 * ((this.euler**angleRadian) - this.euler**(-1 * angleRadian));
    }
    cosh(angleRadian) {
        return 0.5 * ((this.euler**angleRadian) + this.euler**(-1 * angleRadian));
    }
    tanh(angleRadian) {
        return this.sinh(angleRadian) / this.cosh(angleRadian);
    }
    approx(n) {
        return Math.round(n);
    }

}

var maths = new Mathematics();
