(function(){
del_footer_button(1);
add_footer_button(1,'Save','saveMidway1()','_top',40);
//del_footer_button(2);
//add_footer_button2(2,'Save & New Call','saveandnewMidway1()','_top',40);

delete_button('Call Detail', 1);
//delete_button('Call Details', 1);
createNewSaveButton('Call Detail',1,'Save','saveMidway1()','_top',40);
//createNewSaveButton2('Call Details',2,'Save & New Call','saveandnewMidway1()','_top',40);
addProdDeailedSec();
addSamplesDropSec();

function del_footer_button(position) {
    var i;
    var mytables = document.getElementsByTagName("table");
    for (i = 0; i < mytables.length;i++) {
        try {
		    if (mytables[i].className == "footbar") 
			{
			  var mytr = mytables[i].getElementsByTagName("tr");
			  var newtd = mytr[0].deleteCell(position);
            }
        } catch (ex) {
            // you really don't want to enable this unless at wits end
            // alert("Exception! " + ex.toString());
        }
    }
    return false;
}

function add_footer_button(position, button_text, url, target_window, features) {
    var i;
    var mytables = document.getElementsByTagName("table");
    for (i = 0; i < mytables.length; i++) {
        try {
            if (mytables[i].className == "footbar") {
                 var mytr = mytables[i].getElementsByTagName("tr");				
                 var newtd = mytr[0].insertCell(position);
                    newtd.innerHTML = "<div id='foot' class='buttonTD' " +
                    "onmouseover='toggleNavButton(this);' " +
                    "onmouseout='toggleNavButton(this);' " +
					"onclick='if(saveFlg==1){"+url+";}'\>" +
                   // "onclick=\"window.open('" + url + "', '" + target_window + "', '" + features + "');\" >" +
                    button_text + "</div>";
                return true;
            }
        } catch (ex) {
            // you really don't want to enable this unless at wits end
            // alert("Exception! " + ex.toString());
        }
    }
    return false;
}
/*
function add_footer_button2(position, button_text, url, target_window, features) {
    var i;
    var mytables = document.getElementsByTagName("table");
    for (i = 0; i < mytables.length; i++) {
        try {
            if (mytables[i].className == "footbar") {
                 var mytr = mytables[i].getElementsByTagName("tr");				
                 var newtd = mytr[0].insertCell(position);
                    newtd.innerHTML = "<div id='foot2' class='buttonTD' " +
                    "onmouseover='toggleNavButton(this);' " +
                    "onmouseout='toggleNavButton(this);' " +
					"onclick='if(saveFlg==1){"+url+";}'\>" +
                   // "onclick=\"window.open('" + url + "', '" + target_window + "', '" + features + "');\" >" +
                    button_text + "</div>";
                return true;
            }
        } catch (ex) {
            // you really don't want to enable this unless at wits end
            // alert("Exception! " + ex.toString());
        }
    }
    return false;
}
*/
function delete_button(section_name, position) {
    var i;
    var ih;
    var tabs = document.getElementsByTagName("table");
    for (i = 0; i < tabs.length; i++) {
        var td = tabs[i].getElementsByTagName("td");
        try {
            // This can generate an exception we ignore, if so it means
            // it's not the ones we're looking for
            ih = td[0].innerHTML;
            if (ih.indexOf(section_name) == 0) {
                var tr = tabs[i].getElementsByTagName("tr");
                tr[0].deleteCell(position);
                return true;
            }
        } catch (ex) {
            // you really don't want to enable this unless at wits end
            // alert("Exception! " + ex.toString());
        }
    }
    return false;
}

function createNewSaveButton(section_name, position, button_text, url, target_window, features){
	var i;
	var ih0;
	var ih1;
	var tabs = document.getElementsByTagName("table");
	for (i = 0; i < tabs.length; i++) 
	{
	  var td = tabs[i].getElementsByTagName("td");
		try 
		  {
			ih0 = td[0].innerHTML;
			ih1 = td[1].innerHTML;
			if (ih0.indexOf(section_name) == 0 || ih1.indexOf(section_name) == 0) 
				{
				var tr = tabs[i].getElementsByTagName("tr");
				var newtd = tr[0].insertCell(position);

				newtd.innerHTML = "<div id='head' class='buttonTD' " +
				"id='testSave' " +
				"onmouseover='toggleNavButton(this);' " +
				"onmouseout='toggleNavButton(this);' " +
				"onkeypress='onButtonPress(this);' " +
				//"onclick='"+url+";'\>" +
				"onclick='if(saveFlg==1){"+url+";}'\>" +
				button_text + "</div>";
				return true;
			}
		} 
		catch (ex) {}
	}
	return false;
}
/*
function createNewSaveButton2(section_name, position, button_text, url, target_window, features){
	var i;
	var ih0;
	var ih1;
	var tabs = document.getElementsByTagName("table");
	for (i = 0; i < tabs.length; i++) 
	{
	  var td = tabs[i].getElementsByTagName("td");
		try 
		  {
			ih0 = td[0].innerHTML;
			ih1 = td[1].innerHTML;
			if (ih0.indexOf(section_name) == 0 || ih1.indexOf(section_name) == 0) 
				{
				var tr = tabs[i].getElementsByTagName("tr");
				var newtd = tr[0].insertCell(position);
				newtd.innerHTML = "<div id='head2' class='buttonTD' " +
				"id='testSave' " +  
				"onmouseover='toggleNavButton(this);' " +
				"onmouseout='toggleNavButton(this);' " +
				"onkeypress='onButtonPress(this);' " +
				//"onclick='"+url+";'\>" +
				"onclick='if(saveFlg==1){"+url+";}'\>" +
				button_text + "</div>";
				return true;
			}
		} 
		catch (ex) {}
	}
	return false;
}
*/

function addSamplesDropSec(){
	
	var newTable = "<tr><td colspan='5'>";
	newTable += "<table class='ctb' cellspacing='0' cellpadding='0' id='sampleDrop'>";
	newTable += "<tr><td>Samples Dropped</td>";
	newTable += "<td style='align:left'><div class='buttonChildTitleBarTD' id='sampleDropdiv' onclick='addNewRowSampleDrop();'>New</div></td>";
	newTable += "<td width='100%'></td></tr>";
	newTable += "<tr><td colspan='3'></td></tr></table></td></tr>";
	jQuery("[id='ContactCallEditForm.VONDMED Next Call']").parent().parent().parent().append(newTable);
}

function addProdDeailedSec(){
	var newTable = "<tr><td colspan='5'>";
	newTable += "<table class='ctb' cellspacing='0' cellpadding='0' id='prodDetail'>";
	newTable += "<tr><td>Products Detailed</td>";
	newTable += "<td style='align:left'><div class='buttonChildTitleBarTD' id='testdiv' onclick='addNewRowProdDet();'>New</div></td>";
	newTable += "<td width='100%'></td></tr>";
	newTable += "<tr><td colspan='3'></td></tr></table></td></tr>";
	jQuery("[id='ContactCallEditForm.VONDMED Next Call']").parent().parent().parent().append(newTable);
}

})();

