function calculateX() {
    const a = parseFloat(document.getElementById('a_various').value);
    let x;
    if (a < 10) {
        x = Math.pow(a, 4);
    }
    else if (a > 61) {
        x = a;
    }
    else {
    x = a - Math.sin(Math.pow(a, 2));
    }
    document.getElementById('x_various').value = x;
    }