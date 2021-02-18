const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return result = this.journeys.map((journey) =>  {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return result = this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return result = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return result = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const result = this.journeys.map((journey) => {
//     return journey.transport;
//   })
//   const uniqueResult = Array.from(new Set(result));
//   return uniqueResult;
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })
  .filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  });
};

module.exports = Traveller;
