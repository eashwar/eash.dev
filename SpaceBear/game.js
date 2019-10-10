////////////////////////////////////////////////
///////////    Global Variables    /////////////
////////////////////////////////////////////////
// The image that we want to use for our background
var backgroundImage = loadImage("images/sky.png");
// The sound to be played when jumping
var jumpsound = loadSound("sounds/jump.mp3");
// The background music
var music = loadSound("sounds/bgm.mp3");

defineFont("pressstart", "pressstart2p-webfont");

var fanfare = loadSound("sounds/fanfare.mp3");
var fanfareplay = false;


// The image for the blocks
var platformImage = loadImage("images/platformImage.png");

var lvl1finishimage = loadImage("images/Level1Finish.png");


var jumppic = loadImage("images/jump.png");
var leftpic = loadImage("images/left.png");
var rightpic = loadImage("images/right.png");
var shootpic = loadImage("images/shoot.png");


// The ascii codes for our input
var up = 38;
var left = 37;
var right = 39;
var shoot = 32;

// The speed to pull the player down
var gravity = 6000;

// Booleans that track if our input is being pushed down
var input = {
	left: false,
	right: false,
	up: false,
	shoot: false
}

var world = {
	xPosition: 0,
	yPosition: 0
}

var level = {
	storylevel: true,
	prelevel1: false,
	level1: false,
	prelevel2: false,
	level2: false,
	prelevel3: false,
	level3: false,
	credits: false,
	gameover: false
}

// All of the global arrays
var platformArray = [];
var coins = [];
var enemies = [];

// For loading the assets of each level
var storylevelloaded = false;


var creditstimer = 0;
var creditsloaded = false;


var level1loaded = false;
var level2loaded = false;
var level3loaded = false;

var prelevel1loaded = false;
var prelevel1timer = 0;

var prelevel2loaded = false;
var prelevel2timer = 0;

var prelevel3loaded = false;
var prelevel3timer = 0;


var lvl1playerset = false;
var lvl2playerset = false;
var lvl3playerset = false;

//For ending each level
var finishaddlevel1 = false;
var enemieskilledlevel2 = false;

// The player object and its properties
var player = {
	health: 30,
	lives: 3,
	// The width of the image
	imageWidth: 100,
	// The height of the image
	imageHeight: 130,
	// The x position of the player
	xPosition: 700,
	// The y position of the player
	yPosition: 800,
	// The player's speed in the x axis
	xVelocity: 0,
	// The player's speed in the y axis
	yVelocity: 0,
	// The player's jump speed
	jumpSpeed: 2250,
	// The player's move speed
	moveSpeed: 750,
	// Tracks if the player is standing on something
	isGrounded: false,
	coinCounter: 0,
	killCounter: 0,
	states:
	{
		IDLE: 0,
		RUNNING: 1
	},
	// Tracks the current state of the player
	currentState: 0,
	// Used for switching frames in an animation
	animationTimer: 0,
	// Tracks which frame we are currently on
	frameCnt: 0,
	// The player's sprite sheet
	spriteSheet:
	{
		// For moving to the right
		// forwardImage: loadImage("images/playerImageRight.png"),
		//forwardImage: loadImage("images/MainCharacter.png"),
		forwardImage: loadImage("images/spacebearright.png"),
		// For moving to the left
		// reversedImage: loadImage("images/playerImageLeft.png"),
		//reversedImage: loadImage("images/MainCharacterReversed.png"),
		reversedImage: loadImage("images/spacebearleft.png"),

		// Width of a sprite cell
		// cellWidth: 24, //Blorb or Link
		cellWidth: 380, // Space Bear
		// Height of a sprite cell
		// cellHeight: 24, //Blorb or Link
		cellHeight: 506,
		// The different animations in the sprite sheet
		animations:
		{
			IDLE:
			{
				xStart: 0,
				yStart: 0,
				framesX: 1,
				framesY: 1,
				fps: 1,
				numberOfFrames: 1
			},
			RUN:
			{
				xStart: 0,
				yStart: 0,
				framesX: 4,
				framesY: 1,
				fps: 7,
				numberOfFrames: 4
			}
		}
	},
	movingRight: true,
}


// The coin object and its properties	
var coinTemplate = {
	// The width of the image
	imageWidth: 100,
	// The height of the image
	imageHeight: 100,
	// Used for switching frames in an animation
	animationTimer: 0,
	// Tracks which frame we are currently on
	frameCnt: 0,
	// The coin's sprite sheet
	spriteSheet:
	{
		// Coin sprites
		image: loadImage("images/CoinMoving.png"),
		// Width of a sprite cell
		cellWidth: 23.5,
		// Height of a sprite cell
		cellHeight: 31,
		// The different animations in the sprite sheet
		animations:
		{
			IDLE:
			{
				xStart: 0,
				yStart: 0,
				framesX: 8,
				framesY: 1,
				fps: 8,
				numberOfFrames: 4
			}
		}
	},
}

////////////////////////////////////////////////////
///////////   LEVEL ONE COIN STUFF  ////////////////
////////////////////////////////////////////////////

var lvl1coin1 = {
	xPosition: world.xPosition + 1050,
	yPosition: world.yPosition + 100
}
var lvl1coin2 = {
	xPosition: world.xPosition + 950,
	yPosition: world.yPosition + 100
}
var lvl1coin3 = {
	xPosition: world.xPosition + 850,
	yPosition: world.yPosition + 100
}
var lvl1coin4 = {
	xPosition: world.xPosition + 350,
	yPosition: world.yPosition + 300
}
var lvl1coin5 = {
	xPosition: world.xPosition + 450,
	yPosition: world.yPosition + 300
}
var lvl1coin6 = {
	xPosition: world.xPosition - 175,
	yPosition: world.yPosition + 500
}
var lvl1coin7 = {
	xPosition: world.xPosition - 75,
	yPosition: world.yPosition + 500
}
var lvl1coin8 = {
	xPosition: world.xPosition - 475,
	yPosition: world.yPosition + 300
}
var lvl1coin9 = {
	xPosition: world.xPosition - 375,
	yPosition: world.yPosition + 300
}
var lvl1coin10 = {
	xPosition: world.xPosition - 1475,
	yPosition: world.yPosition + 100
}
var lvl1coin11 = {
	xPosition: world.xPosition - 1375,
	yPosition: world.yPosition + 100
}
var lvl1coin12 = {
	xPosition: world.xPosition - 1275,
	yPosition: world.yPosition + 100
}
var lvl1coin13 = {
	xPosition: world.xPosition - 1175,
	yPosition: world.yPosition + 100
}
var lvl1coin14 = {
	xPosition: world.xPosition - 1075,
	yPosition: world.yPosition + 100
}
var lvl1coin15 = {
	xPosition: world.xPosition - 975,
	yPosition: world.yPosition + 100
}
var lvl1coin16 = {
	xPosition: world.xPosition + 4025,
	yPosition: world.yPosition + 500
}
var lvl1coin17 = {
	xPosition: world.xPosition + 4125,
	yPosition: world.yPosition + 500
}
var lvl1coin18 = {
	xPosition: world.xPosition + 4225,
	yPosition: world.yPosition + 500
}
var lvl1coin19 = {
	xPosition: world.xPosition + 4325,
	yPosition: world.yPosition + 500
}
var lvl1coin20 = {
	xPosition: world.xPosition + 4425,
	yPosition: world.yPosition + 500
}
var lvl1coin21 = {
	xPosition: world.xPosition + 4525,
	yPosition: world.yPosition + 500
}
var lvl1coin22 = {
	xPosition: world.xPosition + 4625,
	yPosition: world.yPosition + 500
}
var lvl1coin23 = {
	xPosition: world.xPosition + 4725,
	yPosition: world.yPosition + 500
}
var lvl1coin24 = {
	xPosition: world.xPosition + 4825,
	yPosition: world.yPosition + 500
}
var lvl1coin25 = {
	xPosition: world.xPosition + 4925,
	yPosition: world.yPosition + 500
}

