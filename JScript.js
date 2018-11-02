

var DoorsPaintProduct,DoorsPaintProductImg,DoorsPaintProductDescription,DoorsPaintQtyRequired,DoorsPaintTotalTopCoat;
var WindowsPaintProduct,WindowsPaintProductImg,WindowsPaintProductDescription,WindowsPaintQtyRequired,WindowsPaintTotalTopCoat;

var selectedDoorsPaintInRoomArr = [];
var selectedWindowsPaintInRoomArr = [];

  function CalulateDoorsPaintProduct(item, RoomId) {
    var productName;
    if (Flag == false) {
        productName = item.DoorsPaintProduct;
    }
    else {
        var ddlist = "ddlDoorsPaintProduct" + RoomId;
        productName = document.getElementById(ddlist).value;
    }

    var url = "Handlers/PaintCalculatorResult.ashx";
    var postData = {
        "Type": "1",
        "Location": item.Location,
        "System": item.System,
        "FinishType": 'Plain',
        "ProductName": productName
    }

    $.ajax({ url: url, data: postData, type: "GET", async: false, success: function (result) {

        $("#dvJSONPlainFinishProduct").html("<script>" + result + "<\/script>");
    }, error: function () { }
    });
    var sql = "select * from arrPaintCalculatorData";
    var arrProductFiltered = jsonsql.query(sql, arrPaintCalculatorData);

    for (var index = 0; index < arrProductFiltered.length; index++) {

        LLMTopCoat = arrProductFiltered[index].PaintLLMCost;
        ULMTopCoat = arrProductFiltered[index].PaintULMCost;
        PaintCoverage = arrProductFiltered[index].PaintCoverage;
        PaintNoCoats = arrProductFiltered[index].PaintNoCoats;

        DoorsPaintProduct = arrProductFiltered[index].ProductName;
        DoorsPaintProductImg = arrProductFiltered[index].Thumbimages;
        DoorsPaintProductDescription = arrProductFiltered[index].ProductDescription;
    }

    var TotalDoorArea = Door * 8 * 3;

    var LLTotalTopCoat = LLMTopCoat * TotalDoorArea;
    var ULTotalTopCoat = ULMTopCoat * TotalDoorArea;

    DoorsPaintQtyRequired = Math.round(PaintNoCoats * (TotalDoorArea / PaintCoverage));
    DoorsPaintTotalTopCoat = Math.round(LLTotalTopCoat) + ' to ' + Math.round(LLTotalTopCoat);

}




function CalulateWindowsPaintProduct(item, RoomId) {
    var productName;
    if (Flag == false) {
        productName = item.WindowsPaintProduct;
    }
    else {
        var ddlist = "ddlWindowsPaintProduct" + RoomId;
        productName = document.getElementById(ddlist).value;
    }

    var url = "Handlers/PaintCalculatorResult.ashx";
    var postData = {
        "Type": "1",
        "Location": item.Location,
        "System": item.System,
        "FinishType": 'Plain',
        "ProductName": productName
    }

    $.ajax({ url: url, data: postData, type: "GET", async: false, success: function (result) {

        $("#dvJSONPlainFinishProduct").html("<script>" + result + "<\/script>");
    }, error: function () { }
    });
    var sql = "select * from arrPaintCalculatorData";
    var arrProductFiltered = jsonsql.query(sql, arrPaintCalculatorData);

    for (var index = 0; index < arrProductFiltered.length; index++) {

        LLMTopCoat = arrProductFiltered[index].PaintLLMCost;
        ULMTopCoat = arrProductFiltered[index].PaintULMCost;
        PaintCoverage = arrProductFiltered[index].PaintCoverage;
        PaintNoCoats = arrProductFiltered[index].PaintNoCoats;

        WindowsPaintProduct = arrProductFiltered[index].ProductName;
        WindowsPaintProductImg = arrProductFiltered[index].Thumbimages;
        WindowsPaintProductDescription = arrProductFiltered[index].ProductDescription;
    }

    var TotalWindowArea = Window * 3 * 2;
    var LLTotalTopCoat = LLMTopCoat * TotalWindowArea;
    var ULTotalTopCoat = ULMTopCoat * TotalWindowArea;

    WindowsPaintQtyRequired = Math.round(PaintNoCoats * (TotalWindowArea / PaintCoverage));

    WindowsPaintTotalTopCoat = Math.round(LLTotalTopCoat) + ' to ' + Math.round(LLTotalTopCoat);

}



