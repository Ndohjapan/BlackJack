// Challenge 1: Your Age  in Days

const ageInDays = document.getElementById("flex-box-result")
var ids = []

function ageInYear(){
    var birthYear = prompt("What year were you born")
    var ageDays = (2020 - birthYear) * 365
    ageInDays.innerHTML = `<h3>You are ${ageDays}+ days old<\h3>`
}

function reset(){
    ageInDays.innerText = ""
}

// Challenge 2
var cat_flexBox = document.getElementById("cat-box")

var gif = ["funny-cat-2020-14.gif", "funny-cat-2020-19.gif", "imgbin_rock-cartoon-png.png", "imgbin_paper-png.png", "pngkey.com-rock-paper-scissors-png-8162091.png"]

var num = 0
var imgNum = 0

function deleteImg(imgId){
    document.getElementById(imgId).remove()
    
}

function addCat(){
    var img = document.createElement("img")
    img.src = gif[num]
    img.id = `img${imgNum}`
    console.log(img.id)
    img.onclick = function(){
        deleteImg(img.id)
    }
    imgNum += 1
    if (num === 1){
        num = 0
    }
    else{
        num = 1
    }
    img.alt = "This is a video"
    cat_flexBox.appendChild(img)
    console.log(cat_flexBox)
    // img.onclick = deleteImg(img.id)
}

// Challenge 3

function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function click_image(user_result){
    image1 = document.getElementById("flex-box-container-3")
    ids = [image1.children[0].id, image1.children[1].id,  image1.children[2].id]

    console.log(image1.children[0].childNodes[1])

    image1.children[0].childNodes[1].remove()
    image1.children[1].childNodes[1].remove()
    image1.children[2].childNodes[1].remove()
    
    add_image = document.createElement("img")
    add_image.src = gif[user_result]
    add_image.style.boxShadow = "0px 10px 50px rgba(37, 233, 50, 1)"
    add_image.id = "user"
    
    cpu_result = randomInteger(2, 4)

    add_image2 = document.createElement("img")
    add_image2.src = gif[cpu_result]
    add_image2.id = "user"
    add_image2.style.boxShadow = "0px 10px 50px rgba(233, 50, 37, 1)"

    add_text = document.createElement("h2")
    add_text.id = "game_info"
    if(user_result === cpu_result){
        add_text.innerText = "You Tied!"
        add_text.style.backgroundColor = "white"
        add_text.style.color = "yellow"
    }
    else{
        if(user_result === 2 && cpu_result === 4 || user_result === 3 && cpu_result === 2 || user_result === 4 && cpu_result === 3){
            add_text.innerText = "You Win!"
            add_text.style.color = "Green"

        }
        else{
            add_text.innerText = "You Lose!"
            add_text.style.color = "red"

        }
        
    }

    document.getElementById(ids[0]).appendChild(add_image)
    document.getElementById(ids[1]).appendChild(add_text)
    document.getElementById(ids[2]).appendChild(add_image2)
    document.getElementById("user1").innerHTML = "User"
    document.getElementById("cpu").innerHTML = "CPU"
    var reset_btn = document.createElement("button")
    reset_btn.class = "btn-danger"
    reset_btn.innerHTML = "reset"
    reset_btn.onclick = function(){
        restore_images()
    }  
    
}

// Challenge 4 Change color of all button

var all_button = document.getElementsByTagName("button")

var copyAllButton = []
for (let i=0; i<7; i++){
    copyAllButton.push(all_button[i].classList[1])
}


function buttonColourChange(this_info){

    console.log(this_info.value)

    btn_class = ["btn-danger", "btn-success", "btn-warning", "btn-primary"]

    color_class = {"red": btn_class[0], "green": btn_class[1]}

    if(this_info.value !== "random" && this_info.value !== "reset"){
        for(i = 0; i<7; i++){
            all_button[i].classList.remove(all_button[i].classList[1])

            all_button[i].classList.add(color_class[this_info.value])
        
        }

    }

    
    if(this_info.value === "random"){
        for(i = 0; i<7; i++){
            all_button[i].classList.remove(all_button[i].classList[1])
            
            all_button[i].classList.add(btn_class[randomInteger(0, 3)])
        }

    }

    if (this_info.value === "reset"){
        for(i =0; i<7; i++){
            all_button[i].classList.remove(all_button[i].classList[1])
            all_button[i].classList.add(copyAllButton[i])
        }


    }
    
}