var coinsLevel1 = [
		lvl1coin1,
		lvl1coin2,
		lvl1coin3,
		lvl1coin4,
		lvl1coin5,
		lvl1coin6,
		lvl1coin7,
		lvl1coin8,
		lvl1coin9,
		lvl1coin10,
		lvl1coin11,
		lvl1coin12,
		lvl1coin13,
		lvl1coin14,
		lvl1coin15,
		lvl1coin16,
		lvl1coin17,
		lvl1coin18,
		lvl1coin19,
		lvl1coin20,
		lvl1coin21,
		lvl1coin22,
		lvl1coin23,
		lvl1coin24,
		lvl1coin25
	]
	////////////////////////////////////////////////////
	///////////  END LEVEL ONE COIN STUFF  /////////////
	////////////////////////////////////////////////////



////////////////////////////////////////////////////
///////////    LEVEL TWO COIN STUFF    /////////////
////////////////////////////////////////////////////
var lvl2coin1 = {
	xPosition: world.xPosition + 1050,
	yPosition: world.yPosition + 100
}
var coinsLevel2 = [
	lvl2coin1
]

////////////////////////////////////////////////////
///////////  END LEVEL TWO COIN STUFF  /////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
///////////   LEVEL THREE COIN STUFF   /////////////
////////////////////////////////////////////////////
var spacehoney = {
	xPosition: world.xPosition + 2050,
	yPosition: world.yPosition + 800
}

var coinsLevel3 = []

////////////////////////////////////////////////////
/////////// END LEVEL THREE COIN STUFF /////////////
////////////////////////////////////////////////////
var coinBoxHit = false;
var coinSound = loadSound("sounds/coin.mp3");




////////////////////////////////////////////////////////
///////////    PRELEVEL PLATFORM/ENEMY STUFF    ////////
////////////////////////////////////////////////////////
var ground = {
	name: "ground",
	xPosition: world.xPosition - 1000,
	yPosition: world.yPosition - 100,
	width: 10000,
	height: 100,
	color: makeColor(0, 1, 0)
}
var platform1 = {
	name: "ground",
	xPosition: world.xPosition - 1000,
	yPosition: world.yPosition - 300,
	width: 10000,
	height: 100,
	color: makeColor(0, 1, 0)
}

var prelevelplatformArray = [
	ground,
	platform1
]
var storylevelenemy1 = {
	xPosition: world.xPosition + screenWidth - 100,
	yPosition: world.yPosition - 200,
	height: 100,
	width: 73,
	image: loadImage("images/enemyright30.png"),
	shootDirection: "right",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 10
}
var storylevelenemy2 = {
	xPosition: world.xPosition,
	yPosition: world.yPosition - 200,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 10
}

var storylevelenemies = [
	storylevelenemy1,
	storylevelenemy2
]

////////////////////////////////////////////////////////
///////////  END PRELEVEL/ENEMY PLATFORM STUFF  ////////
////////////////////////////////////////////////////////



