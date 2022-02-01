$('document').ready(()=>{
$("input[type:'button']").click(()=>{

    var username=$("input[name='username']").val();
    var password=$("input[name='password']").val();

    if(username.value == "" || password.value == ""){
        window.alert("UserName or Password is Blank");
    }
    else{

    $.ajax({
        url: "https://mocki.io/v1/21ae2f81-cc12-42d1-b8ec-00aad811f8c2",
        method:"GET",
        data:{
            "username":username,
            "password":password,
        },
        
        success:(x)=>{
             console.log(x);

             $("input#id1").append(x.data.username);
             $("input#id2").append(x.data.password);

        },
        error:(x)=>{
            alert("Error"+x);
        },
        complete:()=>{
            alert("Call is successful");
        }
});
     }

})
})