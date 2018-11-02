<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.02, user-scalable=no">
    <title>Asian Paints</title>
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/superfish.css">
    <link rel="stylesheet" href="css/superfish-navbar.css">
    <link rel="stylesheet" href="css/jquery.bxslider.css">
    <link rel="stylesheet" href="css/awesome-bootstrap-checkbox.css">
    <link rel="stylesheet" href="css/responsive-tabs.css">
    <link rel="stylesheet" href="css/fresco.css">
    <link rel="stylesheet" href="css/lytebox.css">
    <link rel="stylesheet" href="css/bootstrap-select.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/demo.css" />
    <link rel="stylesheet" href="css/component2.css" />
    <link rel="stylesheet" href="css/content.css" />
    <link rel="stylesheet" href="css/responsive.css">
    <!--custom css-->
    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/owl.theme.css" />
    <link rel="stylesheet" href="css/new_added_css.css">
    <link rel="stylesheet" href="css/deepak.css">
    <link rel="stylesheet" href="css/aniruddha.css">
    <!--custom css-->
    <link rel="stylesheet" href="css/new_added_css.css" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div class="body-container" id="container">
        <header class="main-header">           
            
        </header>
        <div class="inner-secn">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-12 pd-left clearfix p-detailsWrap" id="p-details">
                        <form id="frmSubmitQuery">
                        <div class="profile-details">
                            <div class="prof-picture mb-55 clearfix ">
                                <div class="service_testimonial_content clearfix">
                                    <div class="service_testi_thumb mb-55">
                                        <img src="images/service-testi-thumb1.png" alt=""></div>
                                </div>
                                <div class="details-inputs">
                                    Dealer Code : &nbsp;<input type="text" value="DealerCode" id="DealerCode" name="DealerCode"
                                        onclick="if(this.value==this.defaultValue){this.value='';}" maxlength="120" onblur="if(this.value==''){this.value=this.defaultValue;}"
                                        tabindex="1" />
                                    <span class="error" id="DealerCode_error"></span>
                                    <br />
                                    <br />
                                    <br />
                                    Shop : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                    <input type="text" value="Shop" id="Shop" name="Shop" onclick="if(this.value==this.defaultValue){this.value='';}"
                                        maxlength="120" onblur="if(this.value==''){this.value=this.defaultValue;}" tabindex="1" />
                                    <span class="error" id="Shop_error"></span>
                                    <br />
                                    <br />
                                    <br />
                                    Stock : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <input type="text" value="Stock" id="Stock" name="Stock" onclick="if(this.value==this.defaultValue){this.value='';}"
                                        maxlength="120" onblur="if(this.value==''){this.value=this.defaultValue;}" tabindex="1" />
                                    <span class="error" id="Stock_error"></span>
                                    <br />
                                    <br />
                                    <br />
                                    Customer : &nbsp; &nbsp; &nbsp;
                                    <input type="text" value="Customer" id="Customer" name="Customer" onclick="if(this.value==this.defaultValue){this.value='';}"
                                        maxlength="120" onblur="if(this.value==''){this.value=this.defaultValue;}" tabindex="1" />
                                    <span class="error" id="Customer_error"></span>
                                    <br />
                                    <br />
                                    <br />
                                    Finance : &nbsp; &nbsp; &nbsp; &nbsp;
                                    <input type="text" value="Finance" id="Finance" name="Finance" onclick="if(this.value==this.defaultValue){this.value='';}"
                                        maxlength="120" onblur="if(this.value==''){this.value=this.defaultValue;}" tabindex="1" />
                                    <span class="error" id="Finance_error"></span>
                                    <br />
                                    <br />
                                    <br />
                                    Nomination your area of intrest (choose any one)
                                    <br />
                                    <br />
                                    <br />                                    
                                    <input type="radio" name="AreaofIntrest" value="Shop" checked>
                                    Shop<br>
                                    <input type="radio" name="AreaofIntrest" value="Stock">
                                    Stock<br>
                                    <input type="radio" name="AreaofIntrest" value="Customer">
                                    Customer<br>
                                    <input type="radio" name="AreaofIntrest" value="Finance">
                                    Finance <br><span class="error" id="AreaofIntrest_error"></span>
                                    <br><input type="button" class="btn-submit" value="SUBMIT" onclick="funcSubmitForm();"
                                        tabindex="15">
                                </div>
                            </div>
                            <div class="clearfix">
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <a href="javascript:;" class="move-top">
        <img src="images/move-top.png" alt="Image">
    </a>
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/modernizr.custom.js"></script>
    <script src="js/uiMorphingButton_fixed.js"></script>
    <script src="js/classie.js"></script>
    <script src="js/plugin.js"></script>
    <script src="js/lytebox.js"></script>
    <script src="js/bootstrap-select.min.js"></script>
    <script src="js/imagesloaded.pkgd.min.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src="js/main.js"></script>
    <script src="js/jsonSql.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/CodingFunctions.js"></script>
    
    
    
</body>
</html>
