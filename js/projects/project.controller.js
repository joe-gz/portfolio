"use strict";

(function (){
  angular
  .module("projects")
  .controller("ProjectIndexController", function(){
  this.projects = [
    // {
    //   title:"baseballVisuals",
    //   url:"https://baseball-visuals.herokuapp.com/#/leagues/82326",
    //   photo_url:"images/baseballVisuals.png",
    //   description:"A fantasy sports app, built in Node, Express, and AngularJS, provides users the ability to visualize their data for auction fantasy baseball leagues."
    // },
    {
      title:"beerLogger",
      url:"https://beerlogger.herokuapp.com/",
      photo_url:"images/beerLogger2.png",
      description:"A social app, built in Rails and linked to BreweryDB API, allowing users to track and display beers they are drinking."
    },
    {
      title:"trans.HIT",
      url:"https://trans-hit.herokuapp.com/",
      photo_url:"images/transHIT2.png",
      description:"An interactive OOJS-built app that provides a means through which DC metro riders can discuss issues occuring in specific stations"
    }
  ]});

}());
