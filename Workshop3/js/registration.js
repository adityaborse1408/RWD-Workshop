$('document').ready(()=>{
$("input[type:'button']").click(()=>{
    var firstName=$("input[name='firstName']").val();
    var lastName=$("input[name='lastName']").val();
    var address=$("input[name='address']").val();
    
    var birthDate=$("input[name='birthDate']").val();

    if(firstName.val=="" || lastName.val=="" || address.val=="" || birthDate.val==null ){
        alert("Values cannot be blank");
    }
    else{

    $.ajax({
        url: "https://mocki.io/v1/21ae2f81-cc12-42d1-b8ec-00aad811f8c2",
        method:"POST",
        data: {
            "firstName":firstName,
            "lastName":lastName,
            "address":address,
            "birthDate":birthDate,
        },
        success:(x)=>{
            alert(x.firstName+"posted!");
            console.log(x);

        },
        error:(x)=>{
            alert("Error"+x);
        }
});
    }
})
})