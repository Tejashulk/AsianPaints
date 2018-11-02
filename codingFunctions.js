//////////////////Start Common Funtions///////////////////////////////////////

function fnTrim(strParam) {
    strParam = fnLeftTrim(strParam);
    strParam = fnRightTrim(strParam);
    return strParam;
}

function fnLeftTrim(strParam) {
    while (strParam.substring(0, 1) == ' ') {
        strParam = strParam.substring(1, strParam.length);
    }
    return strParam;
}

function fnRightTrim(strParam) {
    while (strParam.substring(strParam.length - 1, strParam.length) == ' ') {
        strParam = strParam.substring(0, strParam.length - 1);
    }
    return strParam;
}

function fnClearSelectBox(strSelect) {
    var objSelect = document.getElementById(strSelect);
    objSelect.selectedIndex = 0;
    var intLength = objSelect.length
    for (i = 0; i < intLength - 1; i++)
        objSelect.remove(1);
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

//////////////////End Common Funtions///////////////////////////////////////


function funcSubmitForm() {

    var hndlrurl = "Handlers/submitDealerDetails.ashx";

    $.ajax({ async: false, url: hndlrurl, dataType: "jsonp",        
        data: {
            "DealerCode": $("#DealerCode").val(),
            "Shop": $("#Shop").val(),
            "Stock": $("#Stock").val(),
            "Customer": $("#Customer").val(),
            "Finance": $("#Finance").val(),
            "AreaofIntrest": $("input[name~='AreaofIntrest']").val()

        },
        success: function (result) {
            var successMsg = result.split("***");
            if (successMsg[0] == "success") {                
                getHiddenValues(successMsg[1]);
                document.forms["frmSubmitQuery"].submit();

            }
            else {
                var errorMsg = result.split("*****");
                document.getElementById("DealerCode_error").style.display = "none";
                document.getElementById("Shop_error").style.display = "none";
                document.getElementById("Stock_error").style.display = "none";
                document.getElementById("Customer_error").style.display = "none";
                document.getElementById("Finance_error").style.display = "none";
                document.getElementById("AreaofIntrest_error").style.display = "none";

               

                // alert(errorMsg[0]);
                if (document.getElementById(errorMsg[1]) != undefined) {
                    document.getElementById(errorMsg[1] + "_error").style.display = "block";
                    document.getElementById(errorMsg[1] + "_error").innerHTML = errorMsg[0];
                    document.getElementById(errorMsg[1]).focus();
                }
            }
        },
        error: function ()
        { alert("There is some error on server"); }
    });
}

function fnClearControls() {
       document.getElementById("frmSubmitQuery").reset();
}