class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Car race")
        title.position(300,100)
        var input = createInput("name")
        input.position(350,200)
        var button = createButton('Play')
        button.position(350,300)
        var greeting=createElement('h2')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Welcome "+name)
            greeting.position(300,300)
        })
    }
}