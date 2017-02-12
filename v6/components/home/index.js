'use strict';

app.home = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('home');

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function f1() {
    alert("came here ");
    if (document.getElementById('pin_0').value == "2901") {
        alert("came in here ");
        document.getElementById("hru_0").style.display = 'block';
        document.getElementById("enter_pin_0").style.display = 'none';
        document.getElementById("hru_1").style.display = 'block';
        document.getElementById("enter_pin_1").style.display = 'none';
        document.getElementById("hru_2").style.display = 'block';
        document.getElementById("enter_pin_2").style.display = 'none';
    } else {
        $('#overlay_0').fadeIn('fast').delay(2000).fadeOut('fast');
        $('#overlay_1').fadeIn('fast').delay(2000).fadeOut('fast');
        $('#overlay_2').fadeIn('fast').delay(2000).fadeOut('fast');

    }
}

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

function f2() {
    alert("came here ");
    if (document.getElementById('pin_1').value == "2901") {
        alert("came in here ");
        document.getElementById("enter_pin_1").style.display = 'none';
        document.getElementById("hru_1").style.display = 'block';
        document.getElementById("hru_0").style.display = 'block';
        document.getElementById("enter_pin_0").style.display = 'none';
        document.getElementById("enter_pin_2").style.display = 'none';
        document.getElementById("hru_2").style.display = 'block';
    } else {
        $('#overlay_0').fadeIn('fast').delay(2000).fadeOut('fast');
        $('#overlay_1').fadeIn('fast').delay(2000).fadeOut('fast');
        $('#overlay_2').fadeIn('fast').delay(2000).fadeOut('fast');
    }
}

function f3() {
    alert("came here ");
    if (document.getElementById('pin_2').value == "2901") {
        alert("came in here ");
        document.getElementById("enter_pin_2").style.display = 'none';
        document.getElementById("hru_2").style.display = 'block';
        document.getElementById("hru_0").style.display = 'block';
        document.getElementById("hru_1").style.display = 'block';

        document.getElementById("enter_pin_0").style.display = 'none';
        document.getElementById("enter_pin_1").style.display = 'none';
    } else {
        $('#overlay_0').fadeIn('fast').delay(2000).fadeOut('fast');
        $('#overlay_1').fadeIn('fast').delay(2000).fadeOut('fast');
        $('#overlay_2').fadeIn('fast').delay(2000).fadeOut('fast');
    }
}
function f_hru_clck(){
    document.getElementById("moods_div").style.display = 'block';
} 
// END_CUSTOM_CODE_home