function addNewRowSampleDrop()
{
	var row = "<tr width='100%'><td colspan='3'>";
	row += "<table>";
	row += "<tr>";
	//row += "<td>Product Category </td>";
	//row += "<td><input name='CallSampDropNew.Primary Product Line Name' id='CallSampDropNew.Primary Product Line Name' maxlength='100' class='inputReadOnly' tabindex='-1' readonly='readonly' type='text' value='' size='20' /></td>";
	row += "<td><span style='color:red' class='requiredText'>Product* </span></td>";
	row += "<td><select STYLE='width: 130px' id='prodNameSamDrop'><option value='none'></option><option value='Arcoxia 120mg'>Arcoxia 120mg</option><option value='Crocin'>Crocin</option><option value='Omez'>Omez</option><option value='Singulair 10x100mg'>Singulair 10x100mg</option><option value='Singulair 20x40mg'>Singulair 20x40mg</option></select></td>";
	row += "<td><span id=div3 style='color:red' style='visibility:hidden' class='requiredText'>required</span></td>";
	row += "<td>Lot # </td>";
	row += "<td><input name='CallSampDropNew.LOT Name' size='5' maxlength='20' type='text' value='' class='inputControl' id='CallSampDropNew.LOT Name'/></td></td>";
	row += "<td><span style='color:red' class='requiredText'>Quantity* </span></td>";
	row += "<td><input name='CallSampDropNew.Quantity' size='20' type='text' value='' class='inputControl' id='CallSampDropNew.Quantity' /></td>";
	row += "<td><span id=div4 style='color:red' style='visibility:hidden' class='requiredText'>required</span></td>";
	row += "<td><input type='button' name='delete' id='ROWID' value='delete' onclick= rowDelete();></input></td>";
	row += "</tr></table></td></tr>";	
	jQuery("#sampleDrop").append(row);
	ctrowsamp++; 
    //alert("ROW COUNTER Initial ctrowsamp : "+ctrowsamp);
}

function rowDelete() {
ctrowsamp--;
jQuery("#ROWID").parent().parent().parent().parent().parent().remove();
}


