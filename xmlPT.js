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

/*function getAtomInfo()
{
	$('#content').empty();
	var n=$('#elementNumber').val();
	$("#content").append(
		'<br /> Name: '+$(atoms[n]).find('NAME').text() +
		'<br /> Atomic Weight: '+$(atoms[n]).find('ATOMIC_WEIGHT').text() +
		'<br /> Oxidation States: '+$(atoms[n]).find('OXIDATION_STATES').text());
}*/

function getAtomInfo()
{
	$('#content').empty();
	var n=$('#elementNumber').val();
	atoms[n].children().each(function()
	{
		nodeName = this.nodeName;
		console.log("each");
		console.log(this);
		$("#content").append(
			'<br />'+nodeName + ': '+$(this).text());
	});
}
