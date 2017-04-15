var atoms = [];

$(document).ready(function()
{
	function parse(document)
	{
		$(document).find("ATOM").each(function()
		{
			var numberText = $(this).find('ATOMIC_NUMBER').text();
			var number = parseInt(numberText);
			atoms[number]=$(this);
		});
		for (var i = 1; i <= 112; i++)
		{
			var symbol = atoms[i].find('SYMBOL').text();
			var currentNumber = i.toString();
			var currentElement = element + currentNumber;
			var hashtag = "#";
			var string = hashtag + currentElement;
			var c = $(string)[0];
			var ctx = c.getContext("2d");
			ctx.font = "20px Arial";
			if(symbol.length == 1)
			{
				ctx.fillText(symbol, 18, 33);
			}
			if(symbol.length == 2)
			{
				ctx.fillText(symbol, 13, 33);
			}
			if(symbol.length == 3)
			{
				ctx.fillText(symbol, 8, 33);
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
	$('#content').empty();
	$('#content').append('<table>')
	atoms[n].children().each(function()
	{
		nodeName = this.nodeName;
		$("#content").append(
			'<tr>'+ '<td>'+nodeName + ': '+'</td>'+'<td>'+$(this).text()+'</td>'+'</tr>');
	});
	$('#content').append('</table>')
}



