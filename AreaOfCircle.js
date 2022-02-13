// area = pi r*r

var radus = prompt("pls enter redus??");
if (Number(radus)) {
    var r = parseFloat(radus);
    var area = r * r * Math.PI;
    alert("area = " + area);
} else {
    alert("no validate");
}