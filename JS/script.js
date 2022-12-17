var names=new Array();
names[0]="Abderrahim";
names[1]="Sara";
names[2]="Jannat";
names[3]="Ali";
names[4]="jawad";
names[5]="Taha";
names[6]="jamila";
names[7]="joudia";
names[8]="hiba";
names[9]="houda";
names[10]="hamid";
names[11]="Jalil";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}