console.log('How to get images on box2');

const filenamesRow1 = [
  'img/ca-fog.jpg',
  'img/ca-greenblue.jpg',
  'img/ca-mnt.jpg',
  'img/ca-river.jpg',
];

const filenamesRow2 = [
  'img/ca-pano.jpg',
  'img/ca-pink.jpg',
  'img/ca-lake.jpg',
  'img/ca-sunset.jpg',
];

const filenamesRow3 = [
  'img/ca-timb.jpg',
  'img/ca-drop.jpg',
  'img/ca-aut.jpg',
  'img/ca-ice.jpg',
];

randomCanada(filenamesRow1).then((response) => {
  console.log('yay');
});

randomCanada2(filenamesRow2).then((response) => {});

randomCanada2(filenamesRow3)
  .then((response) => {})

  .catch((error) => {
    console.log('error!');
    console.error(error);
  });

async function randomCanada(filenamesRow1) {
  for (let filename of filenamesRow1) {
    const response = await fetch(filename);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.width = '150';
    img.height = '150';
    document.getElementById('img-container').append(img);
  }
}

async function randomCanada2(filenamesRow2) {
  for (let filename of filenamesRow2) {
    const response = await fetch(filename);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.width = '150';
    img.height = '150';
    document.getElementById('img-container').append(img);
  }
}

async function randomCanada3(filenamesRow3) {
  for (let filename of filenamesRow3) {
    const response = await fetch(filename);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.width = '150';
    img.height = '150';
    document.getElementById('img-container').append(img);
  }
}

const myWeather = ['img/ca-weather.jpg'];

randomWeather(myWeather).then((response) => {
  console.log('weather?');
});

async function randomWeather(myWeather) {
  for (let filename of myWeather) {
    const response = await fetch(filename);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.width = '360';
    img.height = '180';
    document.getElementById('weatherapi').append(img);
  }
}

const myLeaf = ['img/ca-leaf.jpg'];

randomLeaf(myLeaf).then((response) => {
  console.log('leaf?');
});

async function randomLeaf(myLeaf) {
  for (let filename of myLeaf) {
    const response = await fetch(filename);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.width = '280';
    img.height = '155';
    document.getElementById('leaf').append(img);
  }
}