function addNewRowProdDet(){
	var row = "<tr width='100%'><td colspan='3'>";
	row += "<table>";
	row += "<tr>";
	row += "<td><span style='color:red' class='requiredText'>Product* </span></td>";
	row += "<td><select STYLE='width: 130px' id='prodNamePrDet'><option value='none'></option><option value='Arcoxia 120mg'>Arcoxia 120mg</option><option value='Crocin'>Crocin</option><option value='Omez'>Omez</option><option value='Singulair 10x100mg'>Singulair 10x100mg</option><option value='Singulair 20x40mg'>Singulair 20x40mg</option></select></td>";
	row += "<td><span id=div1 style='color:red' style='visibility:hidden' class='requiredText'>required</span></td>";
	row += "<td>Priority: </td>";
	row += "<td><input name=CallProdDetailNew.Priority size='5' tabindex='4' type='text' value='' class=inputControl id='CallProdDetailNew.Priority' /></td>";
	row += "<td><span style='color:red' class='requiredText'>Indication*:</span></td>";
	row += "<td><select name='CallProdDetailNew.Indication' tabindex='5' onchange=onDropDownChange (this); class=inputControl id='CallProdDetailNew.Indication'><option /><option value='Allergy'>Allergy</option><option value='Asthma'>Asthma</option><option value='Arrhythmia'>Arrhythmia</option><option value='Heart Failure'>Heart Failure</option><option value='Syncope'>Syncope</option><option value='Other'>Other</option></select></td>";
	row += "<td><span id=div2 style='color:red' style='visibility:hidden' class='requiredText'>required</span></td>";
	row += "<td>Issues:</td>";
	row += "<td><select name='CallProdDetailNew.Issue' tabindex='6' onchange=onDropDownChange (this); class='inputControl' id='CallProdDetailNew.Issue'><option /><option value='Side Effects'>Side Effects</option><option value='Efficacy'>Efficacy</option><option value='Cost vs. Generics'>Cost vs. Generics</option><option value='Price'>Price</option></select></td>";
	row += "<td><input type='button' name='delete' id='ROWID2' value='delete' onclick=rowDelete2();></input></td>";
	row += "</tr></table></td></tr>";	
	jQuery("#prodDetail").append(row);
	ctrowprod++; 
   // alert("ROW COUNTER Initial ctrowprod : "+ctrowprod);
}

function rowDelete2(){
ctrowprod--;
jQuery("#ROWID2").parent().parent().parent().parent().parent().remove();
}

function saveMidway1()
{
document.getElementById('foot').disabled=true;
document.getElementById('head').disabled=true;
//document.getElementById('foot2').disabled=true;
//document.getElementById('head2').disabled=true;
saveFlg=0;
//alert('Inside saveMidway1');
saveAllDetails();
}
function saveMidway2()
{
document.getElementById('foot').disabled=false;
document.getElementById('head').disabled=false;
//document.getElementById('foot2').disabled=false;
//document.getElementById('head2').disabled=false;
//alert('Inside SaveMidway2');
saveFlg=1;
}

/*
function saveandnewMidway1()
{
newbutton=1;
document.getElementById('foot2').disabled=true;
document.getElementById('head2').disabled=true;
document.getElementById('foot').disabled=true;
document.getElementById('head').disabled=true;
saveFlg=0;
saveAndNewAllDetails();
}
function saveandnewMidway2()
{
document.getElementById('foot2').disabled=false;
document.getElementById('head2').disabled=false;
document.getElementById('foot').disabled=false;
document.getElementById('head').disabled=false;
saveFlg=1;
//return;
}
*/


function saveAllDetails()
{
	createNewCallActivity(function() {
		loadCallDetailsPage();
	});
}
/*
function saveAndNewAllDetails()
{
	//alert("Inside Save All details");
	createNewCallActivity(function() {
	//var pathname = window.location;
	//alert(pathname);	
	newcall();
	});
}

function newcall(){
window.location.reload();
//doNavigate("https://secure-ausomxapa.crmondemand.com/OnDemand/user/ContactCallInsert?OMCR0=AAPA-2WJ5PW&OMTGT=ContactCallInsert&OMTHD=ActivityNewNav&OMCBO=Contact&OMRET0=ContactDetail%3focTitle%3dIDC%2bTest3%26OMTGT%3dContactDetailForm%26OMTHD%3dContactDetailNav%26ocEdit%3dY%26OCTYPE%3d%26ocTitleField%3dFull%2bName%26ContactDetailForm.Id%3dAAPA-2WJ5PW&OCNOEDITTYPE=Y&OCTYPE=")
}
*/

