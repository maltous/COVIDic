function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66GRVQ0u4cD":
        Script1();
        break;
      case "5V6bN2Rdq0T":
        Script2();
        break;
      case "60ZNToSLwZw":
        Script3();
        break;
      case "6bwkuYLquIa":
        Script4();
        break;
      case "5iKAQD6huoI":
        Script5();
        break;
      case "6Dnt8pfGdhW":
        Script6();
        break;
      case "6cBhWHBpNMQ":
        Script7();
        break;
      case "6SyeuteWXGy":
        Script8();
        break;
      case "6nNolkCNeKa":
        Script9();
        break;
      case "5aJtiorMHQE":
        Script10();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script9()
{
  $("#tab-customlink").show();
}

function Script10()
{
  window.print();
}

