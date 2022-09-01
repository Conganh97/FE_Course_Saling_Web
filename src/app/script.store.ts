interface ScriptStore {
  name: string;
  src: string;
}

export const ScriptStore: ScriptStore[] = [
  {name: 'bootstrap', src: '../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'},
  {name: 'tiny-slider', src: 'assets/vendor/tiny-slider/tiny-slider.js'},
  {name: 'glightbox', src: 'assets/vendor/glightbox/js/glightbox.js'},
  {name: 'purecounter_vanilla', src: 'assets/vendor/purecounterjs/dist/purecounter_vanilla.js'},
  {name: 'functions', src: 'assets/js/functions.js'},
  {name:"overlayscrollbars",src:"assets/vendor/overlay-scrollbar/js/overlayscrollbars.min.html"},
  {name:"OverlayScrollbars.css",src:"assets/vendor/overlay-scrollbar/css/OverlayScrollbars.min.css"},
  {name:"apexcharts.css", src:"assets/vendor/apexcharts/css/apexcharts.css"},
  {name:"apexcharts.min.js" , src:"assets/vendor/apexcharts/js/apexcharts.min.js"}
];


