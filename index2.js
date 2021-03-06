var dataset=[80,100,56,120,180,30,40,120,160];

var svgWidth=700,svgHeight=400,barPadding=5;
var barWidth=(svgWidth/dataset.length);


var svg=d3.select("svg")
	.attr("width",svgWidth)
	.attr("height",svgHeight);

var yScale=d3.scaleLinear()
	.domain([0,d3.max(dataset)])
	.range([svgHeight,0]);

var xScale=d3.scaleLinear()
	.domain([0,d3.max(dataset)])
	.range([0,svgWidth]);

var x_axis=d3.axisBottom()
	.scale(xScale);

var y_axis=d3.axisLeft()
	.scale(yScale);


var xAxisTranslate=svgHeight-20;



svg.append("g")
	.attr("transform","translate(50,"+xAxisTranslate+")")
	.call(x_axis);


svg.append("g")
	.attr("transform","translate(50,10)")
	.call(y_axis);


// var barChart=svg.selectAll("rect")
// 	.data(dataset)
// 	.enter()
// 	.append("rect")
// 	.attr("y",function(d){
// 		return svgHeight - yScale(d)
// 	})
// 	.attr("height",function(d){
// 		return yScale(d);
// 	})
// 	.attr("width",barWidth - barPadding)
// 	.attr("transform",function(d, i){
// 		var translate=[barWidth*i,0];
// 		return "translate("+translate+")";
// 	});

// var text=svg.selectAll("text")
// 	.data(dataset)
// 	.enter()
// 	.append("text")
// 	.text(function(d){
// 		return d;
// 	})
// 	.attr("y",function(d,i){
// 		return svgHeight - yScale(d)-2;
// 	})
// 	.attr("x",function(d,i){
// 		return barWidth*i;
// 	})
// 	.attr("fill","#A64C38");
// // 	console.log(svg);

