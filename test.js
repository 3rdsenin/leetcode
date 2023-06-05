const s = 'bar';
const t = 'foo';

 
for (let i = 0; i < s.length; i++) {
    const a = s.indexOf(s[i]);
    const b = t.indexOf(t[i]);

    console.log(a, b);
    console.log(s[b], s[i]);
    console.log(t[b], t[i]);
}