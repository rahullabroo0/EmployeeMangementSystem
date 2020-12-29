var flag=0;
export function myFunction(event) {
var arw=event;
  var element = document.getElementById(arw);
  // console.log(element);
  if(flag===0){
  element.classList.remove("down");
  element.classList.add("up");
  flag=1;
  }else{
  element.classList.remove("up");
  element.classList.add("down");
  flag=0;
  }
}
export function copyaddress()
 {
   
  var apt = document.getElementById('apt').value;
  var floor = document.getElementById('floor').value;
  var street = document.getElementById('street').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var country = document.getElementById('country').value;
  var zip = document.getElementById('zip').value;

   
  //  element.checked = !element.checked;
  var defaultCheck1=document.getElementById('defaultCheck1').checked;
   if(defaultCheck1){
    document.getElementById('tapt').value=apt;
    document.getElementById('tfloor').value=floor;
    document.getElementById('tstreet').value=street;
    document.getElementById('tcity').value=city;
    document.getElementById('tstate').value=state;
    document.getElementById('tcountry').value=country;
    document.getElementById('tzip').value=zip;
   }
   else{
    document.getElementById('tapt').value="";
    document.getElementById('tfloor').value="";
    document.getElementById('tstreet').value="";
    document.getElementById('tcity').value="";
    document.getElementById('tstate').value="";
    document.getElementById('tcountry').value="";
    document.getElementById('tzip').value="";
   }
 }