////////////////////////////////////////////////////////
///////////    LEVEL ONE PLATFORM STUFF    /////////////
////////////////////////////////////////////////////////
// All of the platforms that appear in the first level
var ground = {
	name: "ground",
	xPosition: world.xPosition - 2000,
	yPosition: world.yPosition + 1000,
	width: 10000,
	height: screenHeight,
	color: makeColor(0, 1, 0)
}
var lvl1platform1 = {
	name: "lvl1platform1",
	xPosition: world.xPosition + 300,
	yPosition: world.yPosition + 400,
	width: 300,
	height: 200,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl1platform2 = {
	name: "lvl1platform2",
	xPosition: world.xPosition + 800,
	yPosition: world.yPosition + 200,
	width: 400,
	height: 200,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl1platform3 = {
	name: "lvl1platform3",
	xPosition: world.xPosition + 1700,
	yPosition: world.yPosition + 700,
	width: 200,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform4 = {
	name: "lvl1platform4",
	xPosition: world.xPosition - 200,
	yPosition: world.yPosition + 600,
	width: 200,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform5 = {
	name: "lvl1platform5",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 400,
	width: 200,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform6 = {
	name: "lvl1platform6",
	xPosition: world.xPosition - 1500,
	yPosition: world.yPosition + 200,
	width: 600,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform7 = {
	name: "lvl1platform7",
	xPosition: world.xPosition + 2300,
	yPosition: world.yPosition + 500,
	width: 400,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform8 = {
	name: "lvl1platform8",
	xPosition: world.xPosition + 2500,
	yPosition: world.yPosition + 100,
	width: 200,
	height: 500,
	color: makeColor(1, 1, 0)
}
var lvl1platform9 = {
	name: "lvl1platform9",
	xPosition: world.xPosition + 2700,
	yPosition: world.yPosition + 300,
	width: 200,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform10 = {
	name: "lvl1platform10",
	xPosition: world.xPosition + 3100,
	yPosition: world.yPosition + 600,
	width: 400,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform11 = {
	name: "lvl1platform11",
	xPosition: world.xPosition + 3300,
	yPosition: world.yPosition + 200,
	width: 200,
	height: 400,
	color: makeColor(1, 1, 0)
}
var lvl1platform12 = {
	name: "lvl1platform12",
	xPosition: world.xPosition + 4000,
	yPosition: world.yPosition + 650,
	width: 1000,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform13 = {
	name: "lvl1platform13",
	xPosition: world.xPosition + 4300,
	yPosition: world.yPosition + 200,
	width: 600,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1platform14 = {
	name: "lvl1platform14",
	xPosition: world.xPosition + 4200,
	yPosition: world.yPosition + 200,
	width: 200,
	height: 100,
	color: makeColor(1, 1, 0)
}
var lvl1barrier1 = {
	name: "lvl1platform15",
	xPosition: world.xPosition - 3800,
	yPosition: world.yPosition,
	width: 2300,
	height: screenHeight,
	color: makeColor(1, 1, 0)
}
var lvl1barrier2 = {
	name: "lvl1platform16",
	xPosition: world.xPosition + 6500,
	yPosition: world.yPosition,
	width: 2100,
	height: screenHeight,
	color: makeColor(1, 1, 0)
}
var finish = {
		name: "finish",
		xPosition: world.xPosition + 5400,
		yPosition: world.yPosition + 500,
		width: 800,
		height: 500,
		color: makeColor(1, 1, 0)
	}
	// An array that holds all of the platforms of the first level
var platformArrayLevel1 = [
		ground,
		lvl1platform1,
		lvl1platform2,
		lvl1platform3,
		lvl1platform4,
		lvl1platform5,
		lvl1platform6,
		lvl1platform7,
		lvl1platform8,
		lvl1platform9,
		lvl1platform10,
		lvl1platform11,
		lvl1platform12,
		lvl1platform13,
		lvl1platform14,
		lvl1barrier1,
		lvl1barrier2
	]
	////////////////////////////////////////////////////////
	///////////  END LEVEL ONE PLATFORM STUFF  /////////////
	////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
///////////    LEVEL TWO PLATFORM STUFF    /////////////
////////////////////////////////////////////////////////
//All of the platforms that appear in the second level
var ground = {
	name: "ground1",
	xPosition: world.xPosition - 2000,
	yPosition: world.yPosition + 1200,
	width: 10000,
	height: 500,
	color: makeColor(0, 1, 0)
}
var lvl2platform1 = {
	name: "lvl2platform1",
	xPosition: world.xPosition + 250,
	yPosition: world.yPosition + 800,
	width: 300,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform2 = {
	name: "lvl2platform2",
	xPosition: world.xPosition + 750,
	yPosition: world.yPosition + 800,
	width: 200,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform3 = {
	name: "lvl2platform3",
	xPosition: world.xPosition + 350,
	yPosition: world.yPosition + 350,
	width: 200,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform4 = {
	name: "lvl2platform4",
	xPosition: world.xPosition + 1250,
	yPosition: world.yPosition + 550,
	width: 300,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform5 = {
	name: "lvl2platform5",
	xPosition: world.xPosition + 1450,
	yPosition: world.yPosition + 250,
	width: 200,
	height: 350,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform6 = {
	name: "lvl2platform6",
	xPosition: world.xPosition + 1450,
	yPosition: world.yPosition + 150,
	width: 300,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform7 = {
	name: "lvl2platform7",
	xPosition: world.xPosition + 2150,
	yPosition: world.yPosition + 50,
	width: 300,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var secretlvl2platform = {
	name: "lvl2platform8",
	xPosition: world.xPosition + 3550,
	yPosition: world.yPosition - 150,
	width: 4000,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform9 = {
	name: "lvl2platform9",
	xPosition: world.xPosition + 1700,
	yPosition: world.yPosition + 800,
	width: 300,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform10 = {
	name: "lvl2platform10",
	xPosition: world.xPosition + 2000,
	yPosition: world.yPosition + 500,
	width: 200,
	height: 400,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform11 = {
	name: "lvl2platform11",
	xPosition: world.xPosition + 2850,
	yPosition: world.yPosition + 200,
	width: 200,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform12 = {
	name: "lvl2platform12",
	xPosition: world.xPosition + 2850,
	yPosition: world.yPosition + 300,
	width: 200,
	height: 300,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform13 = {
	name: "lvl2platform13",
	xPosition: world.xPosition + 2850,
	yPosition: world.yPosition + 500,
	width: 500,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform14 = {
	name: "lvl2platform14",
	xPosition: world.xPosition + 3350,
	yPosition: world.yPosition + 300,
	width: 200,
	height: 300,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform15 = {
	name: "lvl2platform15",
	xPosition: world.xPosition + 3350,
	yPosition: world.yPosition + 200,
	width: 200,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform16 = {
	name: "lvl2platform16",
	xPosition: world.xPosition + 3450,
	yPosition: world.yPosition + 900,
	width: 500,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform17 = {
	name: "lvl2platform17",
	xPosition: world.xPosition + 3750,
	yPosition: world.yPosition + 600,
	width: 500,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform18 = {
	name: "lvl2platform18",
	xPosition: world.xPosition + 4350,
	yPosition: world.yPosition + 300,
	width: 500,
	height: 300,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform19 = {
	name: "lvl2platform19",
	xPosition: world.xPosition + 5050,
	yPosition: world.yPosition + 700,
	width: 200,
	height: 200,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform20 = {
	name: "lvl2platform20",
	xPosition: world.xPosition + 5050,
	yPosition: world.yPosition + 900,
	width: 300,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform21 = {
	name: "lvl2platform21",
	xPosition: world.xPosition + 5650,
	yPosition: world.yPosition + 500,
	width: 800,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform22 = {
	name: "lvl2platform22",
	xPosition: world.xPosition + 5950,
	yPosition: world.yPosition + 200,
	width: 200,
	height: 400,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform23 = {
	name: "lvl2platform23",
	xPosition: world.xPosition + 6250,
	yPosition: world.yPosition + 1100,
	width: 700,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform24 = {
	name: "lvl2platform24",
	xPosition: world.xPosition + 6350,
	yPosition: world.yPosition + 1000,
	width: 500,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2platform25 = {
	name: "lvl2platform25",
	xPosition: world.xPosition + 6450,
	yPosition: world.yPosition + 900,
	width: 300,
	height: 100,
	color: makeColor(0.75, 0.4, 0.15)
}
var lvl2barrier1 = {
	name: "lvl1platform15",
	xPosition: world.xPosition - 2700,
	yPosition: world.yPosition,
	width: 2300,
	height: screenHeight,
	color: makeColor(1, 1, 0)
}
var lvl2barrier2 = {
	name: "lvl1platform16",
	xPosition: world.xPosition + 7000,
	yPosition: world.yPosition,
	width: 2100,
	height: screenHeight,
	color: makeColor(1, 1, 0)
}

var platformArrayLevel2 = [
		ground,
		lvl2platform1,
		lvl2platform2,
		lvl2platform3,
		lvl2platform4,
		lvl2platform5,
		lvl2platform6,
		lvl2platform7,
		secretlvl2platform,
		lvl2platform9,
		lvl2platform10,
		lvl2platform11,
		lvl2platform12,
		lvl2platform13,
		lvl2platform14,
		lvl2platform15,
		lvl2platform16,
		lvl2platform17,
		lvl2platform18,
		lvl2platform19,
		lvl2platform20,
		lvl2platform21,
		lvl2platform22,
		lvl2platform23,
		lvl2platform24,
		lvl2platform25,
		lvl2barrier1,
		lvl2barrier2
	]
	////////////////////////////////////////////////////////
	///////////  END LEVEL TWO PLATFORM STUFF  /////////////
	////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
///////////   LEVEL THREE PLATFORM STUFF  //////////////
////////////////////////////////////////////////////////
var ground = {
	name: "ground",
	xPosition: world.xPosition - 2000,
	yPosition: world.yPosition + 1200,
	width: 10000,
	height: 500,
	color: makeColor(0, 1, 0)
}
var lvl3platform1 = {
	name: "lvl3platform1",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 1100,
	width: 1100,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform2 = {
	name: "lvl3platform2",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 1000,
	width: 1000,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform3 = {
	name: "lvl3platform3",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 1000,
	width: 1000,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform4 = {
	name: "lvl3platform4",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 900,
	width: 900,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform5 = {
	name: "lvl3platform5",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 800,
	width: 800,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform6 = {
	name: "lvl3platform6",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 700,
	width: 700,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform7 = {
	name: "lvl3platform7",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 600,
	width: 600,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform8 = {
	name: "lvl3platform8",
	xPosition: world.xPosition - 500,
	yPosition: world.yPosition + 500,
	width: 500,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform9 = {
	name: "lvl3platform9",
	xPosition: world.xPosition + 700,
	yPosition: world.yPosition + 900,
	width: 400,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform10 = {
	name: "lvl3platform10",
	xPosition: world.xPosition + 800,
	yPosition: world.yPosition + 350,
	width: 400,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform11 = {
	name: "lvl3platform11",
	xPosition: world.xPosition + 3600,
	yPosition: world.yPosition + 1100,
	width: 1100,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform12 = {
	name: "lvl3platform12",
	xPosition: world.xPosition + 3700,
	yPosition: world.yPosition + 1000,
	width: 1000,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform13 = {
	name: "lvl3platform13",
	xPosition: world.xPosition + 3700,
	yPosition: world.yPosition + 1000,
	width: 1000,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform14 = {
	name: "lvl3platform14",
	xPosition: world.xPosition + 3800,
	yPosition: world.yPosition + 900,
	width: 900,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform15 = {
	name: "lvl3platform15",
	xPosition: world.xPosition + 3900,
	yPosition: world.yPosition + 800,
	width: 800,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform16 = {
	name: "lvl3platform16",
	xPosition: world.xPosition + 4000,
	yPosition: world.yPosition + 700,
	width: 700,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform17 = {
	name: "lvl3platform17",
	xPosition: world.xPosition + 4100,
	yPosition: world.yPosition + 600,
	width: 600,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform18 = {
	name: "lvl3platform18",
	xPosition: world.xPosition + 4200,
	yPosition: world.yPosition + 500,
	width: 500,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform19 = {
	name: "lvl3platform19",
	xPosition: world.xPosition + 3100,
	yPosition: world.yPosition + 900,
	width: 400,
	height: 100,
	color: makeColor(0, 1, 0)
}
var lvl3platform20 = {
	name: "lvl3platform20",
	xPosition: world.xPosition + 3000,
	yPosition: world.yPosition + 350,
	width: 400,
	height: 100,
	color: makeColor(0, 1, 0)
}
var platformArrayLevel3 = [
	ground,
	lvl3platform1,
	lvl3platform2,
	lvl3platform3,
	lvl3platform4,
	lvl3platform5,
	lvl3platform6,
	lvl3platform7,
	lvl3platform8,
	lvl3platform9,
	lvl3platform10,
	lvl3platform11,
	lvl3platform12,
	lvl3platform13,
	lvl3platform14,
	lvl3platform15,
	lvl3platform16,
	lvl3platform17,
	lvl3platform18,
	lvl3platform19,
	lvl3platform20
]

////////////////////////////////////////////////////////
///////////  END LEVEL THREE PLATFORM STUFF  ///////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
///////////    LEVEL ONE ENEMY STUFF    ////////////////
////////////////////////////////////////////////////////

var lvl1enemy1 = {
	xPosition: world.xPosition + 4875,
	yPosition: world.yPosition + 550,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.5,
	fireTimer: 0.0,
	health: 20
}


var enemiesLevel1 = [
		lvl1enemy1
	]
	////////////////////////////////////////////////////////
	///////////   END LEVEL ONE ENEMY STUFF    /////////////
	////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
///////////    LEVEL TWO ENEMY STUFF    ////////////////
////////////////////////////////////////////////////////
var lvl2enemy1 = {
	xPosition: world.xPosition + 350,
	yPosition: world.yPosition + 700,
	height: 100,
	width: 73,
	image: loadImage("images/enemyright30.png"),
	shootDirection: "right",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl2enemy2 = {
	xPosition: world.xPosition + 250,
	yPosition: world.yPosition + 700,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl2enemy3 = {
	xPosition: world.xPosition + 1750,
	yPosition: world.yPosition + 700,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl2enemy4 = {
	xPosition: world.xPosition + 3350,
	yPosition: world.yPosition + 100,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl2enemy5 = {
	xPosition: world.xPosition + 3850,
	yPosition: world.yPosition + 800,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl2enemy6 = {
	xPosition: world.xPosition + 4050,
	yPosition: world.yPosition + 500,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl2enemy7 = {
	xPosition: world.xPosition + 4750,
	yPosition: world.yPosition + 200,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl2enemy8 = {
	xPosition: world.xPosition + 6350,
	yPosition: world.yPosition + 400,
	height: 100,
	width: 73,
	image: loadImage("images/enemyright30.png"),
	shootDirection: "right",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}


var enemiesLevel2 = [
	lvl2enemy1,
	lvl2enemy2,
	lvl2enemy3,
	lvl2enemy4,
	lvl2enemy5,
	lvl2enemy6,
	lvl2enemy7,
	lvl2enemy8
]

////////////////////////////////////////////////////////
///////////   END LEVEL TWO ENEMY STUFF    /////////////
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
///////////    LEVEL THREE ENEMY STUFF    //////////////
////////////////////////////////////////////////////////
var boss = {
	name: "boss",
	xPosition: world.xPosition + 1700,
	yPosition: world.yPosition + 700,
	height: 356,
	width: 800,
	image: loadImage("images/boss.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 210
}
var lvl3enemy1 = {
	name: "enemy1",
	xPosition: world.xPosition + 700,
	yPosition: world.yPosition + 1100,
	height: 100,
	width: 73,
	image: loadImage("images/enemyright30.png"),
	shootDirection: "right",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl3enemy2 = {
	name: "enemy2",
	xPosition: world.xPosition + 3500,
	yPosition: world.yPosition + 1100,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl3enemy3 = {
	name: "enemy1",
	xPosition: world.xPosition + 800,
	yPosition: world.yPosition + 800,
	height: 100,
	width: 73,
	image: loadImage("images/enemyright30.png"),
	shootDirection: "right",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}
var lvl3enemy4 = {
	name: "enemy1",
	xPosition: world.xPosition + 3400,
	yPosition: world.yPosition + 800,
	height: 100,
	width: 73,
	image: loadImage("images/enemyleft30.png"),
	shootDirection: "left",
	fireRate: 1.25,
	fireTimer: 0.0,
	health: 30
}


var bossTimer = 0;

var explosiondone = false;
var explosionTimer = 0;

var enemiesLevel3 = [
		boss,
	]
	////////////////////////////////////////////////////////
	///////////   END LEVEL THREE ENEMY STUFF    ///////////
	////////////////////////////////////////////////////////

var bulletArray = [];



function createBullet(xPos, yPos, direction, speed, origin)
{
	this.xPosition = xPos;
	this.yPosition = yPos;
	this.direction = direction;
	this.speed = speed;
	this.timer = 0.0;
	this.origin = origin;
}

// The time between the current frame and the last frame
var deltaTime = 0;
// Used to calculate deltaTime
var previousTime = 0;

////////////////////////////////////////////////
////////    End of Global Variables    /////////
////////////////////////////////////////////////



////////////////////////////////////////////////
////////////    Setup and OnTick    ////////////
////////////////////////////////////////////////
defineGame("Space Bear", "Eashwar, Anushka, and Max", "images/TitleScreen.png", "H", true, true, undefined, "drag ignores touch keys");


// This function gets ran once at the beginning of the game
function onSetup()
{
	// Give previousTime a starting value so we can calculate deltaTime
	previousTime = currentTime();

	// If mobile then set touch rectangles
	if (isMobile)
	{
		setTouchKeyRectangle(up, 10, screenHeight - 300, 300, 290, "");
		setTouchKeyRectangle(left, screenWidth - 640, screenHeight - 300, 300, 290, "");
		setTouchKeyRectangle(right, screenWidth - 310, screenHeight - 300, 300, 290, "");
		setTouchKeyRectangle(shoot, 410, screenHeight - 300, 300, 290, "");
	}
}

// This function gets called every frame, about 30 times a second
function onTick()
{
	doPhysics();
	doGraphics();


	if (!playingSound(music) && !fanfareplay)
	{
		playSound(music);
	}
	if (fanfareplay)
	{
		stopSound(music);
	}
}

////////////////////////////////////////////////
/////////    End of Setup and OnTick    ////////
////////////////////////////////////////////////

////////////////////////////////////////////////
////    Graphics, Physics, and Collisions    ///
////////////////////////////////////////////////

// This function handles gravity and movement.
function doPhysics()
{
	// Calculate the time between frames
	deltaTime = currentTime() - previousTime;

	// Apply gravity if the player isn't grounded
	if (!player.isGrounded)
	{
		player.yVelocity += gravity * deltaTime;
	}

	// Update the player's position based on speed and time
	//player.xPosition += player.xVelocity * deltaTime;
	world.xPosition -= player.xVelocity * deltaTime;
	player.yPosition += player.yVelocity * deltaTime;

	// Check for any collisions against platforms or coins
	platformCollisionDetection();
	coinCollisionDetection();
	bulletCollisionDetection();


	//Bullet timers and positions
	for (var i = 0; i < bulletArray.length; ++i)
	{
		var bullet = bulletArray[i];
		//bullet.timer += deltaTime;

		// if (bullet.timer >= 3) {
		// bulletArray.splice(i, 1);
		// break;
		// }

		if (bullet.direction == "up")
		{
			bullet.yPosition -= bullet.speed * deltaTime
		}
		if (bullet.direction == "right")
		{
			bullet.xPosition += bullet.speed * deltaTime
		}
		if (bullet.direction == "left")
		{
			bullet.xPosition -= bullet.speed * deltaTime
		}
		if (bullet.direction == "down")
		{
			bullet.yPosition += bullet.speed * deltaTime
		}
	}

	for (var i = 0; i < enemies.length; ++i)
	{
		var enemy = enemies[i]

		enemy.fireTimer += deltaTime;
		if (!level.level3 || (level.level3 && i > 0))
		{
			if (enemy.fireTimer >= enemy.fireRate)
			{
				enemy.fireTimer = 0.0;
				var bullet;
				if (enemy.shootDirection == "left")
				{
					bullet = new createBullet(enemy.xPosition, enemy.yPosition, enemy.shootDirection, 250, "bad");
				}
				else
				{
					bullet = new createBullet(enemy.xPosition + 100, enemy.yPosition, enemy.shootDirection, 250, "bad");
				}
				bulletArray.push(bullet);
			}
		}
	}

	// Change the player's state
	if (player.xVelocity == 0 && player.isGrounded)
	{
		// Idle
		changeState(player.states.IDLE);
	}
	else if (player.xVelocity > 0 && player.isGrounded)
	{
		// Run Right
		changeState(player.states.RUNNING);
	}
	else if (player.xVelocity < 0 && player.isGrounded)
	{
		// Run Left
		changeState(player.states.RUNNING);
	}
	if (player.xVelocity > 0)
	{
		player.movingRight = true;
	}
	else if (player.xVelocity < 0)
	{
		player.movingRight = false;
	}
	// Set previous time to the current time so we can update deltaTime next frame
	previousTime = currentTime();
}

// Checks if the player has collided with any platforms
function platformCollisionDetection()
{
	// Tracks if the player hit something
	var hitSomething = false;

	// The edges of the player
	var playerTop = player.yPosition - player.imageHeight / 2;
	var playerBottom = player.yPosition + player.imageHeight / 2;
	var playerLeft = player.xPosition - player.imageWidth / 2;
	var playerRight = player.xPosition + player.imageWidth / 2;

	// Loops through all the platforms
	if (level.storylevel)
	{
		for (var counter = 0; counter < platformArray.length; ++counter)
		{
			// The current platform we are checking against
			var platform = platformArray[counter];

			// Checks for the collision
			var collision = checkCollision(playerTop, playerBottom, playerLeft, playerRight,
				world.yPosition + platform.yPosition, world.yPosition + platform.yPosition + platform.height,
				world.xPosition + platform.xPosition, world.xPosition + platform.xPosition + platform.width);

			// Player's feet collided with a platform
			if (collision == 1)
			{
				player.yVelocity = 0;
				player.yPosition = world.yPosition + platform.yPosition - player.imageHeight / 2;
				player.isGrounded = true;
				hitSomething = true;
			}
			// Player's head collided with a platform
			else if (collision == 2)
			{
				player.yVelocity = 0;
				player.yPosition = world.yPosition + platform.yPosition + platform.height + player.imageHeight / 2;
				hitSomething = true;
			}

			// Player's right side collided with a platform
			else if (collision == 3)
			{
				player.xVelocity = 0;
				//player.xPosition = world.xPosition + platform.xPosition - player.imageWidth/2;
				world.xPosition = player.xPosition - platform.xPosition + player.imageWidth / 2;
				hitSomething = true;
			}
			// Player's left side collided with a platform
			else if (collision == 4)
			{
				player.xVelocity = 0;
				//player.xPosition = world.xPosition + platform.xPosition + platform.width + player.imageWidth/2;
				world.xPosition = player.xPosition - platform.xPosition - platform.width - player.imageWidth / 2;
				hitSomething = true;
			}
		}
	}
	if (level.level1)
	{
		for (var counter = 0; counter < platformArray.length; ++counter)
		{
			// The current platform we are checking against
			var platform = platformArray[counter];

			// Checks for the collision
			var collision = checkCollision(playerTop, playerBottom, playerLeft, playerRight,
				world.yPosition + platform.yPosition, world.yPosition + platform.yPosition + platform.height,
				world.xPosition + platform.xPosition, world.xPosition + platform.xPosition + platform.width);

			// Player's feet collided with a platform
			if (collision == 1)
			{
				if (counter == 17)
				{
					player.coinCounter = 0;
					world.xPosition = 0;
					player.xPosition = world.xPosition + 700;
					player.yPosition = world.yPosition + 1100;
					level.level1 = false;
					level.prelevel2 = true;
					player.yVelocity = 0;
					player.yPosition = world.yPosition + platform.yPosition - player.imageHeight / 2;
					player.isGrounded = true;
					hitSomething = true;
				}
				else
				{
					player.yVelocity = 0;
					player.yPosition = world.yPosition + platform.yPosition - player.imageHeight / 2;
					player.isGrounded = true;
					hitSomething = true;
				}
			}
			// Player's head collided with a platform
			else if (collision == 2)
			{
				player.yVelocity = 0;
				player.yPosition = world.yPosition + platform.yPosition + platform.height + player.imageHeight / 2;
				hitSomething = true;

			}

			// Player's right side collided with a platform
			else if (collision == 3)
			{
				if (counter == 17) // hitting the finish line of level 1
				{
					player.xVelocity = 0;
					//player.xPosition = world.xPosition + platform.xPosition - player.imageWidth/2;
					world.xPosition = player.xPosition - platform.xPosition + player.imageWidth / 2;
					hitSomething = true;
					player.coinCounter = 0;
					world.xPosition = 0;
					player.xPosition = world.xPosition + 700;
					player.yPosition = world.yPosition + 1100;
					level.level1 = false;
					level.prelevel2 = true;
				}
				else
				{
					player.xVelocity = 0;
					//player.xPosition = world.xPosition + platform.xPosition - player.imageWidth/2;
					world.xPosition = player.xPosition - platform.xPosition + player.imageWidth / 2;
					hitSomething = true;
				}
			}
			// Player's left side collided with a platform
			else if (collision == 4)
			{
				player.xVelocity = 0;
				//player.xPosition = world.xPosition + platform.xPosition + platform.width + player.imageWidth/2;
				world.xPosition = player.xPosition - platform.xPosition - platform.width - player.imageWidth / 2;
				hitSomething = true;
			}
		}
	}
	if (level.level2)
	{
		for (var counter = 0; counter < platformArray.length; ++counter)
		{
			// The current platform we are checking against
			var platform = platformArray[counter];

			// Checks for the collision
			var collision = checkCollision(playerTop, playerBottom, playerLeft, playerRight,
				world.yPosition + platform.yPosition, world.yPosition + platform.yPosition + platform.height,
				world.xPosition + platform.xPosition, world.xPosition + platform.xPosition + platform.width);

			// Player's feet collided with a platform
			if (collision == 1)
			{
				player.yVelocity = 0;
				player.yPosition = world.yPosition + platform.yPosition - player.imageHeight / 2;
				player.isGrounded = true;
				hitSomething = true;
			}
			// Player's head collided with a platform
			else if (collision == 2)
			{
				player.yVelocity = 0;
				player.yPosition = world.yPosition + platform.yPosition + platform.height + player.imageHeight / 2;
				hitSomething = true;
			}

			// Player's right side collided with a platform
			else if (collision == 3)
			{
				player.xVelocity = 0;
				//player.xPosition = world.xPosition + platform.xPosition - player.imageWidth/2;
				world.xPosition = player.xPosition - platform.xPosition + player.imageWidth / 2;
				hitSomething = true;
			}
			// Player's left side collided with a platform
			else if (collision == 4)
			{
				player.xVelocity = 0;
				//player.xPosition = world.xPosition + platform.xPosition + platform.width + player.imageWidth/2;
				world.xPosition = player.xPosition - platform.xPosition - platform.width - player.imageWidth / 2;
				hitSomething = true;
			}
		}

	}

	if (level.level3)
	{
		for (var counter = 0; counter < platformArray.length; ++counter)
		{
			// The current platform we are checking against
			var platform = platformArray[counter];

			// Checks for the collision
			var collision = checkCollision(playerTop, playerBottom, playerLeft, playerRight,
				world.yPosition + platform.yPosition, world.yPosition + platform.yPosition + platform.height,
				world.xPosition + platform.xPosition, world.xPosition + platform.xPosition + platform.width);

			// Player's feet collided with a platform
			if (collision == 1)
			{
				player.yVelocity = 0;
				player.yPosition = world.yPosition + platform.yPosition - player.imageHeight / 2;
				player.isGrounded = true;
				hitSomething = true;
			}
			// Player's head collided with a platform
			else if (collision == 2)
			{
				player.yVelocity = 0;
				player.yPosition = world.yPosition + platform.yPosition + platform.height + player.imageHeight / 2;
				hitSomething = true;
			}

			// Player's right side collided with a platform
			else if (collision == 3)
			{
				player.xVelocity = 0;
				//player.xPosition = world.xPosition + platform.xPosition - player.imageWidth/2;
				world.xPosition = player.xPosition - platform.xPosition + player.imageWidth / 2;
				hitSomething = true;
			}
			// Player's left side collided with a platform
			else if (collision == 4)
			{
				player.xVelocity = 0;
				//player.xPosition = world.xPosition + platform.xPosition + platform.width + player.imageWidth/2;
				world.xPosition = player.xPosition - platform.xPosition - platform.width - player.imageWidth / 2;
				hitSomething = true;
			}
		}
	}

	// If the player didn't hit anything then the they can't be on the ground
	if (!hitSomething)
	{
		player.isGrounded = false;
	}
}

function coinCollisionDetection()
{
	// Tracks if the player hit something
	var hitCoin = false;

	// The edges of the player
	var playerTop = player.yPosition - player.imageHeight / 2;
	var playerBottom = player.yPosition + player.imageHeight / 2;
	var playerLeft = player.xPosition - player.imageWidth / 2;
	var playerRight = player.xPosition + player.imageWidth / 2;

	// Loop through all of our coins
	for (var i = 0; i < coins.length; ++i)
	{
		// The current coin
		var coin = coins[i];

		// Checks for the collision
		var collision = checkCollision(playerTop, playerBottom, playerLeft, playerRight,
			world.yPosition + coin.yPosition, world.yPosition + coin.yPosition + coinTemplate.imageHeight,
			world.xPosition + coin.xPosition, world.xPosition + coin.xPosition + coinTemplate.imageWidth);

		// If there is a collision
		if (collision != 0 )
		{
			player.coinCounter++;
			if (!level.level3)
			{
				playSound(coinSound, false);
			}
			coins.splice(i, 1);
			break;
		}
	}
}

function bulletCollisionDetection()
{
	var removalList = [];

	// Loop through all bullets, checking all bullets with all platforms, all enemies, and the player
	for (var i = 0; i < bulletArray.length; ++i)
	{
		var bullet = bulletArray[i];

		//Edges of the Bullet
		if (bullet.direction == "left" || bullet.direction == "right")
		{
			var bulletTop = world.yPosition + bullet.yPosition - 5;
			var bulletBottom = world.yPosition + bullet.yPosition + 5;
			var bulletLeft = world.xPosition + bullet.xPosition - 10;
			var bulletRight = world.xPosition + bullet.xPosition + 10;
		}
		else if (bullet.direction == "up" || bullet.direction == "down")
		{
			var bulletTop = world.yPosition + bullet.yPosition - 10;
			var bulletBottom = world.yPosition + bullet.yPosition + 10;
			var bulletLeft = world.xPosition + bullet.xPosition - 5;
			var bulletRight = world.xPosition + bullet.xPosition + 5;
		}




		// Loops through all the platforms
		for (var counter = 0; counter < platformArray.length; ++counter)
		{
			// The current platform we are checking against
			var platform = platformArray[counter];

			// Checks for the collision
			var platformCollision = checkCollision(bulletTop, bulletBottom, bulletLeft, bulletRight,
				world.yPosition + platform.yPosition, world.yPosition + platform.yPosition + platform.height,
				world.xPosition + platform.xPosition, world.xPosition + platform.xPosition + platform.width);
			//Bullet collided with a platform; remove bullet
			if (platformCollision != 0)
			{
				removalList.push(bullet);
				break;
			}
		}

		// Edges of the player	
		var playerTop = player.yPosition - player.imageHeight / 2;
		var playerBottom = player.yPosition + player.imageHeight / 2;
		var playerLeft = player.xPosition - player.imageWidth / 2;
		var playerRight = player.xPosition + player.imageWidth / 2;
		// Checks for collision with player
		var playerCollision = checkCollision(bulletTop, bulletBottom, bulletLeft, bulletRight, playerTop, playerBottom, playerLeft, playerRight);
		//Enemy bullet hit player; remove bullet and decrement health by 10
		if (playerCollision != 0)
		{
			if (bullet.origin == "bad")
			{
				player.health -= 10;
				removalList.push(bullet);
			}
			break;
		}

		// Loops through all the enemies
		for (var j = 0; j < enemies.length; ++j)
		{
			var enemy = enemies[j];

			// Edges of the enemy
			var enemyTop = world.yPosition + enemy.yPosition - enemy.height / 2;
			var enemyBottom = world.yPosition + enemy.yPosition + enemy.height / 2;
			var enemyLeft = world.xPosition + enemy.xPosition - enemy.width / 2;
			var enemyRight = world.xPosition + enemy.xPosition + enemy.width / 2;
			//Checks for bullet collision with enemy
			var enemyCollision = checkCollision(bulletTop, bulletBottom, bulletLeft, bulletRight, enemyTop, enemyBottom, enemyLeft, enemyRight);

			if (enemyCollision != 0)
			{
				if (bullet.origin == "good")
				{
					enemy.health -= 10;
					if (level.level3 && j == 0)
					{
						if (enemy.health <= 10)
						{
							boss.width = 350;
							boss.height = 350;
							boss.xPosition += 300;
							boss.image = loadImage("images/explosion.png");
							explosiondone = true;
						}
					}
					else if (!level.level3 || (level.level3 && j > 0))
					{
						if (enemy.shootDirection == "right")
						{
							if (enemy.health == 20)
							{
								enemy.image = loadImage("images/enemyright20.png");
							}
							if (enemy.health == 10)
							{
								enemy.image = loadImage("images/enemyright10.png");
							}
						}
						if (enemy.shootDirection == "left")
						{
							if (enemy.health == 20)
							{
								enemy.image = loadImage("images/enemyleft20.png");
							}
							if (enemy.health == 10)
							{
								enemy.image = loadImage("images/enemyleft10.png");
							}
						}
					}
					removalList.push(bullet);
					break;
				}
			}
		}


	}

	while (removalList.length != 0)
	{
		var bulletToRemove = removalList[0];

		for (var i = 0; i < bulletArray.length; ++i)
		{
			if (bulletToRemove == bulletArray[i])
			{
				bulletArray.splice(i, 1);
				removalList.splice(0, 1);
				break;
			}
		}
	}

}
// Checks for collision between two objects
// Returns 0 if the objects didn't touch
// Returns 1 if the first object's bottom side touched the other object
// Returns 2 if the first object's top side touched the other object
// Returns 3 if the first object's right side touched the other object
// Returns 4 if the first object's left side touched the other object

function checkCollision(top, bottom, left, right,
	otherTop, otherBottom, otherLeft, otherRight)
{
	var pixelBuffer = 5;

	if (top <= otherTop && bottom >= otherTop && ((right >= otherLeft + pixelBuffer && right <= otherRight - pixelBuffer) || (left <= otherRight - pixelBuffer && left >= otherLeft + pixelBuffer)))
	{
		// Bottom Collision
		return 1;
	}
	else if (top <= otherBottom && bottom > otherBottom && ((right >= otherLeft + pixelBuffer && right <= otherRight - pixelBuffer) || (left <= otherRight - pixelBuffer && left >= otherLeft + pixelBuffer)))
	{
		// Top Collision
		return 2;
	}
	else if (right >= otherLeft && left < otherLeft && top <= otherBottom && bottom >= otherTop)
	{
		// Right Collision
		return 3;
	}
	else if (right > otherRight && left <= otherRight && top <= otherBottom && bottom >= otherTop)
	{
		// Left Collision
		return 4;
	}

	// No Collision
	return 0;
}

// This function handles drawing images
function doGraphics()
{
	graphicLoader();
	//Check if you're dead or not
	checkPlayerHealth();

	//Check whether you're out of lives or not
	checkLives();

	isgameover();

	// Draw Background
	drawImage(backgroundImage, 0, 0, screenWidth, screenHeight);


	if ((level.storylevel || level.level1 || level.level2 || level.level3) && !level.gameover)
	{ //Any level
		if (explosiondone)
		{
			explosionTimer += deltaTime;
			if (explosionTimer > .2)
			{
				endExplosion(boss);
				coins.push(spacehoney);
				enemies.length = 0;
				bulletArray.length = 0;
				explosiondone = false;
				fanfareplay = true;
				playSound(fanfare);
			}
		}

		// Draw Platforms
		checkObjectiveStatus();
		for (var counter = 0; counter < platformArray.length; ++counter)
		{

			if (counter == 0)
			{
				var platform = platformArray[counter];
				fillRectangle(platform.xPosition, platform.yPosition, platform.width, platform.height, platform.color);
			}
			else
			{
				// Gets the current platform
				var platform = platformArray[counter];

				// Size of a single platform tile
				var tileSize = 100;
				// Number of tiles in the x
				var amtTilesHoriz = platform.width / tileSize;
				// Number of tiles in the y
				var amtTilesVert = platform.height / tileSize;
				// X position of the tile
				var x = world.xPosition + platform.xPosition;
				// Y position of the tile
				var y = world.yPosition + platform.yPosition;

				// Loop through x tiles
				for (var i = 0; i < amtTilesHoriz; i++)
				{
					// Loop through y tiles
					for (var j = 0; j < amtTilesVert; j++)
					{
						// Draw tile
						drawImage(platformImage, x, y, tileSize, tileSize);
						y += tileSize;
					}

					y = world.yPosition + platform.yPosition;
					x += tileSize;
				}
			}
		}

		if (level.level1 && finishaddlevel1)
		{
			drawImage(lvl1finishimage, world.xPosition + 5500, world.yPosition + 400, 600, 600);
		}

		// Update timer for coin animations
		coinTemplate.animationTimer += deltaTime;

		// Check if we should change the frame for the coin animation
		if (coinTemplate.animationTimer >= 1 / coinTemplate.spriteSheet.animations.IDLE.fps)
		{
			coinTemplate.animationTimer = 0;

			if (coinTemplate.frameCnt < coinTemplate.spriteSheet.animations.IDLE.numberOfFrames - 1)
			{
				++coinTemplate.frameCnt;
			}
			else
			{
				coinTemplate.frameCnt = 0;
			}
		}

		// Loop through all of the coins and draw them
		for (var counter = 0; counter < coins.length; ++counter)
		{
			// The current coin we need to draw
			var coin = coins[counter];

			// X position of the tile
			var x = coinTemplate.spriteSheet.cellWidth * coinTemplate.frameCnt;
			// Y position of the tile
			var y = 0;

			drawImage(coinTemplate.spriteSheet.image, world.xPosition + coin.xPosition, world.yPosition + coin.yPosition, coinTemplate.imageWidth,
				coinTemplate.imageHeight, x, y, coinTemplate.spriteSheet.cellWidth, coinTemplate.spriteSheet.cellHeight);
		}

		if (level.level3)
		{
			bossTimer += deltaTime;
			bossAttacks();
		}

		//Draw bullet
		for (var i = 0; i < bulletArray.length; ++i)
		{
			var bullet = bulletArray[i];
			fillRectangle(world.xPosition + bullet.xPosition, bullet.yPosition + 50, 20, 10, makeColor(1, .4, 0));
		}
		//Draw enemies
		checkEnemyHealth();
		for (var i = 0; i < enemies.length; ++i)
		{
			var enemy = enemies[i]
			drawImage(enemy.image, world.xPosition + enemy.xPosition, enemy.yPosition, enemy.width, enemy.height);

		}


		if (player.yPosition > 1250)
		{
			if (level.level1)
			{
				player.yPosition = 935;
			}
			if (level.level2)
			{
				player.yPosition = 1130;
			}
			if (level.level3)
			{
				player.yPosition = 1100;
			}
		}

		if (!lvl1playerset && level.level1)
		{
			player.yVelocity = 0;
			lvl1playerset = true;
		}
		if (!lvl2playerset && level.level2)
		{
			player.yVelocity = 0;
			lvl2playerset = true;
		}
		if (!lvl3playerset && level.level3)
		{
			player.yVelocity = 0;
			lvl3playerset = true;
		}


		// Draw Player
		// Update the animation timers
		player.animationTimer += deltaTime;

		// Some variables for drawing the correct cell of the sprite sheet
		var xStart = 0;
		var yStart = 0;
		var fps = 1;
		var frameCnt = 0;

		// Set our animation variables based on the current state
		if (player.currentState == player.states.RUNNING)
		{
			xStart = player.spriteSheet.animations.RUN.xStart;
			yStart = player.spriteSheet.animations.RUN.yStart;
			fps = player.spriteSheet.animations.RUN.fps;
			frameCnt = player.spriteSheet.animations.RUN.framesX;
		}
		else if (player.currentState == player.states.IDLE)
		{
			xStart = player.spriteSheet.animations.IDLE.xStart;
			yStart = player.spriteSheet.animations.IDLE.yStart;
			fps = player.spriteSheet.animations.IDLE.fps;
			frameCnt = player.spriteSheet.animations.IDLE.framesX;
		}

		// Changes the frame of the animation
		if (player.animationTimer >= 1 / fps)
		{
			player.animationTimer = 0;

			if (player.frameCnt < frameCnt - 1)
			{
				++player.frameCnt;
			}
			else
			{
				player.frameCnt = 0;
			}
		}

		// Current frame cell positions
		var x = xStart + player.spriteSheet.cellWidth * player.frameCnt;
		var y = 0;

		// Draws either the forward or reversed version of the current animation
		if (player.movingRight)
		{
			drawImage(player.spriteSheet.forwardImage, player.xPosition - player.imageWidth / 2, player.yPosition - player.imageHeight / 2, player.imageWidth, player.imageHeight, x, y, player.spriteSheet.cellWidth, player.spriteSheet.cellHeight);
		}
		else
		{
			drawImage(player.spriteSheet.reversedImage, player.xPosition - player.imageWidth / 2, player.yPosition - player.imageHeight / 2, player.imageWidth, player.imageHeight, x, y, player.spriteSheet.cellWidth, player.spriteSheet.cellHeight);
		}

		// Display amount of coins
		if (level.level1)
		{
			if (player.coinCounter < 25)
			{
				fillText("Coins Left:" + (25 - player.coinCounter), 300, 70, makeColor(1, 1, 1), "normal 35px pressstart", left, top);
			}
			else
			{
				fillText("Head for the entrance of the base!", 1000, 150, makeColor(1, 0, 0), "normal 35px pressstart", left, top);
			}
		}
		if (level.level2)
		{
			fillText("Coins:" + player.coinCounter, 200, 70, makeColor(1, 1, 1), "normal 35px pressstart", left, top);
		}

		// Display amount of enemies
		if (level.level1)
		{
			fillText("Enemies Killed:" + player.killCounter, 900, 70, makeColor(1, 1, 1), "normal 35px pressstart", left, top);
		}
		if (level.level2)
		{
			fillText("Enemies Left:" + (9 - player.killCounter), 700, 70, makeColor(1, 1, 1), "normal 35px pressstart", left, top);
		}


		// Display health of boss
		if (level.level3)
		{
			if (boss.health > 0)
			{
				fillText("Boss Health:" + (boss.health - 10), 300, 70, makeColor(1, 0, 0), "normal 35px pressstart", left, top);
			}
		}

		if (level.level1 || level.level2 || level.level3)
		{
			// Display amount of health
			fillText("Health:" + player.health, screenWidth - 200, 70, makeColor(1, 1, 1), "normal 35px pressstart", left, top);

			// Display lives left
			fillText("Lives:" + player.lives, screenWidth - 550, 70, makeColor(1, 1, 1), "normal 35px pressstart", left, top);
		}

		// // Draw touch buttons if on mobile
		if (isMobile)
		{
			drawTouchKeys();
		}
	}

}

////////////////////////////////////////////////
// End of Graphics, Physics, and Collisions ////
////////////////////////////////////////////////



////////////////////////////////////////////////
/////////////////    Input    //////////////////
////////////////////////////////////////////////

// This function is called as soon as the key is pushed down.
function onKeyStart(key)
{
	// Check if the up key was pressed and the player is grounded
	if (key == up && player.isGrounded)
	{
		player.isGrounded = false;
		// Make the player jump
		player.yVelocity -= player.jumpSpeed;
		input.up = true;
		playSound(jumpsound, false);
	}
	// Check if the right key was pressed
	else if (key == right)
	{
		// Make the player move right
		player.xVelocity = player.moveSpeed;
		input.right = true;
	}
	// Check if the left key was pressed
	else if (key == left)
	{
		// Make the player move left
		player.xVelocity = -player.moveSpeed;
		input.left = true;
	}
	// Check if the spacebar was pressed
	else if (key == shoot)
	{
		var bullet;

		if (player.movingRight)
		{
			bullet = new createBullet(player.xPosition - 10 - world.xPosition, player.yPosition - 45, "right", 950, "good");
			bulletArray.push(bullet);
		}
		else
		{
			bullet = new createBullet(player.xPosition + 10 - world.xPosition, player.yPosition - 45, "left", 950, "good");
			bulletArray.push(bullet);
		}
		input.shoot = true;
	}
}

// This function is called as soon as the key is released.
function onKeyEnd(key)
{
	// Check if the up key was released
	if (key == up)
	{
		input.up = false;
	}
	// Check if the right key was released
	else if (key == right)
	{
		input.right = false;
	}
	// Check if the left key was released
	else if (key == left)
	{
		input.left = false;
	}
	//  Check if the spacebar was released
	else if (key == shoot)
	{
		input.shoot = false;
	}

	// Check if the right key is still being held down
	if (input.right && !input.left)
	{
		// Move the player right
		player.xVelocity = player.moveSpeed;
	}
	// Check if the left key is still being held down
	else if (input.left && !input.right)
	{
		// Move the player left
		player.xVelocity = -player.moveSpeed;
	}
	// Check if neither left or right is being held down
	else if (!input.left && !input.right)
	{
		// Stop the player from moving left/right
		player.xVelocity = 0;
	}
}

////////////////////////////////////////////////
/////////////    End of Input    ///////////////
////////////////////////////////////////////////



////////////////////////////////////////////////
////////////    Helper Functions    ////////////
////////////////////////////////////////////////
function changeState(newState)
{
	if (newState != player.currentState)
	{
		player.frameCnt = 0;
		player.animationTimer = 0;

		player.currentState = newState;
	}
}

function checkObjectiveStatus()
{
	if (level.storylevel)
	{
		if (enemies.length == 1)
		{
			player.killCounter = 0;
			level.storylevel = false;
			level.prelevel1 = true;
		}
	}
	if (level.level1)
	{
		if (!finishaddlevel1 && player.coinCounter >= 25)
		{
			platformArray.push(finish);
			finishaddlevel1 = true;
		}
	}
	if (level.level2)
	{
		if (!enemieskilledlevel2 && player.killCounter > 8)
		{
			level.level2 = false;
			level.prelevel3 = true;
		}
	}
	if (level.level3)
	{
		if (player.coinCounter > 0)
		{
			level.level3 = false;
			level.credits = true;
		}
	}

}

function checkPlayerHealth()
{
	if (player.health <= 0)
	{
		alert("You died!");
		if (level.level1)
		{
			world.xPosition = 0;
			player.xPosition = 700;
			player.yPosition = 900;
			player.health = 30;
			player.lives--;
		}
		if (level.level2)
		{
			world.xPosition = 0;
			player.xPosition = 700;
			player.yPosition = 1100;
			player.health = 30;
			player.lives--;
		}
		if (level.level3)
		{
			world.xPosition = 0;
			player.xPosition = 700;
			player.yPosition = 1100;
			player.health = 50;
			player.lives--;
		}
	}
}

function checkLives()
{
	if (player.lives <= 0)
	{
		level.level1 = false;
		level.level2 = false;
		level.level3 = false;
		level.gameover = true;
	}
}

function isgameover()
{
	if (level.gameover)
	{
		backgroundImage = loadImage("images/gameover.png");
	}
}

function checkEnemyHealth()
{
	for (var i = 0; i < enemies.length; ++i)
	{
		var enemy = enemies[i];
		if (enemy.health <= 0)
		{
			player.killCounter++;
			enemies.splice(i, 1);
			break;
		}
	}
}

function graphicLoader()
{
	if (level.storylevel && !storylevelloaded)
	{
		backgroundImage = loadImage("images/storyScreen.png");

		platformArray.length = 0;
		coins.length = 0;
		enemies.length = 0;

		platformArray = platformArray.concat(prelevelplatformArray);
		enemies = enemies.concat(storylevelenemies);

		player.xPosition = 1000;
		player.yPosition = world.yPosition - 200;

		storylevelloaded = true;

	}
	if (level.prelevel1 && !prelevel1loaded)
	{
		prelevel1timer += deltaTime;


		backgroundImage = loadImage("images/level1intro.png");


		platformArray.length = 0;
		coins.length = 0;
		enemies.length = 0;
		platformArray = platformArray.concat(prelevelplatformArray);

		player.xPosition = 0;
		player.yPosition = world.yPosition - 200;

		if (prelevel1timer >= 10)
		{
			backgroundImage = loadImage("images/sky.png");
			level.prelevel1 = false;
			level.level1 = true;
			prelevel1loaded = true;
		}
	}
	if (level.level1 && !level1loaded)
	{
		platformArray.length = 0;
		coins.length = 0;
		enemies.length = 0;
		platformArray = platformArray.concat(platformArrayLevel1);
		coins = coins.concat(coinsLevel1);
		enemies = enemies.concat(enemiesLevel1);
		player.xPosition = 700;
		player.yPosition = 800;
		level1loaded = true;
	}
	if (level.prelevel2 && !prelevel2loaded)
	{
		prelevel2timer += deltaTime;

		backgroundImage = loadImage("images/level2intro.png");

		platformArray.length = 0;
		coins.length = 0;
		enemies.length = 0;
		platformArray = platformArray.concat(prelevelplatformArray);

		player.xPosition = 0;
		player.yPosition = world.yPosition - 200;

		if (prelevel2timer >= 5)
		{
			backgroundImage = loadImage("images/sky.png");
			level.prelevel2 = false;
			level.level2 = true;
			prelevel2loaded = true;
		}
	}
	if (level.level2 && !level2loaded)
	{
		platformArray.length = 0;
		coins.length = 0;
		enemies.length = 0;
		platformArray = platformArray.concat(platformArrayLevel2);
		coins = coins.concat(coinsLevel2);
		enemies = enemies.concat(enemiesLevel2);
		player.xPosition = 700;
		player.yPosition = 1100;
		level2loaded = true;
	}
	if (level.prelevel3 && !prelevel3loaded)
	{
		prelevel3timer += deltaTime;

		backgroundImage = loadImage("images/level3intro.png");

		platformArray.length = 0;
		coins.length = 0;
		enemies.length = 0;
		platformArray = platformArray.concat(prelevelplatformArray);

		player.xPosition = 0;
		player.yPosition = world.yPosition - 200;

		if (prelevel3timer >= 5)
		{
			backgroundImage = loadImage("images/sky.png");
			level.prelevel3 = false;
			level.level3 = true;
			prelevel3loaded = true;
		}
	}
	if (level.level3 && !level3loaded)
	{
		player.coinCounter = 0;

		coinTemplate = {
			// The width of the image
			imageWidth: 175,
			// The height of the image
			imageHeight: 175,
			// Used for switching frames in an animation
			animationTimer: 0,
			// Tracks which frame we are currently on
			frameCnt: 0,
			// The coin's sprite sheet
			spriteSheet:
			{
				// Coin sprites
				image: loadImage("images/spacehoney.png"),
				cellWidth: 50,
				cellHeight: 50,
				animations:
				{
					IDLE:
					{
						xStart: 0,
						yStart: 0,
						framesX: 1,
						framesY: 1,
						fps: 1,
						numberOfFrames: 1
					}
				}
			},
		}

		platformArray.length = 0;
		coins.length = 0;
		enemies.length = 0;
		platformArray = platformArray.concat(platformArrayLevel3);
		coins = coins.concat(coinsLevel3);
		enemies = enemies.concat(enemiesLevel3);
		player.lives = 3;
		player.health = 50;
		world.xPosition = 0;
		player.xPosition = 700;
		player.yPosition = 1135;
		level3loaded = true;
	}
	if (level.credits && !creditsloaded)
	{
		creditstimer += deltaTime;

		backgroundImage = loadImage("images/credits.png");

		platformArray.length = 0;
		coins.length = 0;
		enemies.length = 0;
		platformArray = platformArray.concat(prelevelplatformArray);

		player.xPosition = 0;
		player.yPosition = world.yPosition - 200;

		if (creditstimer >= 5)
		{
			location.reload();
		}
	}

}

function bossAttacks()
{
	//To prevent the boss from doing the same thing twice in a row
	var first = false;
	var second = false;
	var third = false;
	var fourth = false;


	if (bossTimer >= 4)
	{
		var rand = randomInteger(7, 100, Math.random);
		if (rand % 6 == 0 && !first) //Spawn first enemy
		{
			enemies.push(lvl3enemy1);

			first = true;
			second = false;
			third = false;
			fourth = false;



			bossTimer = 0;
		}
		if (rand % 6 == 1 && !second) //Spawn second enemy
		{

			enemies.push(lvl3enemy2);

			first = false;
			second = true;
			third = false;
			fourth = false;



			bossTimer = 0;
		}
		if (rand % 6 == 2 && !third) //Spawn third enemy
		{
			enemies.push(lvl3enemy3);

			first = false;
			second = false;
			third = true;
			fourth = false;



			bossTimer = 0;
		}
		if (rand % 6 == 3 && !fourth) //Spawn fourth enemy
		{
			enemies.push(lvl3enemy4);

			first = false;
			second = false;
			third = false;
			fourth = true;


			bossTimer = 0;
		}

	}
}

function endExplosion(boss)
{
	boss.health -= 10;
}

////////////////////////////////////////////////
/////////    End of Helper Functions    ////////
////////////////////////////////////////////////