"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var flight_service_1 = require("./flight.service");
var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService, route) {
        this.flightService = flightService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.date = (new Date()).toISOString();
        route.queryParams.subscribe(function (p) {
            // console.debug('queryParams', p);
        });
    }
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        // cmp.flights
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchComponent.prototype.search = function () {
        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    };
    FlightSearchComponent.prototype.disableButton = function (event) {
        console.log(event);
    };
    return FlightSearchComponent;
}());
FlightSearchComponent = __decorate([
    core_1.Component({
        selector: 'flight-search',
        templateUrl: './flight-search.component.html',
        styleUrls: ['./flight-search.component.css']
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService, router_1.ActivatedRoute])
], FlightSearchComponent);
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map