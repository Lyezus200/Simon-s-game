var start = false;
var chain = [];
var userChain = [];
var colors = ["green","red","yellow","blue",];
var sounds = ["green.mp3","red.mp3","yellow.mp3","blue.mp3"];
var level = 1;

$('body').keydown(function(event) {
    if (!start){
    $('#level-title').text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var rndbuton = $('.btn')[randomNumber];
    var rndcolor = $('.btn')[randomNumber].getAttribute("id");
    chain.push(rndcolor);
    console.log('chain: ' + chain);
    $(rndbuton).css({opacity: 0.5});
    setTimeout(() => {
        $(rndbuton).css({opacity: 1});
    }, 500);
    var audio = new Audio(`sounds/${sounds[randomNumber]}`);
    audio.play();
    start = true;
    }
})
$('.btn').click(function(e) {
    userChain.push(e.target.id);
    $(this).css({opacity: 0.5});
        setTimeout(() => {
            $(this).css({opacity: 1});
        }, 500);
        var audio = new Audio(`sounds/${e.target.id}.mp3`);
        audio.play();
    setTimeout(() => {
        for(var i =0; i < userChain.length; i++)
            {
            if(userChain[i] !== chain[i]){
                var audio = new Audio("sounds/wrong.mp3");
                audio.play();
                $('#level-title').text("Game Over, Press Any Key to Restart");
                $('body').addClass('game-over');
                setTimeout(() => {
                    $('body').removeClass('game-over');
                }, 200);
                start = false;
                level = 1;
                chain = [];
                userChain = [];
                }
            }
    if(start){
        if(userChain.length === chain.length){
        level++;
        $('#level-title').text("Level " + level);
        var randomNumber = Math.floor(Math.random() * 4);
        var rndbuton = $('.btn')[randomNumber];
        var rndcolor = $('.btn')[randomNumber].getAttribute("id");
        chain.push(rndcolor);
        console.log('chain: ' + chain);
        $(rndbuton).css({opacity: 0.5});
        setTimeout(() => {
            $(rndbuton).css({opacity: 1});
        }, 500);
        var audio = new Audio(`sounds/${sounds[randomNumber]}`);
        audio.play();
        start = true;
        userChain = [];
        }
    } 
    }, 2000);
});