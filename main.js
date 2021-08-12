var name_array=[];

function submit() {
    var name_1=document.getElementById("n1").value;
    var name_2=document.getElementById("n2").value;
    var name_3=document.getElementById("n3").value;
    var name_4=document.getElementById("n4").value;

    name_array.push(name_1);
    name_array.push(name_2);
    name_array.push(name_3);
    name_array.push(name_4);

    console.log(name_array);

    document.getElementById("display_name").innerHTML=name_array;
}

function sorting() {
name_array.sort();

console.log(name_array);

document.getElementById("display_name").innerHTML=name_array;
}