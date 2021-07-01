// generate cv 

function generateCV(){

    let nameField=document.getElementById('nameField').value;

    let nameT=document.getElementById('nameT');

    nameT.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML=nameField;

    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value

    // address 
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value
    
    // links 
    
    document.getElementById('gitT').innerHTML=document.getElementById('githubField').value
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value
    document.getElementById('linkT').innerHTML=document.getElementById('liField').value
    
    
    document.getElementById('objectiveT').innerHTML=document.getElementById('objective').value
    
    
    document.getElementById('weT').innerHTML=document.getElementById('weField').value
    document.getElementById('we2T').innerHTML=document.getElementById('we1Field').value
    document.getElementById('aqT').innerHTML=document.getElementById('aqField').value


    document.getElementById('cvform').style.display='none';
    document.getElementById('cv-form').style.display='block';





}

function printCV(){
    window.print();
}