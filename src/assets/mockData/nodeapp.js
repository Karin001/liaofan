const fs = require('fs');
const bf = JSON.parse(fs.readFileSync('./gongguo.json').toString());
const gong = bf.gong;
let gongNum = 0;
for (var key in gong) {
  if (gong.hasOwnProperty(key)) {
    var group = gong[key];

      group.forEach(function (element) {
        element.id = "gong" + gongNum++
      }, this);

  }
}
const guo = bf.guo;
let guoNum = 0;
for (var key in guo) {
  if (guo.hasOwnProperty(key)) {
    var group = guo[key];

      group.forEach(function (element) {
        element.id = "guo" + guoNum++
      }, this);

  }
}
fs.writeFileSync('./gongguonew.json', JSON.stringify(bf))
console.log(bf.gong.yi.length,bf.gong.yu.length,bf.gong.xing.length,bf.guo.yi.length,bf.guo.yu.length,bf.guo.xing.length);
