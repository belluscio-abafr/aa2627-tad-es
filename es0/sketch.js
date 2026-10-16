let tono
let passo = 3          // quanto avanza a ogni cerchio
let curvatura = 0.05   // curvatura di partenza di ogni traccia (radianti)
let variazione = 0.02 // di quanto può cambiare la curvatura a ogni cerchio
let luminosita;

function setup() {
    createCanvas(800, 600)
    colorMode(HSL)
    tono = random(360)
    luminosita = random(20, 60);
    background(20)
}

function draw() {
    if (mouseIsPressed) {
        luminosita = constrain(luminosita + random(-5, 5), 20, 60);
        let sat = 120-luminosita
        stroke(tono, sat,luminosita+40);
        fill(tono, sat, luminosita)
        let x = mouseX
        let y = mouseY
        let verso = random(TWO_PI)
        let curva = curvatura
        for (let i = 0; i < 50; i = i + 1) {
            x = x + passo * cos(verso)
            y = y + passo * sin(verso)
            circle(x, y, (50 - i) / 2)
            verso = verso + curva
            curva = curva + random(-variazione, variazione)
        }
        if (random() < 0.033) {  // due volte su cento...
            tono = random(360)  // cambia il tono del riempimento
        }
    }
}
