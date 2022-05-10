export function renderDogLI(plant) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `./plant-detail/?id=${plant.id}`;
    a.textContent = plant.name;
    li.append(a);
    return li;
}

export function findById(id, arr) {
    // go through each item in arr
    // if id matches, return item
    console.log(id);
    console.log(arr);
    for (let item of arr) {
        if (id === item.id) {
            return item;
        }
    }
}