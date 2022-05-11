export function renderListItem(plant) {
    const div = document.createElement('div');
    div.classList.add('plant');
    

    const a = document.createElement('a');
    a.href = `./plant-detail/?id=${plant.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${plant.type}.jpg`;

    const nameSpan = document.createElement('div');
    nameSpan.textContent = plant.name;
    nameSpan.classList.add('name');

    const classificationSpan = document.createElement('div');
    classificationSpan.classList.add('classification');

    const originSpan = document.createElement('div');
    originSpan.classList.add('origin');

    const domesticatedSpan = document.createElement('div');
    domesticatedSpan.classList.add('domesticated');

    const subspeciesSpan = document.createElement('div');
    subspeciesSpan.classList.add('subspecies');
    

    

    


    a.append(img);
    div.append(a, nameSpan, classificationSpan, originSpan, domesticatedSpan, subspeciesSpan);
  
    return div;
}
