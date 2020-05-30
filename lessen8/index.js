// var svgWidth=600,svgHeight=500;


// var svg=d3.select("svg")
//    .attr("width",svgWidth)
//    .attr("height",svgHeight)
//    .attr("class","svg-container");


// var line =svg.append("line")
//    .attr("x1",100)
//    .attr("x2",500)
//    .attr("y1",50)
//    .attr("y2",50)
//    .attr("stroke","red");

var data = [
   {"platform":"Android","percentage":40.11},
   {"platform":"Windows","percentage":36.69},
   {"platform":"ioS","percentage":13.06}
];

var circle=svg.append("circle")
   .attr("cx",200)
   .attr("cy",300)
   .attr("r",80)
   .attr("fill","#7CE805");




var svgWidth=600,svgHeight=500,radius=Math.min(svgWidth,svgHeight)/2;

var svg=d3.select("svg")
   .attr("width",svgWidth)
   .attr("height",svgHeight);


var g = svg.append("g")
   .attr("transform", "translate("+radius+","+radius+")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie=d3.pie().value(function(d){
   return d.percentage;
});

var path=d3.arc()
   .outerRadius(radius)
   .innerRadius(0);

var arc = g.selectAll("arc")
   .data(pie(data))
   .enter()
   .append("g");


arc.append("path")
   .attr("d",path)
   .attr("fill",function(d){
      return color(d.data.percentage);
   });