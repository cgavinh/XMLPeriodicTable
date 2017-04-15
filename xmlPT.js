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
	}

	$.ajax(
	{
		url: 'allelements.xml', // name of file you want to parse
		dataType: "xml",
		success: parse,
		error: function(){alert("Error: Something went wrong");}
	});
});

function getAtomInfo(n)
{
	$('#content').empty();
	$('#content').append('<table>')
	atoms[n].children().each(function()
	{
		nodeName = this.nodeName;
		console.log("each");
		console.log(this);
		$("#content").append(
			'<tr>'+ '<td>'+nodeName + ': '+'</td>'+'<td>'+$(this).text()+'</td>'+'</tr>');
	});
	$('#content').append('</table>')
}

