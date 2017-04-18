var atoms = []; //creates a vector that will hold the information for each element

$(document).ready(function()
{
	function parse(document)
	{
		$(document).find("ATOM").each(function() //creates an array with each index holding an element node. index 1 holds element 1, etc
		{
			var numberText = $(this).find('ATOMIC_NUMBER').text();
			var number = parseInt(numberText);
			atoms[number]=$(this);
		});
		for (var i = 1; i <= 118; i++)
		{
			if (i < 113) //If the XML document includes the elements
			{
				var symbol = atoms[i].find('SYMBOL').text();
				var currentNumber = i.toString();
				var currentElement = element + currentNumber;
				var hashtag = "#";
				var string = hashtag + currentElement;
				var c = $(string)[0];
				var ctx = c.getContext("2d");
				ctx.font = "bold 20px Arial";
				if(symbol.length == 1) //prints the element symbol in the correct box
				{
					ctx.fillText(symbol, 18, 33);
					var dtx = ctx
					dtx.font = "bold 12px Arial";
					dtx.fillText(i, 2, 12);
				}
				if(symbol.length == 2)
				{
					ctx.fillText(symbol, 13, 33);
					var dtx = ctx
					dtx.font = "bold 12px Arial";
					dtx.fillText(i, 2, 12);
				}
				if(symbol.length == 3)
				{
					ctx.fillText(symbol, 8, 33);
					var dtx = ctx
					dtx.font = "bold 12px Arial";
					dtx.fillText(i, 2, 12);
				}
			}
			else // if the elements are not on the XML document
			{
				var c = $("#element113")[0];
				var ctx = c.getContext("2d");
				ctx.font = "20px Arial";
				ctx.fillText('Uut', 8, 33);
				var dtx = ctx
				dtx.font = "12px Arial";
				dtx.fillText(113, 2, 12);
				c = $("#element114")[0];
				ctx = c.getContext("2d");
				ctx.font = "20px Arial";
				ctx.fillText('Uuq', 8, 33);
				var dtx = ctx
				dtx.font = "12px Arial";
				dtx.fillText(114, 2, 12);
				c = $("#element115")[0];
				ctx = c.getContext("2d");
				ctx.font = "20px Arial";
				ctx.fillText('Uup', 8, 33);
				var dtx = ctx
				dtx.font = "12px Arial";
				dtx.fillText(115, 2, 12);
				c = $("#element116")[0];
				ctx = c.getContext("2d");
				ctx.font = "20px Arial";
				ctx.fillText('Uuh', 8, 33);
				var dtx = ctx
				dtx.font = "12px Arial";
				dtx.fillText(116, 2, 12);
				c = $("#element117")[0];
				ctx = c.getContext("2d");
				ctx.font = "20px Arial";
				ctx.fillText('Uus', 8, 33);
				var dtx = ctx
				dtx.font = "12px Arial";
				dtx.fillText(117, 2, 12);
				c = $("#element118")[0];
				ctx = c.getContext("2d");
				ctx.font = "20px Arial";
				ctx.fillText('Uuo', 8, 33);
				var dtx = ctx
				dtx.font = "12px Arial";
				dtx.fillText(118, 2, 12);
				c = $("#element57_71")[0];
				ctx = c.getContext("2d");
				ctx.font = "14px Arial";
				ctx.fillStyle = "white";
				ctx.fillText('57-71', 8, 31);
				c = $("#element89_103")[0];
				ctx = c.getContext("2d");
				ctx.font = "12px Arial";
				ctx.fillStyle = "white";
				ctx.fillText('89-103', 6, 31);
			}
		}
	}

	$.ajax(
	{
		url: 'allelements.xml', // name of file you want to parse
		dataType: "xml",
		success: parse,
		error: function(){alert("Error: Something went wrong");}
	});
	
	var element= "element";
	
	
	
	
});



function getAtomInfo(n)
{
	if (n < 113) //if the element is included in the XML document
	{
		$('#content').empty();
		$('#content').append('<table>')
		atoms[n].children().each(function() //append a table to the content div that includes all of the information in the XML doc
		{
			nodeName = this.nodeName;
			$("#content").append(
				'<tr>'+ '<td style="padding-right: 10px">'+nodeName + ': '+'</td>'+'<td>'+$(this).text()+'</td>'+'</tr>');
		});
		$('#content').append('</table>')
	}
	else //if the element is not included, append a message to the content div explaining that  fact
	{
		$('#content').empty();
		$('#content').append('<table>')
		$("#content").append("Information not available for this element")
		$('#content').append('</table>')
	}
}



