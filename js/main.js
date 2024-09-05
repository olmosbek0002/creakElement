const body = document.body;
body.style.cssText = `
    background-color: #0d1624;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const wrapper = document.createElement("div");
wrapper.className = "wrapper";
wrapper.style.cssText = `
    width: 350px;
    height: 596px;
    background-color: #15263F;
    opacity: 1;
    border-radius:20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

`;
body.append(wrapper);
const img = document.createElement("img");
img.src = "./img/Rectangle.jpg";
img.style.borderRadius = "10px";
wrapper.prepend(img);
const h1 = document.createElement("h1");
h1.innerText = "Equilibrium #3429";
h1.style.cssText = `
    font-family: Outfit;
    font-size: 22px;
    font-weight: 600;
    line-height: 27.72px;
    text-align: left;
    color: #FFFFFF;

`;
wrapper.append(h1);
const paragrif = document.createElement("p");
paragrif.innerText = "Our Equilibrium collection promotes balance and calm.";
paragrif.style.cssText = `

    font-family: Outfit;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    text-align: left;
    color: #8BACD9;

`;
wrapper.append(paragrif);
const iner = document.createElement('div')
iner.classList.add("iner")
console.dir(iner);
iner.style.cssText = `
    width : 300px;
    heigth: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
wrapper.append(iner);
const ehgt = document.createElement("div")
ehgt.className = 'ehgt'
ehgt.style.cssText = `
    width: 93.48px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
iner.prepend(ehgt);
const jpg = document.createElement('img')
jpg.src = ("./img/Combined.svg")
ehgt.prepend(jpg);
let text = document.createElement('p')
text.innerText = "0.041 ETH"
text.style.cssText = `
    font-family: Outfit;
    font-size: 16px;
    font-weight: 600;
    line-height: 20.16px;
    text-align: left;
    color: #00FFF8;

`
ehgt.append(text);
let minu = document.createElement('div')
minu.className = 'minu';
minu.style.cssText = `
    display: flex;
    gap: 7.7px;
`
iner.append(minu);
let clock = document.createElement('img')
clock.src = ('./img/Clock.png')
minu.append(clock)
let minuText = document.createElement('p')
minuText.innerText = '3 days left'
minuText.style.cssText = `
    color: #8BACD9;
    font-family: Outfit;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.16px;
    text-align: left;

`
minu.append(minuText);

let line = document.createElement('div')
line.style.cssText = `
    width: 302px;
    height: 1px;
    background-color: #2E405A;

`
wrapper.append(line)





