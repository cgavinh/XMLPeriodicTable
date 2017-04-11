//XML Periodic Table JavaScript

function init() 
{
	if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    	xmlhttp=new XMLHttpRequest();
    }
  	else
    {// code for IE6, IE5
    	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  	biblePath="allelements.xml"
}

function getAtomInfo()
{
	$("#responseArea").html("Hello");
}
