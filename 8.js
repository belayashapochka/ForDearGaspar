const t = 2000000;
const m = 60;
const base = t / m;
const mp = 10 / 12;
 let tt = t;
 let total = 0;

 for (let i = 0; i < m; i ++) 
 {
    const payment = base + tt / 100 * mp;
    tt -= base;
    total += payment;
 }
 const perepl = total - t;

console.log('Total:', total, 'Overprice:', perepl);