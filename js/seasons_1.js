let months = Number(prompt(`
1.January
2.February
3.March
4.April
5.May
6.June
7.July
8.August
9.September
10.October
11.November
12.December
`));

if(months == "" || months == undefined)
{
    console.log("Invalid Input");
}

else{

switch(months){

    case 3:
    case 4:
    case 5:
    season = "Spring Season";
    break;

    case 6:
    case 7:
    case 8:
    season = "Summer Season";
    break;

    case 9:
    case 10:
    case 11:
    season = "Fall(Autumn) Season";
    break;

    case 12:
    case 1:
    case 2:
    season = "Winter Season";
    break;

    default:
    season = "No Season Is There For Input Given"
    
    }

console.log(season);

}