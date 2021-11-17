$(document).ready(function(){
    let logs = 0;// change logs later for own style of game
    let stone = 0;

    let pickaxes = 0;
    let pickaxePrice = 50;

    let logPlus = 1;
    let stonePlus = 1;

    let autoLogPlus = 0;
    let autoStonePlus =0;

    let autoChopperPrice = 100;
    let autoMinerPrice = 100;

    let logPrice = 1;
    let stonePrice = 1;

    let gold = parseInt(document.cookie);
    let goldValue = 0;

    let menu;



    setInterval(function(){
    logs += autoLogPlus;
    changeInventory();
    changeMarket();
    }, 1000);

    setInterval(function(){
        stone += autoStonePlus;
        changeInventory();
        changeMarket();
        }, 500);

    $("#chop").click(function(){
        logs += logPlus;
        changeInventory();
        changeMarket();
    });

    $("#mineStone").click(function(){
        if(pickaxes == 0) {
        alert("You can't mine stone with thin air no?");
    }else{
        stone += stonePlus * pickaxes;
        changeInventory();
    }
});


    $("#sellAll").click(function(){
        gold += logPrice * logs;
        gold += stonePrice * stone;
        logs = 0;
        stone = 0;
        changeInventory();
        changeMarket();
    });

    $("#autoChopper").click(function(){
        gold -= autoChopperPrice;
        autoLogPlus++;
        changeInventory();
        changeMarket();
    });

    $("#autoMiner").click(function(){
        gold -= autoMinerPrice;
        autoStonePlus++;
        changeInventory();
        changeMarket();
    });

    $("#buyPickaxe").click(function(){
        gold -= pickaxePrice;
        pickaxes++;
        changeInventory();
        changeMarket();
    });

    $("#visit").click(function() {
        menu = switchMenu("marketplace");
        changeMarket();
    });


    $("#return").click(function() {
        menu = switchMenu("main")
    });


    function changeInventory() {
       
        $("#gold").html("Gold: " + gold);

        if (logs == 1){
            $("#logs").html("you now own " + logs + " log.");
        }else{
            $("#logs").html("you now own " + logs + " logs.");
        }
     if (stone > 0){
            $("#stone").html("you now own " + stone + " shards");
        }else{
            $("#stone").html("");
        }

        if (pickaxes > 0){
            $("#pickaxes").html("you now own " + pickaxes + " pickaxe(s).");
        }else{
            $("#pickaxes").html("");
        }

   
    }

    function changeMarket(){
        if(logs > 0) {
            $("#sellAll").css("display", "block");
        }else if(stone > 0) {
            $("#sellAll").css("display", "block");

        } else {
            $("#sellAll").css("display", "none");
        }     


        if(gold >= autoChopperPrice){
            $("#autoChopper").css("display", "block");
        }else{
            $("#autoChopper").css("display", "none");
        }

        if(gold >= autoMinerPrice){
            $("#autoMiner").css("display", "block");
        }else{
            $("#autoMiner").css("display", "none");
        }

        if(gold >= pickaxePrice){
            $("#buyPickaxe").css("display", "block");
        }else{
            $("#buyPickaxe").css("display", "none");
        }

    }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
    

});


// cookie
let save = document.getElementById("gold");
function savecookie(){
    let value = document.getElementById("gold").innerHTML;
    let newvalue = value.replace(/[^0-9]/g,'');
 document.cookie = newvalue;
    alert("Cookies saved! / gold progess has been saved!"); // show all cookies
    
};

function coockiegone() {
document.cookie = 0;
    alert("Saved goldValue has been removed!");
};