function createWebSerConn(callback)
{
	//alert("creating connection with Web services");
	var userName = 'MERCKTEST_CTE01/pfeil';
	var password = 'method00';
	try{
		jQuery.ajax({
		   url: '/Services/Integration?command=login',
		   dataType: 'xml',
		   beforeSend: function(xhr) {
			   xhr.setRequestHeader('UserName', userName);
			   xhr.setRequestHeader('Password', password);               
		   },
		   complete: function(xhr, textStatus) {
				//alert("created connection with Web services : " + xhr);
				callback.call(this, xhr, textStatus);    
		   }
	   });	
	}
	catch (e) {
		alert('Error: ' + e.message);
	}

}

function getListData(type, xmlData) {
	var arr = [];
	jQuery(type, xmlData).each(function(index, item) {
		var obj = {};
		jQuery(item).children().each(function(index, item) {
		  var fieldName = jQuery(item).get(0).tagName;
		  var fieldValue = jQuery(item).text();
		  obj[fieldName] = fieldValue;
		});
		arr.push(obj);
	});
	return arr;    
}

function loadCallDetailsPage()
{
	//alert("will load the Call Details page");
	var e= $(".vlk");
	var f= e[0];
	doNavigate(f);
}

function createNewCallActivity(callback){
	//alert("Inside Create New Activity : This will return Activity Id");
	var ownerId = document.getElementById('ContactCallEditForm.Owner Id').value;
	var contactPerId = document.getElementById('ContactCallEditForm.Id').value;
	//var contactPerId = 'AAPA-2YBYRF';
	var subjectValue = document.getElementById('ContactCallEditForm.Description').value;
	var objectiveVal = document.getElementById('ContactCallEditForm.VONDMED Call').value;
	var startTime = document.getElementById('ContactCallEditForm.Planned').value;
	var accId = document.getElementById('ContactCallEditForm.Account Id').value;
	//var addressVal = document.getElementById('ContactCallEditForm.Personal Location Id').value;
	var smartCallId = document.getElementById('ContactCallEditForm.Template Id').value;
	var endTime = document.getElementById('ContactCallEditForm.Planned Completion').value;
	var typeVal = document.getElementById('ContactCallEditForm.Type').value;
	var statusVal = document.getElementById('ContactCallEditForm.Status').value;
	var durationVal = document.getElementById('ContactCallEditForm.VONDMED Calc Duration').value;
	var carrencyVal = document.getElementById('ContactCallEditForm.Currency Code').value;
	var displayVal = document.getElementById('ContactCallEditForm.Mod Id').value;
	var refId = document.getElementById('ContactCallEditForm.Sample Reference Number').value;
	var costVal = document.getElementById('ContactCallEditForm.Associated Cost').value;
	var paperSignVal = document.getElementById('ContactCallEditForm.VONDMED Paper Signature').value;
	var privateVal = document.getElementById('ContactCallEditForm.Private').value;
	var descVal = document.getElementById('ContactCallEditForm.Comment').value;
	var nextCallVal = document.getElementById('ContactCallEditForm.VONDMED Next Call').value;

	var startTimeMod;	
	var endTimeMod;

	if(startTime != null && (startTime.indexOf(' PM') > -1)){
		startTimeMod = startTime.replace(' PM', ':00');
	}
	else if(startTime != null && (startTime.indexOf(' AM') > -1)){
		startTimeMod = startTime.replace(' AM', ':00');	
	}
	else{
		startTimeMod = '';
	}

	if(endTime != null && (endTime.indexOf(' PM') > -1)){
		endTimeMod = endTime.replace(' PM', ':00');
	}
	else if(endTime != null && (endTime.indexOf(' AM') > -1)){
		endTimeMod = endTime.replace(' AM', ':00');	
	}
	else{
		endTimeMod = '';
	}

	var contactId = $("input[id='ContactCallEditForm.Contact Full Name']").val();
	var ownerVal = $("input[id='ContactCallEditForm.Assigned To']").val();
	
	var prodIDC='Test';
	var prodIDC2='Test';
	if(ctrowprod!=0){
	prodIDC= document.getElementById('prodNamePrDet').value;
	prodIDC2= document.getElementById('CallProdDetailNew.Indication').value;
    //alert("prodIDC fetched: "+prodIDC);
	}
	
	var sampIDC='Test';
	var sampIDC2='Test';
	if(ctrowsamp!=0){
	sampIDC= document.getElementById('prodNameSamDrop').value;
	sampIDC2= document.getElementById('CallSampDropNew.Quantity').value;
	}
	
	if((subjectValue == null || subjectValue == '') || (startTime == null || startTime == '')
		|| (endTime == null || endTime == '') || (typeVal == null || typeVal == '') || (contactId == null || contactId == '') 
		|| (ownerVal == null || ownerVal == ''))
	{
		validateSubmit('ContactCallEditForm','\/OnDemand\/user\/ContactCallEditForm?OMCR0='+contactPerId+'&OMTHD=Save&OMTGT=ContactCallEditForm&OMCBO=Contact&OCNOEDITTYPE=Y&OMRET0=ContactDetail%3focTitle%3dIDC%2bTest2%26OMTGT%3dContactDetailForm%26OMTHD%3dContactDetailNav%26ocEdit%3dY%26OCTYPE%3d%26ocTitleField%3dFull%2bName%26ContactDetailForm.Id%3dAAPA-2TQZ7P&OCTYPE=', this);
		//if(newbutton==1)
		//    saveandnewMidway2();
		//else	
			saveMidway2();
	}
	else if ((prodIDC == null || prodIDC == '' || prodIDC == 'none') && (prodIDC2 == null || prodIDC2 == '' || prodIDC2 == 'none'))
	{
		//if(newbutton==1)
		//    saveandnewMidway2();
		//else	
			saveMidway2();
		//alert('inside 2nd elseif');
	div1.style.visibility="visible";
	div2.style.visibility="visible";
	}
	else if (prodIDC == null || prodIDC == '' || prodIDC == 'none')
	{	
	//alert('Inside 3rd Else if');
	div1.style.visibility="visible";
	//if(newbutton==1)
		//    saveandnewMidway2();
		//else	
			saveMidway2();
	}
	else if(prodIDC2 == null || prodIDC2 == '' || prodIDC2 == 'none')
	{   div2.style.visibility="visible";  
	//if(newbutton==1)
		//    saveandnewMidway2();
		//else	
			saveMidway2();
	}
	else if ((sampIDC == null || sampIDC == '' || sampIDC == 'none') && (sampIDC2 == null || sampIDC2 == '' || sampIDC2 == 'none'))
	{
		//if(newbutton==1)
		//    saveandnewMidway2();
		//else	
			saveMidway2();
	div3.style.visibility="visible"; 
	div4.style.visibility="visible"; 
	}
	else if (sampIDC == null || sampIDC == '' || sampIDC == 'none')
	{ div3.style.visibility="visible"; 
	//if(newbutton==1)
		//    saveandnewMidway2();
		//else	
			saveMidway2();
	}
	else if (sampIDC2 == null || sampIDC2 == '' || sampIDC2 == 'none')
	{ div4.style.visibility="visible"; 
	 //if(newbutton==1)
		//    saveandnewMidway2();
		//else	
			saveMidway2();
	}
	else{
		var fields = {
		    ActivityId: "" + contactPerId + "",
			Objective: "" + objectiveVal + "",
			Subject: "" + subjectValue + "",
			OwnerId: "" + ownerId + "",
			Type: "" + typeVal + "",
			AccountId: "" + accId + "",
			SmartCall: "" + smartCallId + "",
			Status: "" + statusVal + "",
			Duration:  "" + durationVal + "",
			CurrencyCode: "" + carrencyVal + "",
			//Display: "" + displayVal + "",
			RefNum: "" + refId + "",
			Cost: "" + costVal + "",
			PaperSign: "" + paperSignVal + "",
			Private: "" + privateVal + "",
			Description: "" + descVal + "",
			NextCall: "" + nextCallVal + "",
			StartTime: "" + startTimeMod + "",
			EndTime: "" + endTimeMod + ""
		};
		
	/*	var fieldsCont = {
			ContactId: "" + contactPerId + ""
		};*/
		createActivityIdUsingWeb(fields,function(){
			callback.call();
		});	
	}
}