// Challenge 5 Blackjack
cards ={2: ['/challenge1/JPEG/2C.jpg',
'/challenge1/JPEG/2D.jpg',
'/challenge1/JPEG/2H.jpg',
'/challenge1/JPEG/2S.jpg'],
3: ['/challenge1/JPEG/3C.jpg',
'/challenge1/JPEG/3D.jpg',
'/challenge1/JPEG/3H.jpg',
'/challenge1/JPEG/3S.jpg'],
4: ['/challenge1/JPEG/4C.jpg',
'/challenge1/JPEG/4D.jpg',
'/challenge1/JPEG/4H.jpg',
'/challenge1/JPEG/4S.jpg'],
5: ['/challenge1/JPEG/5C.jpg',
'/challenge1/JPEG/5D.jpg',
'/challenge1/JPEG/5H.jpg',
'/challenge1/JPEG/5S.jpg'],
6: ['/challenge1/JPEG/6C.jpg',
'/challenge1/JPEG/6D.jpg',
'/challenge1/JPEG/6H.jpg',
'/challenge1/JPEG/6S.jpg'],
7: ['/challenge1/JPEG/7C.jpg',
'/challenge1/JPEG/7D.jpg',
'/challenge1/JPEG/7H.jpg',
'/challenge1/JPEG/7S.jpg'],
8: ['/challenge1/JPEG/8C.jpg',
'/challenge1/JPEG/8D.jpg',
'/challenge1/JPEG/8H.jpg',
'/challenge1/JPEG/8S.jpg'],
9: ['/challenge1/JPEG/9C.jpg',
'/challenge1/JPEG/9D.jpg',
'/challenge1/JPEG/9H.jpg',
'/challenge1/JPEG/9S.jpg'],
10: ['/challenge1/JPEG/10C.jpg',
 '/challenge1/JPEG/10D.jpg',
 '/challenge1/JPEG/10H.jpg',
 '/challenge1/JPEG/10S.jpg',
 '/challenge1/JPEG/JC.jpg',
 '/challenge1/JPEG/JD.jpg',
 '/challenge1/JPEG/JH.jpg',
 '/challenge1/JPEG/JS.jpg',
 '/challenge1/JPEG/KC.jpg',
 '/challenge1/JPEG/KD.jpg',
 '/challenge1/JPEG/KH.jpg',
 '/challenge1/JPEG/KS.jpg',
 '/challenge1/JPEG/QC.jpg',
 '/challenge1/JPEG/QD.jpg',
 '/challenge1/JPEG/QH.jpg',
 '/challenge1/JPEG/QS.jpg'],
11: ['/challenge1/JPEG/AC.jpg',
 '/challenge1/JPEG/AD.jpg',
 '/challenge1/JPEG/AH.jpg',
 '/challenge1/JPEG/AS.jpg']
}

function yourCards(btn_info){
    // check which button is calling
    boxArea = cardArea(btn_info.id)
    scoreArea = resultArea(btn_info.id)
    // generate 2 random numbers 1. points 2.type of cards
    rand2Num = generateRand2Num()
    // addimage to screen
    ImageToScreen(rand2Num[0], rand2Num[1], boxArea)
    // Increase Score and check if score is above 21
    current_score = IncreaseScore(rand2Num[0], btn_info, scoreArea)
    
    return current_score
}

function cardArea(btnId){
    if(btnId === "blackjack-hit-button"){
        box = "your-box"
    }
    else{
        box = "dealer-box"
    }

    return box
}



