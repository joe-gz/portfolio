"use strict";

(function (){
  angular
  .module("projects")
  .controller("ProjectIndexController", function(){
  this.projects = [
    {
      title:"beerLogger",
      url:"https://beerlogger.herokuapp.com/",
      photo_url:"images/beerLogger.png",
      description:"A social app, built in Rails and linked to BreweryDB API, allowing users to track and display beers they are drinking."
    },
    {
      title:"trans.HIT",
      url:"https://trans-hit.herokuapp.com/",
      photo_url:"images/transHIT.png",
      description:"An interactive OOJS-built app that provides a means through which DC metro riders can discuss issues occuring in specific stations"
    }
  ]});

}());
