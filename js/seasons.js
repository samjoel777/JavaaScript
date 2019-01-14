let seasons = Number(prompt(`
1.Vasant Ritu (Spring)
2.Grishma Ritu (Summer)
3.Varsha Ritu (Monsoon)
4.Sharad Ritu (Autumn)
5.Hemant Ritu (Prewinter)
6.Shishir or Shita Ritu (Winter)
`));

if( seasons == "" || seasons == undefined)
{
    console.log("No Value Entered")
}
else{

switch(seasons){

    case 1:
    months = "begins on Feb. 18 and ends on April 19.";
    break;
    
    case 2:
    months = "begins on April 19 and ends on June 21.";
    break;

    case 3:
    months = "begins on June 21 and ends on Aug. 22.";
    break;

    case 4:
    months = "begins on Aug. 22 and end on Oct. 23.";
    break;

    case 5:
    months = "begins on Oct. 23 and ends on Dec. 21.";
    break;

    case 6:
    months = "begins on Dec. 21 and ends on Feb. 18";
    break;

    default:
    months = "We only have 6 Seasons in India"
}

console.log(months);

}