function createActivityIdUsingWeb(fields, callback)
{
	var activityId;
	//alert('Inside createActivityUsingWeb');
	createWebSerConn(function(xhr, textStatus){
		var soapAction = 'document/urn:crmondemand/ws/activity/10/2004:Activity_Update';
		var soapRequestTemplate = '' +
			'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
			'   <soapenv:Header/>' +
			'   <soapenv:Body>' +
			'      <ActivityNWS_Activity_Update_Input xmlns="urn:crmondemand/ws/activity/10/2004">' +
		//	'         <ListOfContact>' +
		//	'            <Contact>' +
		//	'               <%=fieldsCont%>' +
			' 		        <ListOfActivity>' +
			'         			<Activity>'	+
			'		               <%=fields%>' +				
			'					</Activity>' +				
			'         		</ListOfActivity>' +				
		//	'            </Contact>' +
		//	'         </ListOfContact>' +
			'      </ActivityNWS_Activity_Update_Input>' +
			'   </soapenv:Body>' +
			'</soapenv:Envelope>';		

		var fieldsXML = '';
		for (fieldName in fields) {
			fieldsXML += '<' + fieldName + '><![CDATA[' + fields[fieldName] + ']]></' + fieldName + '>';
		}
		
	/*	var fieldsXMLCont = '';
		for (fieldNameCont in fieldsCont) {
			fieldsXMLCont += '<' + fieldNameCont + '>' + fieldsCont[fieldNameCont] + '</' + fieldNameCont + '>';
		}	*/

		var soapRequest = soapRequestTemplate.replace("<%=fields%>", fieldsXML);	
		//var soapRequestFinal = soapRequest.replace("<%=fieldsCont%>", fieldsXMLCont);	

		//alert("soapRequest : " + soapRequestFinal);
		//alert("soapRequest : " + soapRequest);

		try{
			jQuery.ajax({
						url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',
						type: 'POST',
						contentType: 'text/xml',
						dataType: 'xml',
						data: soapRequest,
						beforeSend: function(xhr) {
							//alert("Before sending request to insert : " + xhr);
							xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');  
						},   
						error: function(errormessage) {
							alert("Error : " + errormessage.responseText);
						},   
						complete: function(xhr, textStatus) {
							//alert("Completed");
						},								
						success: function(xmlData, textStatus) {
						//	alert("successssfullllllllyy created Activity");
							var items = getListData('Activity', xmlData);
							//alert("items : " + items);
							activityId = items[0].ActivityId;
							//alert("activityId : " + activityId);
							
							//createProductDetailInfo(activityId, function(){
							//	callback.call();
							midway(activityId, function(){
							callback.call();
							});
							
							//});
						}
					});	
		}
		catch (e) {
			alert('Error: ' + e.message);
		}
		//return true;
	});

}
function midway(activityId, callback)
{
if(ctrowsamp!=0 || ctrowprod!=0){
//alert("ROW COUNTER before calling ProductDetailInfo SAMPLE: "+ctrowsamp); 
//alert("ROW COUNTER before calling ProductDetailInfo PRODUCT: "+ctrowprod);
//Currently when the below mentioned function is called the 2nd time the Sample is not created as it is taking 
//the same row twice because of the similar ID tag in the HTML. 
createProductDetailInfo(activityId, function(){midway(activityId, function(){callback.call();
});});
}
else 
{
callback.call();
}
}

