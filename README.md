BambooHR-Jobs

    const  bamboohr  =  require("bamboohr-jobs");
    
    bamboohr.getBambooHRJobs("https://celsius.bamboohr.com/jobs/").then(function(res, rej) {
    
    if(res)
	    console.log(res);
    else
	    console.log(rej);
    });
