
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



 const map = new Map();

map.set(a.price,a.id);
map.set(b.price,b.id);
map.set(c.price,c.id);



console.log(map);

