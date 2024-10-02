function fillBus(peopleAtBusStops, busSeats) {
    let currentCapacity = 0;

    for (let i = 0; i < peopleAtBusStops.length; i++) {
        currentCapacity = currentCapacity + peopleAtBusStops[i];
        
        if (currentCapacity >= busSeats) {
            return i;
        }
    }

    return -1;
}

console.log(fillBus([1, 3, 10, 1], 12));  // Retourne 3
