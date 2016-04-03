//Helper functions
function AABBIntersect(ax, ay, aw, ah, bx, by, bw, bh){
	return ax < bx+bw && bx < ax+aw && ay < by+bh && by < ay + ah;
};


//Bullets
function Bullet(x, y, vely, w, h, color){
	this.x = x;
	this.y = y;
	this.vely = vely;
	this.width = w;
	this.height = h;
	this.color = color;
};

Bullet.prototype.update = function(){
	this.y += this.vely;
}

//screen
function Screen () {
	this.canvas = document.getElementById('gamePlace');
	this.ctx = this.canvas.getContext('2d');
};

Screen.prototype.clr = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Screen.prototype.drawSprite = function(sp, x, y){
	this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h);
};

Screen.prototype.drawBullet = function(bullet){
	this.ctx.fillStyle = bullet.color;
	this.ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
}





//Sprite 
function Sprite(img, x, y, w, h){
	this.img = img;
	this.x = x;
	this.y= y;
	this.w = w;
	this.h = h;
};

// InputHandeler

function InputHandeler(){
	this.down = {};
	this.pressed = {};

	var _this = this;
	document.addEventListener("keydown", function(evt){
		_this.down[evt.keyCode] = true;
		if(evt.keyCode == 32)
		{
			evt.preventDefault();
		}
	});
	document.addEventListener("keyup", function(evt){
		delete _this.down[evt.keyCode];
		delete _this.pressed[evt.keyCode];
	});

	InputHandeler.prototype.isDown = function(code){
		return this.down[code];
	};

	InputHandeler.prototype.isPressed = function(code){
		if (this.pressed[code]){
			return false;
		} else if (this.down[code]){
			return this.pressed[code] = true;
		}
		return false;
	};
}