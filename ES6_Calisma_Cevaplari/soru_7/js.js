
const a={
    id: "html",
    price:3
};

const b={
    id: "css",
    price:5
};

const c={
    id: "js",
    price:10
};

const d={
    id: "nodejs",
    price:10
};





const set = new Set([a.price,a.id],[b.price,b.id],[c.price,c.id],[d.price,d.id]);

 const map = new Map();

map.set(a.price,a.id);
map.set(b.price,b.id);
map.set(c.price,c.id);
map.set(d.price,d.id);



console.log(map);
console.log(set);