function createProductDetailInfo(activityId, callback)
{
	//alert("Getting Product Info");
	//counter++;
	//alert("Productcallinfo Call No." +counter);
	var productNameProdet;
	var productNameSamp;
	var bothPresent = false;

	if(document.getElementById('prodNamePrDet') != null && document.getElementById('prodNamePrDet') != '')
	{
		productNameProdet = document.getElementById('prodNamePrDet').value;
	}
	if(document.getElementById('prodNameSamDrop') != null && document.getElementById('prodNameSamDrop') != '')
	{
		productNameSamp = document.getElementById('prodNameSamDrop').value;
	}

	if(productNameProdet != null && productNameProdet != '' && productNameSamp != null && productNameSamp != '')
	{
		bothPresent = true;

		//alert('productNameProdet : ' + productNameProdet);
		var fieldsProdet = {
			ProductId: '',
			Name: " ='" + productNameProdet + "' "
		};	
		callWebServToGetProdInfo(fieldsProdet, activityId, 'ProdDetail', function(){
			if(bothPresent == true){ }
		});	

		//alert('productNameSamp : ' + productNameSamp);
		var fieldsSampDrop = {
			ProductId: '',
			Name: " ='" + productNameSamp + "' "
		};	
		callWebServToGetProdInfo(fieldsSampDrop, activityId, 'SampDrop', function(){
			if(bothPresent == true)
			{
				callback.call();
			}
		});
	}
	else if(productNameProdet != null && productNameProdet != '' && productNameSamp == null)
	{
		//alert('productNameProdet : ' + productNameProdet);
		var fieldsProdet = {
			ProductId: '',
			Name: " ='" + productNameProdet + "' "
		};	
		callWebServToGetProdInfo(fieldsProdet, activityId, 'ProdDetail', function(){
			callback.call();
		});		
	}
	else if(productNameProdet == null && productNameSamp != null && productNameSamp != '')
	{
		//alert('productNameSamp : ' + productNameSamp);
		var fieldsSampDrop = {
			ProductId: '',
			Name: " ='" + productNameSamp + "' "
		};	
		callWebServToGetProdInfo(fieldsSampDrop, activityId, 'SampDrop', function(){
				callback.call();
		});
	}
	else
	{
		callback.call();
	}
}

