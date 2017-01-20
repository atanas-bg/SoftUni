/**
 * Created by user on 26.9.2016 г..
 */
// input : [radius = 5, height = 5]
// output:
// volume = 47.1239
// area = 83.2298
// Volume of a cone: V = (1/3)πr2h
// Total surface area of a cone: A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))


function printConeVolumeArea([radius, height]) {
    let h = Number(height);
    let r = Number(radius);
    let s = Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2));
    let volume = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
    volume = Math.round(volume * 10000) / 10000;
    let totalArea = Math.PI * r * (s + r);
    totalArea = Math.round(totalArea * 10000) / 10000;

    console.log(`volume = ${volume}`);
    console.log(`area = ${totalArea}`);
}

printConeVolumeArea([3, 5]);