function validateEmail(sEmail) {
  // console.log(sEmail);
  // eslint-disable-next-line
  var reEmail =/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  
    if(!sEmail.match(reEmail)) {
      alert("Invalid email address");
      
      return false;
    }
  
    return true;
  
  }
  export function val1(){

    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var gender = document.getElementById('gender').checked;
    var bday = document.getElementById('bday').value;

    var apt = document.getElementById('apt').value;
    var floor = document.getElementById('floor').value;
    var street = document.getElementById('street').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    var zip = document.getElementById('zip').value;
    var tapt = document.getElementById('tapt').value;
    var tfloor = document.getElementById('tfloor').value;
    var tstreet = document.getElementById('tstreet').value;
    var tcity = document.getElementById('tcity').value;
    var tstate = document.getElementById('tstate').value;
    var tcountry = document.getElementById('tcountry').value;
    var tzip = document.getElementById('tzip').value;

    var countrycode = document.getElementById('countrycode').value;
    var areacode = document.getElementById('areacode').value;
    var phonenum = document.getElementById('phonenum').value;
    var mcountrycode = document.getElementById('mcountrycode').value;
    var mareacode = document.getElementById('mareacode').value;
    var mmobilenum = document.getElementById('mmobilenum').value;
    var ecountrycode = document.getElementById('ecountrycode').value;
    var eareacode = document.getElementById('eareacode').value;
    var emobilenum = document.getElementById('emobilenum').value;
    
    var marriage = document.getElementById('marriage').checked;
    var email1 = document.getElementById('email1').value;
    var emailAlt = document.getElementById('emailAlt').value;

    // var visaexpdate = document.getElementById('visaexpdate').value;
    // var insexpdate = document.getElementById('insexpdate').value;
    var dfj = document.getElementById('dfj').value;
    var basicSal = document.getElementById('basicSal').value;
    var otherAll = document.getElementById('otherAll').value;
    var incentives = document.getElementById('incentives').value;
    
    var worklocation = document.getElementById('worklocation').value;
    var department = document.getElementById('department').value;
    var joininggrade = document.getElementById('joininggrade').value;
    var role = document.getElementById('role').value;


    var acname = document.getElementById('acname').value;
    var bank = document.getElementById('bank').value;
    var branchcode = document.getElementById('branchcode').value;
    var ifsc = document.getElementById('ifsc').value;
    var swiftcode = document.getElementById('swiftcode').value;
    var acnum = document.getElementById('acnum').value;
    var ibannum = document.getElementById('ibannum').value;

    if(!fname){
      document.getElementById("firstnameerr").innerHTML = "Enter a First Name";        
    }
    else{
      document.getElementById("firstnameerr").innerHTML = "";
    }
    if(!lname){
      document.getElementById("lastnameerr").innerHTML = "Enter a Last Name";
    }
    else{
      document.getElementById("lastnameerr").innerHTML = "";
    }
    if(!gender){
      document.getElementById("gendererr").innerHTML = "Enter a Gender";
    }
    else{
      document.getElementById("gendererr").innerHTML = "";
    }
    if(!bday){
      document.getElementById("bdayerr").innerHTML = "Enter a DOB";
    }
    else{
      document.getElementById("bdayerr").innerHTML = "";
    }
    
    if(!apt){
      document.getElementById("apterr").innerHTML = "Enter a Apartment / House";
    }
    else{
      document.getElementById("apterr").innerHTML = "";
    }
    if(!floor){
      document.getElementById("floorerr").innerHTML = "Enter a Floor";
    }
    else{
      document.getElementById("floorerr").innerHTML = "";
    }
    if(!street){
      document.getElementById("streeterr").innerHTML = "Enter a Street Address";
    }
    else{
      document.getElementById("streeterr").innerHTML = "";
    }
    if(!city){
      document.getElementById("cityerr").innerHTML = "Enter a City";
    }
    else{
      document.getElementById("cityerr").innerHTML = "";
    }
    if(!state){
      document.getElementById("stateerr").innerHTML = "Enter a State";
    }
    else{
      document.getElementById("stateerr").innerHTML = "";
    }
    if(!country){
      document.getElementById("countryerr").innerHTML = "Enter a Country";
    }
    else{
      document.getElementById("countryerr").innerHTML = "";
    }
    if(!zip){
      document.getElementById("ziperr").innerHTML = "Enter a Pin/Zip Code";
    }
    else{
      document.getElementById("ziperr").innerHTML = "";
    }
    if(!tapt){
      document.getElementById("tapterr").innerHTML = "Enter a Apartment / House";
    }
    else{
      document.getElementById("tapterr").innerHTML = "";
    }
    if(!tfloor){
      document.getElementById("tfloorerr").innerHTML = "Enter a Floor";
    }
    else{
      document.getElementById("tfloorerr").innerHTML = "";
    }
    if(!tstreet){
      document.getElementById("tstreeterr").innerHTML = "Enter a Street Address";
    }
    else{
      document.getElementById("tstreeterr").innerHTML = "";
    }
    if(!tcity){
      document.getElementById("tcityerr").innerHTML = "Enter a City";
    }
    else{
      document.getElementById("tcityerr").innerHTML = "";
    }
    if(!tstate){
      document.getElementById("tstateerr").innerHTML = "Enter a State";
    }
    else{
      document.getElementById("tstateerr").innerHTML = "";
    }
    if(!tcountry){
      document.getElementById("tcountryerr").innerHTML = "Enter a Country";
    }
    else{
      document.getElementById("tcountryerr").innerHTML = "";
    }
    if(!tzip){
      document.getElementById("tziperr").innerHTML = "Enter a Pin/Zip Code";
    }
    else{
      document.getElementById("tziperr").innerHTML = "";
    }

    if(!countrycode){
      document.getElementById("countrycodeerr").innerHTML = "Country";
    }
    else{
      document.getElementById("countrycodeerr").innerHTML = "";
    }
    if(!areacode){
      document.getElementById("areacodeerr").innerHTML = "Area Code";
    }
    else{
      document.getElementById("areacodeerr").innerHTML = "";
    }
    if(!phonenum){
      document.getElementById("phonenumerr").innerHTML = "Phone Num";
    }
    else{
      document.getElementById("phonenumerr").innerHTML = "";
    }
    if(!mcountrycode){
      document.getElementById("mcountrycodeerr").innerHTML = "Country";
    }
    else{
      document.getElementById("mcountrycodeerr").innerHTML = "";
    }
    if(!mareacode){
      document.getElementById("mareacodeerr").innerHTML = "Area Code";
    }
    else{
      document.getElementById("mareacodeerr").innerHTML = "";
    }
    if(!mmobilenum){
      document.getElementById("mmobilenumerr").innerHTML = "Phone Num";
    }
    else{
      document.getElementById("mmobilenumerr").innerHTML = "";
    }
    if(!ecountrycode){
      document.getElementById("ecountrycodeerr").innerHTML = "Country";
    }
    else{
      document.getElementById("ecountrycodeerr").innerHTML = "";
    }
    if(!eareacode){
      document.getElementById("eareacodeerr").innerHTML = "Area Code";
    }
    else{
      document.getElementById("eareacodeerr").innerHTML = "";
    }
    if(!emobilenum){
      document.getElementById("emobilenumerr").innerHTML = "Phone Num";
    }
    else{
      document.getElementById("emobilenumerr").innerHTML = "";
    }

    if(!marriage){
      document.getElementById("marriageerr").innerHTML = "Marriage";
    }
    else{
      document.getElementById("marriageerr").innerHTML = "";
    }
    if(!email1){
      document.getElementById("email1err").innerHTML = "Enter a Email";
    }
    else{
      document.getElementById("email1err").innerHTML = "";
    }
    if(!emailAlt){
      document.getElementById("emailAlterr").innerHTML = "Enter a Email";
    }
    else{
      document.getElementById("emailAlterr").innerHTML = "";
    }
    // if(!visaexpdate){
    //   document.getElementById("visaexpdateerr").innerHTML = "Enter a Visa Expiration Date";
    // }
    // if(!insexpdate){
    //   document.getElementById("insexpdateerr").innerHTML = "Enter a Insurence Expiration Date";
    // }
    if(!dfj){
      document.getElementById("dfjerr").innerHTML = "Enter a Date of Joining";
    }
    else{
      document.getElementById("dfjerr").innerHTML = "";
    }
    if(!basicSal){
      document.getElementById("basicSalerr").innerHTML = "Enter a Basic Salary";
    }
    else{
      document.getElementById("basicSalerr").innerHTML = "";
    }
    if(!otherAll){
      document.getElementById("otherAllerr").innerHTML = "Enter an Other Allowances";
    }
    else{
      document.getElementById("otherAllerr").innerHTML = "";
    }
    if(!incentives){
      document.getElementById("incentiveserr").innerHTML = "Enter an Incentives";
    }
    else{
      document.getElementById("incentiveserr").innerHTML = "";
    }
    
    if(!worklocation){
      document.getElementById("worklocationerr").innerHTML = "Enter a Work Location";
    }
    else{
      document.getElementById("worklocationerr").innerHTML = "";
    }
    if(!department){
      document.getElementById("departmenterr").innerHTML = "Enter a Department";
    }
    else{
      document.getElementById("departmenterr").innerHTML = "";
    }
    if(!joininggrade){
      document.getElementById("joininggradeerr").innerHTML = "Enter a Joining Grade";
    }
    else{
      document.getElementById("joininggradeerr").innerHTML = "";
    }
    if(!role){
      document.getElementById("roleerr").innerHTML = "Enter a Role";
    }
    else{
      document.getElementById("roleerr").innerHTML = "";
    }

    if(!acname){
      document.getElementById("acnameerr").innerHTML = "Enter a Account Name";
    }
    else{
      document.getElementById("acnameerr").innerHTML = "";
    }
    if(!bank){
      document.getElementById("bankerr").innerHTML = "Enter a Bank";
    }
    else{
      document.getElementById("bankerr").innerHTML = "";
    }
    if(!branchcode){
      document.getElementById("branchcodeerr").innerHTML = "Enter Branch Code";
    }
    else{
      document.getElementById("branchcodeerr").innerHTML = "";      
    }
    if(!ifsc){
      document.getElementById("ifscerr").innerHTML = "Enter an IFSC Code";
    }
    else{
      document.getElementById("ifscerr").innerHTML = "";
    }
    if(!swiftcode){
      document.getElementById("swiftcodeerr").innerHTML = "Enter a Swift Code";
    }
    else{
      document.getElementById("swiftcodeerr").innerHTML = "";
    }
    if(!acnum){
      document.getElementById("acnumerr").innerHTML = "Enter an Account Number";
    }
    else{
      document.getElementById("acnumerr").innerHTML = "";
    }
    if(!ibannum){
      document.getElementById("ibannumerr").innerHTML = "Enter an IBAN Number";
    }
    else{
      document.getElementById("ibannumerr").innerHTML = "";
    }

    if(fname  && gender && lname && bday && 
      apt && floor && street && city && state && country && zip &&
      tapt && tfloor && tstreet && tcity && tstate && tcountry && tzip &&
      countrycode && areacode && phonenum && 
      mcountrycode && mareacode && mmobilenum && 
      ecountrycode && eareacode && emobilenum  
      && marriage && email1 && emailAlt
      // && visaexpdate && insexpdate 
      && dfj && basicSal && otherAll 
      && incentives && worklocation && department
      && joininggrade && role && acname && bank && branchcode
      && ifsc && swiftcode && acnum && ibannum ){
      document.myForm.submit();
    }
}
  
  export default validateEmail;
  // export default val1;