function callWebServToGetProdInfo(fieldsProdet, activityId, reqFrom, callback)
{
	//alert('Inside callWebServToGetProdInfo');
	createWebSerConn(function(xhr, textStatus){
		var soapAction = 'document/urn:crmondemand/ws/product/10/2004:ProductQueryPage';
		var soapRequestTemplate = '' +
			'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
			'   <soapenv:Header/>' +
			'   <soapenv:Body>' +
			'      <ProductWS_ProductQueryPage_Input xmlns="urn:crmondemand/ws/product/10/2004">' +
			'         <PageSize>100</PageSize>' +
			'         <ListOfProduct>' +
			'            <Product>' +
			'               <%=fieldsProdet%>' +
			'            </Product>' +
			'         </ListOfProduct>' +
			'         <StartRowNum>0</StartRowNum>' +
			'      </ProductWS_ProductQueryPage_Input>' +
			'   </soapenv:Body>' +
			'</soapenv:Envelope>';		

		var fieldsXML = '';
		for (fieldName in fieldsProdet) {
			fieldsXML += '<' + fieldName + '>' + fieldsProdet[fieldName] + '</' + fieldName + '>';
		}

		var soapRequest = soapRequestTemplate.replace("<%=fieldsProdet%>", fieldsXML);	

		//alert("soapRequest : " + soapRequest);

		try{
			jQuery.ajax({
						url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',
						type: 'POST',
						contentType: 'text/xml',
						dataType: 'xml',
						data: soapRequest,
						beforeSend: function(xhr) {
							//alert("Before sending request to insert : " + xhr);
							xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');  
						},   
						complete: function(xhr, textStatus) {
							//alert("Completed");
						},								
						success: function(xmlData, textStatus) {
							//alert("successssfullllllll getting the product Info");
							var items = getListData('Product', xmlData);
							////alert("items : " + items);
							var productId = items[0].ProductId;
							//alert("productId : " + productId);
							//createProductDetailed(activityId, productId);

							if(productId != null)
							{
								if(reqFrom != null && reqFrom == 'ProdDetail')
								{
									callWebServToCreateProdDet(productId, activityId, function(){
										callback.call();
									});
								}
								else if(reqFrom != null && reqFrom == 'SampDrop')
								{
									//alert('Control Came from SampDrop');
									callWebServToCreateSampDrop(productId, activityId, function(){
										callback.call();
									});
								}
								else
								{
									alert('Control not identified');
									return;
								}
							}
							else
							{
								alert('Product Name is not valid!!!');
								return;
							}
						}
					});	
		}
		catch (e) {
			alert('Error: ' + e.message);
		}
		//return true;
	});
}

function callWebServToCreateProdDet(productId, activityId, callback)
{
	var indicationVal = document.getElementById('CallProdDetailNew.Indication').value;
	var priorityVal = document.getElementById('CallProdDetailNew.Priority').value;
	var issueVal = document.getElementById('CallProdDetailNew.Issue').value;

	var fieldsAct = {
		ActivityId: "" + activityId + ""
	};

	var fieldsProd = {
		ProductId: "" + productId + "",
		Indication: "" + indicationVal + "",
		Priority: "" + priorityVal + "",
		Issue: "" + issueVal + ""
	};

	createWebSerConn(function(xhr, textStatus){
		var soapAction = 'document/urn:crmondemand/ws/activity/10/2004:Activity_InsertChild';
		var soapRequestTemplate = '' +
			'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
			'   <soapenv:Header/>' +
			'   <soapenv:Body>' +
			'      <ActivityNWS_Activity_InsertChild_Input xmlns="urn:crmondemand/ws/activity/10/2004">' +
			'         <ListOfActivity>' +
			'            <Activity>' +
			'		        <%=fieldsAct%>' +
			'	            <ListOfProductsDetailed>' +
			'		            <ProductsDetailed>' +					
			'		               <%=fieldsProd%>' +
			'		            </ProductsDetailed>' +
			'	            </ListOfProductsDetailed>' +
			'            </Activity>' +
			'         </ListOfActivity>' +
			'      </ActivityNWS_Activity_InsertChild_Input>' +
			'   </soapenv:Body>' +
			'</soapenv:Envelope>';		

		var fieldsXML = '';
		for (fieldName in fieldsProd) {
			fieldsXML += '<' + fieldName + '>' + fieldsProd[fieldName] + '</' + fieldName + '>';
		}
		
		var fieldsActXML = '';
		for (fieldNameAct in fieldsAct) {
			fieldsActXML += '<' + fieldNameAct + '>' + fieldsAct[fieldNameAct] + '</' + fieldNameAct + '>';
		}			

		var soapRequest = soapRequestTemplate.replace("<%=fieldsProd%>", fieldsXML);	
		var finalSoapRequest = soapRequest.replace("<%=fieldsAct%>", fieldsActXML);	

		//alert("soapRequest : " + finalSoapRequest);

		try{
			jQuery.ajax({
						url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',
						type: 'POST',
						contentType: 'text/xml',
						dataType: 'xml',
						data: finalSoapRequest,
						beforeSend: function(xhr) {
							//alert("Before sending request to insert : " + xhr);
							xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');  
						},   
						complete: function(xhr, textStatus) {
							//alert("Completed");
						},								
						success: function(xmlData, textStatus) {
						    ctrowprod--;
							//alert("ROW COUNTER DECreasing ctrowprod: "+ctrowprod);
							//alert("successssfullllllllyy created the Product detailed");
							jQuery("#ROWID2").parent().parent().parent().parent().parent().remove();			
							callback.call();
							
						}
					});	
		}
		catch (e) {
			alert('Error: ' + e.message);
		}
		//return true;
	});
}

