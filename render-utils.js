export function renderListItem(plant) {
    const div = document.createElement('div');
    div.classList.add('plant');
    

    const a = document.createElement('a');
    a.href = `./plant-detail/?id=${plant.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${plant.type}.jpg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = plant.name;
    nameSpan.classList.add('name');

    const classificationSpan = document.createElement('span');
    nameSpan.classList.add('classification');

    a.append(img);
    div.append(a, nameSpan, classificationSpan);
  
    return div;
}