function resultArea(btnId){
    if(btnId === "blackjack-hit-button"){
        result = "your-blackjack-result"
    }
    else{
        result = "bot-blackjack-result"
    }

    return result
}



function generateRand2Num(){
    points = randomInteger(2, 11)
    card = randomInteger(0, (cards[points].length)-1)

    return [points, card]
}



function ImageToScreen(score, cardType, boxArea){
    imageToScreen = document.createElement("img")
    imageToScreen.src = cards[score][cardType]
    imageToScreen.class = "card-area"
    imageToScreen.id = "card-img"
    document.getElementById(boxArea).appendChild(imageToScreen)
}



function IncreaseScore(upgrade, btn_info, scoreArea){
    current_score = document.getElementById(scoreArea)

    current_score.innerHTML = parseInt(current_score.innerHTML, 10) + upgrade

    if (parseInt(current_score.innerHTML) > 21){
        current_score.innerHTML = "BURST!"
        current_score.style.color = "red"
        disableBtn(btn_info.id)
    }

    return current_score.innerHTML
}


function disableBtn(btnInfoID){
    document.getElementById(btnInfoID).disabled = true
}


function botCards(btn2_info){
    let n = 1
    for(_=0; _<n; _++){
        score = yourCards(btn2_info)
        var increase = continueDealer(score, btn2_info)
        n += increase
    }

    if(increase == 0){
        recorder = finalResult()
        console.log(recorder)
        updateSheet(recorder)
    }
}
function continueDealer(score, btn2_info){
    if(21 - score >= 5){
        return 1
    }

    else{
        if(21 - score > 1){
            randNum = randomInteger(0, 1)
            if(randNum == 1){
                return 1
            }
            else{
                disableBtn(btn2_info.id)
                return 0
            }
        }

        else{
            disableBtn(btn2_info.id)
            return 0
        }
    }
}


function finalResult(){
    spans = document.getElementsByTagName("span")

    if(spans[0].innerHTML != spans[1].innerHTML){
        if(parseInt(spans[0].innerHTML) > parseInt(spans[1].innerHTML) || typeof(parseInt(spans[0].innerHTML)) === "number" && (spans[1].innerHTML === "BURST!")){
            audio = document.createElement("audio")
            audio.src = "Ta Da-SoundBible.com-1884170640.mp3"
            audio.autoplay = "true"

            results = document.getElementById("result")
            results.innerHTML = "You Won"
            results.style.color = "green"

            return "win"

        }

        else{
            audio = document.createElement("audio")
            audio.src = "Sad_Trombone-Joe_Lamb-665429450.wav"
            audio.autoplay = "true"

            results = document.getElementById("result")
            results.innerHTML = "You Lost"
            results.style.color = "red"

            return "loss"
        }
    }

    else{
        results = document.getElementById("result")
        results.innerHTML = "Draw"
        results.style.color = "yellow"

        return "draw"
    }

}


function updateSheet(recorder){

    current = document.getElementById(recorder)
    current.innerHTML = parseInt(current.innerHTML) + 1
}


function refreshGame(){
    // remove images from screen
    removeAllCards()
    // change the scores to 0
    restoreScores()
    // change won to Let's play!
    restoreText()
    // enable the two buttons
    enableButtons()
}


function removeAllCards(){
    currentImage = document.querySelectorAll("#card-img")

    for(i=0; i<currentImage.length; i++){
        document.getElementById("card-img").remove()
    }
}

function restoreScores(){
    console.log("I made it")
    bot = document.getElementById("bot-blackjack-result")
    bot.innerHTML = 0
    bot.style.color = "white"

    your = document.getElementById("your-blackjack-result")
    your.innerHTML = 0
    your.style.color = "white"
}

function restoreText(){
    resultLine = document.getElementById("result") 
    resultLine.innerText= "Let's Play!"
    resultLine.style.color = "black"
}

function enableButtons(){
    document.getElementById("blackjack-stand-button").disabled = false
    document.getElementById("blackjack-hit-button").disabled = false
}