function callWebServToCreateSampDrop(productId, activityId, callback)
{
    //alert('INSIDE callWebServToCreateSampDrop!!');
	//var prodCategory = document.getElementById('CallSampDropNew.Primary Product Line Name').value;
	var lotNumber = document.getElementById('CallSampDropNew.LOT Name').value;
	var qtyVal = document.getElementById('CallSampDropNew.Quantity').value;

	var fieldsAct = {
		ActivityId: "" + activityId + ""
	};

	var fieldsProd = {
		ProductId: "" + productId + "",
		//ProductCategory: "" + prodCategory + "",
		Quantity: "" + qtyVal + "",
		LotNumber: "" + lotNumber + ""
	};

	createWebSerConn(function(xhr, textStatus){
		var soapAction = 'document/urn:crmondemand/ws/activity/10/2004:Activity_InsertChild';
		var soapRequestTemplate = '' +
			'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
			'   <soapenv:Header/>' +
			'   <soapenv:Body>' +
			'      <ActivityNWS_Activity_InsertChild_Input xmlns="urn:crmondemand/ws/activity/10/2004">' +
			'         <ListOfActivity>' +
			'            <Activity>' +
			'		        <%=fieldsAct%>' +
			'	            <ListOfSampleDropped>' +
			'		            <SampleDropped>' +					
			'		               <%=fieldsProd%>' +
			'		            </SampleDropped>' +
			'	            </ListOfSampleDropped>' +
			'            </Activity>' +
			'         </ListOfActivity>' +
			'      </ActivityNWS_Activity_InsertChild_Input>' +
			'   </soapenv:Body>' +
			'</soapenv:Envelope>';		

		var fieldsXML = '';
		for (fieldName in fieldsProd) {
			fieldsXML += '<' + fieldName + '>' + fieldsProd[fieldName] + '</' + fieldName + '>';
		}
		
		var fieldsActXML = '';
		for (fieldNameAct in fieldsAct) {
			fieldsActXML += '<' + fieldNameAct + '>' + fieldsAct[fieldNameAct] + '</' + fieldNameAct + '>';
		}			

		var soapRequest = soapRequestTemplate.replace("<%=fieldsProd%>", fieldsXML);	
		var finalSoapRequest = soapRequest.replace("<%=fieldsAct%>", fieldsActXML);	

		//alert("soapRequest : " + finalSoapRequest);

		try{
			jQuery.ajax({
						url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',
						type: 'POST',
						contentType: 'text/xml',
						dataType: 'xml',
						data: finalSoapRequest,
						beforeSend: function(xhr) {
							//alert("Before sending request to insert : " + xhr);
							xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');  
						},   
						complete: function(xhr, textStatus) {
							//alert("Completed");
						},								
						success: function(xmlData, textStatus) {
						    ctrowsamp--;
							//alert("ROW COUNTER DECreasing ctrowsamp: "+ctrowsamp);
							//alert("successssfullllllllyy created the Sample dropped");
							jQuery("#ROWID").parent().parent().parent().parent().parent().remove();			
							callback.call();
						}
					});	
		}
		catch (e) {
			alert('Error: ' + e.message);
		}
		//return true;
	});
}
