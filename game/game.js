let points = 0;
let hearts = 3;

function addPoints(option) {
    switch (option.toLowerCase()) {
        case 'yes':
            points += 25;
            break;
        case 'option1':
            points += 25;
            break;
        case 'option3':
            points += 25;
            break;
        case 'option5':
            points += 25;
            break;
        case 'option1.1':
            points += 10;
            break;
        case 'option2.1':
            points += 10;
            break;
    }
    document.getElementById("points").textContent = points;
}

function loseHeart() {
    if (hearts > 0) {
        hearts--;
        const heartContainer = document.getElementById("heartContainer");
        if (hearts >= 0) {
            const heartImages = heartContainer.querySelectorAll('.heart');
            heartImages[hearts].style.display = "none"; // Hide one heart image
        }
    }
    if (hearts === 0) {
        document.getElementById("gameOverScreen").style.display = "block";
        document.getElementById("restartButton").addEventListener("click", restartGame);
        document.getElementById("homepageButton").addEventListener("click", goToHomepage);
        document.getElementById("centerBox").style.display = "none";
    }
    
}

function restartGame() {
    window.location.reload();
}

function goToHomepage() {
    // Redirect to homepage
    window.location.href = "../index.html"; // Replace "homepage.html" with your actual homepage URL
}


function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const fullscreenButton = document.getElementById('fullscreenButton');
    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', function() {
            toggleFullScreen();
        });
    }

    document.getElementById("gameForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const choice = formData.get('choice');
        console.log("Received choice:", choice);
        document.getElementById("submitButton").disabled = true;
        addPoints(choice);
        if (choice.toLowerCase() === 'yes') {
            showResult("SDG6 aims to ensure the availability and sustainable management of water and sanitation for all. It addresses issues like drinking water, sanitation, hygiene, water quality, and ecosystems.");
            document.getElementById("continueButton0").style.display = "block";
        } else {
            showResult("Skipping your game!");
            document.getElementById("continueButton0").style.display = "block";
        }
    }); 
    
    document.getElementById("additionalChoiceF").addEventListener("submit",function(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        const choice = formData.get('additionalChoice');
        console.log("Received choice:", choice);
        document.getElementById("additionalSubmitButton").disabled = true;
        addPoints(choice);
        if (choice.toLowerCase() == 'option2') {
            loseHeart();
        } 
        if (choice.toLowerCase() === 'option1') {
            showResult1("You organize a community workshop on sanitation and hygiene. The villagers learn the importance of clean water and start implementing better practices.");
            document.getElementById("continueSubChoiceButton").style.display = "block";
        } else {
            showResult1("The water quality worsens, leading to health issues in the village. You realize the importance of taking action.");
            document.getElementById("continueButton").style.display = "block";
        }
    });
    document.getElementById("additionalChoiceI").addEventListener("submit",function(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        const choice = formData.get('additionalChoice1');
        console.log("Received choice:", choice);
        document.getElementById("additionalSubmitButton1").disabled = true;
        addPoints(choice);
        if (choice.toLowerCase() == 'option4') {
            loseHeart();
        } 
        if (choice.toLowerCase() === 'option3') {
            showResult2("You collaborate with the industries to implement eco-friendly practices, reducing pollution significantly.");
            document.getElementById("continueSubChoiceButton1").style.display = "block";
        } else {
            showResult2("You invest in a filtration system that provides clean water to the villagers, but the river remains polluted.");
            document.getElementById("continueButton1").style.display = "block";
        }
    });
    document.getElementById("additionalChoiceJ").addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const choice = formData.get("additionalChoice2");
        document.getElementById("additionalSubmitButton2").disabled = true;
        if (choice.toLowerCase() == 'option6') {
            loseHeart();
        } 
        addPoints(choice);
        if (choice.toLowerCase() === 'option5') {
            showResult3("The village adopts water-saving practices and sets up rainwater harvesting systems, ensuring a steady water supply.");
            document.getElementById("continueSubChoiceButton2").style.display = "block";
        } else {
            showResult3("The water supply dwindles, and the villagers face severe water scarcity. You must look for long-term solutions.");
            document.getElementById("continueButton2").style.display = "block";
        }
    });
    document.getElementById("additionalSubChoiceA").addEventListener("submit",  function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const choice = formData.get("additionalSubChoice");
        console.log("Received choice:", choice);
        document.getElementById("additionalSubChoiceSubmitButton").disabled = true;
        addPoints(choice);
        if (choice.toLowerCase() == 'option1.1'){
            showSubResult("Clean water is vital for health, preventing disease, and supporting economies. Lack of clean water affects education and gender equality, as it keeps children out of school and burdens women and girls with water collection.                                  SDG6 isn't just a goal; it's essential for nutrition, health, equality, and poverty reduction. It's our key to a sustainable future.");
            document.getElementById("continueButton").style.display = "block";
        }
        else{
            document.getElementById("continueButton").style.display = "block";
        }
    })
    document.getElementById("additionalSubChoiceB").addEventListener("submit",  function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const choice = formData.get("additionalSubChoice1");
        console.log("Received choice:", choice);
        document.getElementById("additionalSubChoiceSubmitButton1").disabled = true;
        addPoints(choice);
        if (choice.toLowerCase() == 'option2.1'){
            showSubResult1("1. **Reduce Water Usage**: Every drop counts. Use water-saving fixtures and harvest rainwater.2. **Proper Waste Disposal**: Dispose of hazardous waste properly to prevent contamination.3. **Natural Cleaning Products**: Use eco-friendly products to keep harmful chemicals out of our water.4. **Plant Trees**: Trees absorb pollutants and reduce runoff into water bodies.5. **Support Green Infrastructure**: Advocate for sustainable water management in our community.");
            document.getElementById("continueButton1").style.display = "block";
        }
        else{
            document.getElementById("continueButton1").style.display = "block";
        }
    })
    document.getElementById("additionalSubChoiceC").addEventListener("submit",  function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const choice = formData.get("additionalSubChoice2");
        console.log("Received choice:", choice);
        document.getElementById("additionalSubChoiceSubmitButton2").disabled = true;
        addPoints(choice);
        if (choice.toLowerCase() == 'option3.1'){
            showSubResult2("1. **Reduce Water Usage**: Every drop counts. Use water-saving fixtures and harvest rainwater.2. **Proper Waste Disposal**: Dispose of hazardous waste properly to prevent contamination.3. **Natural Cleaning Products**: Use eco-friendly products to keep harmful chemicals out of our water.4. **Plant Trees**: Trees absorb pollutants and reduce runoff into water bodies.5. **Support Green Infrastructure**: Advocate for sustainable water management in our community.");
            document.getElementById("continueButton2").style.display = "block";
        }
        else{
            document.getElementById("continueButton2").style.display = "block";
        }
    })
    function showResult(result) {
        document.getElementById("response").innerHTML = "";
        let i = 0;
        const interval = setInterval(function() {
            if (i < result.length) {
                document.getElementById("response").innerHTML += result[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        document.getElementById("response").style.fontSize = "30px";
        document.getElementById("response").style.fontFamily = "'VT323', monospace";
    }
    
    function showResult1(result) {
        document.getElementById("response1").innerHTML = "";
        let i = 0;
        const interval = setInterval(function() {
            if (i < result.length) {
                document.getElementById("response1").innerHTML += result[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        document.getElementById("response1").style.fontSize = "30px";
        document.getElementById("response1").style.fontFamily = "'VT323', monospace"; // Change the font family here
    }
    
    function showResult2(result) {
        document.getElementById("response2").innerHTML = "";
        let i = 0;
        const interval = setInterval(function() {
            if (i < result.length) {
                document.getElementById("response2").innerHTML += result[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        document.getElementById("response2").style.fontSize = "30px";
        document.getElementById("response2").style.fontFamily = "'VT323', monospace"; // Change the font family here
    }
    
    function showResult3(result){
        document.getElementById("response3").innerHTML = "";
        let i = 0;
        const interval = setInterval(function() {
            if (i < result.length) {
                document.getElementById("response3").innerHTML += result[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        document.getElementById("response3").style.fontSize = "30px";
        document.getElementById("response3").style.fontFamily = "'VT323', monospace"; // Change the font family here
    }
    
    function showSubResult(result){
        document.getElementById("response1.1").innerHTML = "";
        let i = 0;
        const interval = setInterval(function() {
            if (i < result.length) {
                document.getElementById("response1.1").innerHTML += result[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        document.getElementById("response1.1").style.fontSize = "30px";
        document.getElementById("response1.1").style.fontFamily = "'VT323', monospace";
    }
    function showSubResult1(result){
        document.getElementById("response2.1").innerHTML = "";
        let i = 0;
        const interval = setInterval(function() {
            if (i < result.length) {
                document.getElementById("response2.1").innerHTML += result[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        document.getElementById("response2.1").style.fontSize = "30px";
        document.getElementById("response2.1").style.fontFamily = "'VT323', monospace";
    }
    function showSubResult2(result){
        document.getElementById("response3.1").innerHTML = "";
        let i = 0;
        const interval = setInterval(function() {
            if (i < result.length) {
                document.getElementById("response3.1").innerHTML += result[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        document.getElementById("response3.1").style.fontSize = "30px";
        document.getElementById("response3.1").style.fontFamily = "'VT323', monospace";
    }
    function hideOptionsAndResult() {
        document.getElementById("msg1").style.display = "none";
        document.getElementById("gameForm").style.display = "none";
        document.getElementById("response").style.display = "none";
    }

    function hideOptionsAndResult1(){
        document.getElementById("additionalChoiceF").style.display = "none";
        document.getElementById("response1").style.display = "none";
    }

    function hideOptionsAndResult2(){
        document.getElementById("additionalChoiceI").style.display = "none";
        document.getElementById("response2").style.display = "none";
    }
    function hideOptionsAndResult3(){
        document.getElementById("additionalChoiceJ").style.display = "none";
        document.getElementById("response3").style.display = "none";
    }

    function showAdditionalOptions() {
        const additionalOptions = document.getElementById("additionalChoiceF");
        additionalOptions.style.display = "block";
    }

    function showAdditionalOptions1(){
        const additionalOptions1 = document.getElementById("additionalChoiceI");
        additionalOptions1.style.display = "block";
    }

    function showAdditionalOptions2(){
        const additionalOptions2 = document.getElementById("additionalChoiceJ");
        additionalOptions2.style.display = "block";
    }
    function showSubChoice(){
        const additionalSubChoice = document.getElementById("additionalSubChoiceA")
        additionalSubChoice.style.display = "block";
    }
    function showSubChoice1(){
        const additionalSubChoice1 = document.getElementById("additionalSubChoiceB")
        additionalSubChoice1.style.display = "block";
    }
    function showSubChoice2(){
        const additionalSubChoice2 = document.getElementById("additionalSubChoiceC")
        additionalSubChoice2.style.display = "block";
    }
    function hideSubChoice(){
        document.getElementById("additionalSubChoiceA").style.display = "none";
        document.getElementById("response1.1").style.display = "none";
    }
    function hideSubChoice1(){
        document.getElementById("additionalSubChoiceB").style.display = "none";
        document.getElementById("response2.1").style.display = "none";
    }
    function hideSubChoice2(){
        document.getElementById("additionalSubChoiceC").style.display = "none";
        document.getElementById("response3.1").style.display = "none";
    }
    document.getElementById("continueButton0").addEventListener("click", function() {
        document.body.classList.add('leader-background');
        hideOptionsAndResult();
        showAdditionalOptions();
        this.style.display = "none";
    });
    document.getElementById("continueButton").addEventListener("click", function() {
        document.body.classList.remove('leader-background');    
        hideSubChoice();
        hideOptionsAndResult1();
        showAdditionalOptions1();
        this.style.display = "none";
    });

    document.getElementById("continueButton1").addEventListener("click", function() {
        hideSubChoice1();
        hideOptionsAndResult2();
        showAdditionalOptions2();
        this.style.display = "none";
    });

    document.getElementById("continueButton2").addEventListener("click", function() {
        hideSubChoice2();
        this.style.display = "none";
    });
    
    document.getElementById("continueSubChoiceButton").addEventListener("click", function() {
        hideOptionsAndResult1();
        showSubChoice();
        this.style.display = "none";
    });
    document.getElementById("continueSubChoiceButton1").addEventListener("click", function(){
        hideOptionsAndResult2();
        showSubChoice1();
        this.style.display = "none";
    })
    document.getElementById("continueSubChoiceButton2").addEventListener("click", function(){
        showSubChoice2();
        hideOptionsAndResult3();
        this.style.display = "none";
    })
});
