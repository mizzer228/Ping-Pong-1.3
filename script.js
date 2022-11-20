let ball = document.getElementById('ball');
let player = document.getElementById('player');
let player_2 = document.getElementById('player_2');
let scores = document.getElementById("scores_p1");
let scores_2 = document.getElementById("scores_p2");
let audio = document.getElementById("audio");
let x;
let y;
let x_speed = 2.8;
let y_speed = Math.floor(Math.random() * 3);
let Width = window.innerWidth
let Height = window.innerHeight
if (x_speed == 0) {
	x_speed = -1;
}


setInterval(forward, 1);
addEventListener("keydown", key);
function key(e) {

	if (e.code == "ArrowUp") {

		player_2.style.top = (parseInt(getComputedStyle(player_2).top) - 40) + 'px';
	} else if (e.code == "ArrowDown") {
		player_2.style.top = (parseInt(getComputedStyle(player_2).top) + 40) + 'px';
	}

	if (e.code == "KeyW") {
		player.style.top = (parseInt(getComputedStyle(player).top) - 40) + 'px';
	} else if (e.code == "KeyS") {
		player.style.top = (parseInt(getComputedStyle(player).top) + 40) + 'px';
	}
}

function forward() {

	let Y = ball.style.top = (parseInt(getComputedStyle(ball).top));
	let X = ball.style.left = (parseInt(getComputedStyle(ball).left));
	let Y_player = player.style.top = (parseInt(getComputedStyle(player).top));
	let Y_player_2 = player_2.style.top = (parseInt(getComputedStyle(player_2).top));
	if (X < 45 && (Y+10 > Y_player && Y < Y_player+150)) {
		x_speed *= -1;
		y_speed += 1;
		scores.innerHTML ++
		audio.play();
	}

	if (X+55 > Width-35 && (Y+10 > Y_player_2 && Y<Y_player_2+150)) {
		x_speed *= -1;
		y_speed += 1;
		scores_2.innerHTML ++
		audio.play();
	}

	if (X >Width-50 ) {
		x_speed *= -1;
		audio.play();
		scores.innerHTML ++
	}

	if (X < 0) {
		x_speed *= -1;
		scores_2.innerHTML ++
	}

	if (Y+1000 > Width || Y < 0) {
		y_speed *= -1;
		audio.play();
	}

	x = +x_speed;
	y = +y_speed;
	ball.style.left = (parseInt(getComputedStyle(ball).left) + x) + 'px';
	ball.style.top = (parseInt(getComputedStyle(ball).top) + y) + 'px';

}