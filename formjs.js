// form1

$("#submit-form1").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyE3oECcvZ-1C0PA7CnEFVUPN5B3p0UJAQPiXQwT_1z5kFEmGtNX5LZfcxggkNWVg4EYg/exec",
        data:$("#submit-form1").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            // window.location.href="http://127.0.0.1:5501/Thank%20You%20.html"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

// form2
$("#submit-form2").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyE3oECcvZ-1C0PA7CnEFVUPN5B3p0UJAQPiXQwT_1z5kFEmGtNX5LZfcxggkNWVg4EYg/exec",
        data:$("#submit-form2").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            // window.location.href="http://127.0.0.1:5501/Thank%20You%20.html"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})