function fnBindDoorsPaintProduct(item, RoomId) {

    var ddlDoorsPaintProduct = "ddlDoorsPaintProduct" + RoomId;
    var url = "Handlers/PaintCalculator.ashx";
    var postData = {
        "Type": "1",
        "Location": item.Location,
        "System": item.System,
        "FinishType": 'Plain',
        "ProductName": ""
    }

    $.ajax({
        dataType: "jsonp",
        data: postData,
        url: url,
        async: false,
        type: "GET",
        success: function (result) {
            {
                var arrResult = result.split("*****");
                var objSelect = document.getElementById(ddlDoorsPaintProduct);
                for (i = 0; i < arrResult.length; i++) {
                    var option = document.createElement("option");
                    option.text = arrResult[i];
                    option.value = arrResult[i];
                    try {
                        objSelect.add(option, objSelect.options[null]);
                    }
                    catch (e) {
                        objSelect.add(option, null);
                    }
                }

                if (Flag == false) {
                    document.getElementById("ddlDoorsPaintProduct" + RoomId).value = item.DoorsPaintProduct;
                    selectedDoorsPaintInRoomArr[RoomId - 1] = item.DoorsPaintProduct;
                    $('.selectpicker').selectpicker('refresh');
                } else {
                    document.getElementById("ddlDoorsPaintProduct" + RoomId).value = selectedDoorsPaintInRoomArr[RoomId - 1];
                    $('.selectpicker').selectpicker('refresh');
                }
            }

        },
        error: function (result) {

        }
    });

}


function fnBindWindowsPaintProduct(item, RoomId) {

    var ddlWindowsPaintProduct = "ddlWindowsPaintProduct" + RoomId;
    var url = "Handlers/PaintCalculator.ashx";
    var postData = {
        "Type": "1",
        "Location": item.Location,
        "System": item.System,
        "FinishType": 'Plain',
        "ProductName": ""
    }

    $.ajax({
        dataType: "jsonp",
        data: postData,
        url: url,
        async: false,
        type: "GET",
        success: function (result) {
            {
                var arrResult = result.split("*****");
                var objSelect = document.getElementById(ddlWindowsPaintProduct);
                for (i = 0; i < arrResult.length; i++) {
                    var option = document.createElement("option");
                    option.text = arrResult[i];
                    option.value = arrResult[i];
                    try {
                        objSelect.add(option, objSelect.options[null]);
                    }
                    catch (e) {
                        objSelect.add(option, null);
                    }
                }

                if (Flag == false) {
                    document.getElementById("ddlWindowsPaintProduct" + RoomId).value = item.WindowsPaintProduct;
                    selectedWindowsPaintInRoomArr[RoomId - 1] = item.WindowsPaintProduct;
                    $('.selectpicker').selectpicker('refresh');
                } else {
                    document.getElementById("ddlWindowsPaintProduct" + RoomId).value = selectedWindowsPaintInRoomArr[RoomId - 1];
                    $('.selectpicker').selectpicker('refresh');
                }
            }

        },
        error: function (result) {

        }
    });

}

function FillOnChangeDoorsPaintDropDownList(Id) {
    var RoomId;
    var data = JSON.parse($.readCookie('AdvanceCalculatorData'));
    if (data != null || data != undefined) {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            RoomId = i + 1;
            fnBindDoorsPaintProduct(item, RoomId);
        }
    }
}

function FillOnChangeWindowsPaintDropDownList(Id) {
    var RoomId;
    var data = JSON.parse($.readCookie('AdvanceCalculatorData'));
    if (data != null || data != undefined) {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            RoomId = i + 1;
            fnBindWindowsPaintProduct(item, RoomId);
        }
    }
}

function ChangeDoorsPaintProduct(Id) {
    selectedDoorsPaintInRoomArr = [];
    var data = JSON.parse($.readCookie('AdvanceCalculatorData'));
    if (data != null || data != undefined) {
        for (var i = 0; i < data.length; i++) {
            var item = i + 1;
            var x = document.getElementById("ddlDoorsPaintProduct" + item).selectedIndex;
            var y = document.getElementById("ddlDoorsPaintProduct" + item).options;
            selectedDoorsPaintInRoomArr.push(y[x].text);
        }
    }

    Flag = true;
    getAdvanceCalculatorData();
    getData();
    FillOnChangePlainFinishDropDownList(Id);
    FillOnChangeTexturedFinishDropDownList(Id);
    FillOnChangeDoorsPaintDropDownList(Id);
    FillOnChangeWindowsPaintDropDownList(Id);
}

function ChangeWindowsPaintProduct(Id) {
    selectedWindowsPaintInRoomArr = [];
    var data = JSON.parse($.readCookie('AdvanceCalculatorData'));
    if (data != null || data != undefined) {
        for (var i = 0; i < data.length; i++) {
            var item = i + 1;
            var x = document.getElementById("ddlWindowsPaintProduct" + item).selectedIndex;
            var y = document.getElementById("ddlWindowsPaintProduct" + item).options;
            selectedWindowsPaintInRoomArr.push(y[x].text);
        }
    }

    Flag = true;
    getAdvanceCalculatorData();
    getData();
    FillOnChangePlainFinishDropDownList(Id);
    FillOnChangeTexturedFinishDropDownList(Id);
    FillOnChangeDoorsPaintDropDownList(Id);
    FillOnChangeWindowsPaintDropDownList(Id);
}





