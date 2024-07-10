(function (){

    // home reviews counts 
    const num1  = document.querySelector(".num1")
    if (!! num1){
        let count1 = 0;
        
        const countUp = () => {
            num1.innerHTML = count1;
            
            if(count1 < 2800) {
                count1++;
            }
        
            setTimeout(countUp, 0)
        }
        countUp();

    }
    
    
    const num2  = document.querySelector(".num2")
    if(!! num2){
        let count2 = 0;
        
        const countUp2 = () => {
            num2.innerHTML = count2;
        
            if(count2 < 1200) {
                count2++;
            }
        
            setTimeout(countUp2, 0)
        }
        countUp2();
    }
    
    
    const num3  = document.querySelector(".num3")
    if(!! num3){
        let count3 = 0;
        
        const countUp3 = () => {
            num3.innerHTML = count3;
        
            if(count3 < 3100) {
                count3++;
            }
        
            setTimeout(countUp3, 0)
        }
        countUp3();
    }
    
    
    const num4  = document.querySelector(".num4");
    if (!! num4){
        let count4 = 0;
        
        const countUp4 = () => {
            num4.innerHTML = count4;
        
            if(count4 < 2700) {
                count4++;
            }
        
            setTimeout(countUp4, 0)
        }
        
        countUp4();
    }
    // ends 
    
    
    // about us image click
    const cctv_system = document.querySelector("#cctv");
    const bigImageBox = document.querySelector("#bigBox");
    const cctvCamera = document.querySelector("#camera");
    
    cctv_system?.addEventListener("click", function() {
        bigImageBox.src="../images/cctv.png"
        cctvCamera.src="../images/training.jpeg"
    })

    const biometricBox = document.querySelector("#bioBox");
    const biometric = document.querySelector("#biometric");
    
    biometricBox?.addEventListener("click", function(){
        bigImageBox.src="../images/biometric.jpeg"
        biometric.src="../images/cctv.png"
    })
    const armedEscort = document.querySelector("#escortBox")
    
    armedEscort?.addEventListener("click", function() {
        bigImageBox.src="../images/escort.jpeg"
    })
    
    const trainigBox = document.querySelector("#securityTraining");
    
    trainigBox?.addEventListener("click", function() {
        bigImageBox.src="../images/training.jpeg"
        cctvCamera.src="../images/cctv.png"
        biometric.src="../images/biometric.jpeg"
    })
    
    // end 
    
    
    // footer yearly date 
    var year = new Date();
    document.querySelector(".year").innerHTML = year.getFullYear();
    // ends 
})()

