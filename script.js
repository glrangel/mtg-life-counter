var numOfPlayers = 2;

var players = [];
players.push(new player(
	parseInt(document.getElementById('player-1-life').innerHTML),
	document.getElementById('player-1-name').value,
	document.getElementById('player-1-life'),1

));
players.push(new player(
	parseInt(document.getElementById('player-2-life').innerHTML),
	document.getElementById('player-2-name').value,
	document.getElementById('player-2-life'),1
));

function updateName(playerNum,newName){
	players[playerNum].name = newName;
}

function incrLife(playerNum){
	if(players[playerNum].alive == 1){
		var tmp = ++players[playerNum].life;
		console.log(tmp);
		players[playerNum].lifeDOM.innerHTML = tmp;
	}
	// colorChange(playerNum);
	// gainLifeAnimation();

}
function decrLife(playerNum){
	if(players[playerNum].alive == 1){
		var tmp = --players[playerNum].life;
		if(tmp == 0)
			console.log(players[playerNum].name + ' loses!');
		console.log(tmp);
		players[playerNum].lifeDOM.innerHTML = tmp;
		if(tmp == 0 )
			players[playerNum].alive = 0;
	}

	// colorChange(playerNum);
	// loseLifeAnimation();

}

function player(life,name,lifeDOM,alive){
	this.life = life;
	this.name = name;
	this.lifeDOM = lifeDOM;
	this.alive = alive
}
function addPlayer(){
	if(numOfPlayers != 6){
		numOfPlayers++;
		var div = document.createElement('div');
		div.setAttribute('class', 'player');
		div.setAttribute('id', 'player-'+ numOfPlayers);

		var html = 
		'<div class="name"><input id="player-'+numOfPlayers+'-name" type="text" \
		value="Name" oninput="updateName('+(numOfPlayers-1)+',this.value)" placeholder="Name"></input></div>'+
		'<div class="controller-wrapper">'+
		'<div onclick="incrLife('+(numOfPlayers-1)+')" class="plus" id="player-'+numOfPlayers+'-plus">+</div>'+
		'<div class="life" id="player-'+numOfPlayers+'-life">20</div>'+
		'<div onclick="decrLife('+(numOfPlayers-1)+')" class="minus" id="player-'+numOfPlayers+'-minus">-</div></div>';

		div.innerHTML = html;

		// div.innerHTML = document.getElementById('player-3').innerHTML;
		document.getElementById('container-wrapper').appendChild(div);
		players.push(new player(
			parseInt(document.getElementById('player-'+numOfPlayers+'-life').innerHTML),
			document.getElementById('player-'+numOfPlayers+'-name').value,
			document.getElementById('player-'+numOfPlayers+'-life'),1
		));
	}

}
function removePlayer(){
	if(numOfPlayers > 2){
		numOfPlayers--;
		var tmp = document.getElementById('container-wrapper').lastElementChild;
		document.getElementById('container-wrapper').removeChild(tmp);
		players.pop();
	}

}

// function gainLifeAnimation(){
	
// }

// function loseLifeAnimation(){

// }
// function colorChange(num){
// 	switch(parseInt(players[num].lifeDOM.innerHTML)){
// 	}
// }