resultData += '                        <div class="brdr-secn clearfix">';
resultData += '                            <h2 class="mb-25">';
resultData += '                                 Doors Paint </h2>';
resultData += '                            <div class="paintContainer clearfix mb-25">';
resultData += '                                <a class="close" href="javascript:void(0);">x</a>';
resultData += '                                <div class="paintRequired col-md-8 col-sm-7 col-xs-12">';
resultData += '                                    <div class="top-row row">';
resultData += '                                        <div class="col-md-6 col-sm-6 col-xs-7">';
resultData += '                                            <div class="faq-select-drop-down-item">';
resultData += '                                                <div class="slct-style1 selectStrong mb-10">';
resultData += '                                                    <select id ="ddlDoorsPaintProduct' + RoomId + '" class="selectpicker" onchange="ChangeDoorsPaintProduct(' + RoomId + ');">';
resultData += '                                                        <option>select</option>';
resultData += '                                                    </select>';
resultData += '                                                </div>';
resultData += '                                            </div>';
resultData += '                                        </div>';
resultData += '                                        <div class="col-md-6 col-sm-6 col-xs-5">';
resultData += '                                            <div class="desc__bold">';
resultData += '                                                <p>';
resultData += '                                                    <span class="icon-inr"></span>  ' + DoorsPaintTotalTopCoat + ' ';
resultData += '                                                </p>';
resultData += '                                            </div>';
resultData += '                                        </div>';
resultData += '                                        <div class="col-md-12 col-xs-12">';
resultData += '                                            ' + DoorsPaintQtyRequired + ' liters';
resultData += '                                        </div>';
resultData += '                                   </div>';
resultData += '                                <div class="cost">';
resultData += '                                        <span class="icon-inr"></span>' + DoorsPaintTotalTopCoat + '</div>';
resultData += '                                </div>';
resultData += '                                <div class="col-md-4 col-sm-5 hidden-xs paintImgWrapper">';
resultData += '                                    <div class="paintImgDesc">';
resultData += '                                        <div class="imgComt">';
resultData += '                                            <p class="color-product-wrapper">';
resultData += '                                                <img class="color-product-img" src="productImg/' + DoorsPaintProductImg + '">';
resultData += '                                                <span class="color-name">' + DoorsPaintProduct + '</span>';
resultData += '                                            </p>';
resultData += '                                        </div>';
resultData += '                                        <p>';
resultData += '                                            ' + DoorsPaintProductDescription + '';
resultData += '                                        </p>';
resultData += '                                    </div>';
resultData += '                                </div>';
resultData += '                            </div>';
resultData += '                        </div>';




resultData += '                        <div class="brdr-secn clearfix">';
resultData += '                            <h2 class="mb-25">';
resultData += '                                 Windows Paint </h2>';
resultData += '                            <div class="paintContainer clearfix mb-25">';
resultData += '                                <a class="close" href="javascript:void(0);">x</a>';
resultData += '                                <div class="paintRequired col-md-8 col-sm-7 col-xs-12">';
resultData += '                                    <div class="top-row row">';
resultData += '                                        <div class="col-md-6 col-sm-6 col-xs-7">';
resultData += '                                            <div class="faq-select-drop-down-item">';
resultData += '                                                <div class="slct-style1 selectStrong mb-10">';
resultData += '                                                    <select id ="ddlWindowsPaintProduct' + RoomId + '" class="selectpicker" onchange="ChangeWindowsPaintProduct(' + RoomId + ');">';
resultData += '                                                        <option>select</option>';
resultData += '                                                    </select>';
resultData += '                                                </div>';
resultData += '                                            </div>';
resultData += '                                        </div>';
resultData += '                                        <div class="col-md-6 col-sm-6 col-xs-5">';
resultData += '                                            <div class="desc__bold">';
resultData += '                                                <p>';
resultData += '                                                    <span class="icon-inr"></span>  ' + WindowsPaintTotalTopCoat + ' ';
resultData += '                                                </p>';
resultData += '                                            </div>';
resultData += '                                        </div>';
resultData += '                                        <div class="col-md-12 col-xs-12">';
resultData += '                                            ' + WindowsPaintQtyRequired + ' liters';
resultData += '                                        </div>';
resultData += '                                   </div>';
resultData += '                                <div class="cost">';
resultData += '                                        <span class="icon-inr"></span>' + WindowsPaintTotalTopCoat + '</div>';
resultData += '                                </div>';
resultData += '                                <div class="col-md-4 col-sm-5 hidden-xs paintImgWrapper">';
resultData += '                                    <div class="paintImgDesc">';
resultData += '                                        <div class="imgComt">';
resultData += '                                            <p class="color-product-wrapper">';
resultData += '                                                <img class="color-product-img" src="productImg/' + WindowsPaintProductImg + '">';
resultData += '                                                <span class="color-name">' + WindowsPaintProduct + '</span>';
resultData += '                                            </p>';
resultData += '                                        </div>';
resultData += '                                        <p>';
resultData += '                                            ' + WindowsPaintProductDescription + '';
resultData += '                                        </p>';
resultData += '                                    </div>';
resultData += '                                </div>';
resultData += '                            </div>';
resultData += '                        </div>';