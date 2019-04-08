//tidy up source

(function(){
	init();
	loadAssets();
	initObjects();
//   /$$           /$$   /$$    
//  |__/          |__/  | $$    
//   /$$ /$$$$$$$  /$$ /$$$$$$  
//  | $$| $$__  $$| $$|_  $$_/  
//  | $$| $$  \ $$| $$  | $$    
//  | $$| $$  | $$| $$  | $$ /$$
//  | $$| $$  | $$| $$  |  $$$$/
//  |__/|__/  |__/|__/   \___/  
// 
/*font-family: cooper-black-std, serif; 
font-weight: 400; 
font-style: normal; */

	function init(){
		canvas = document.getElementById("canvas");
		c = canvas.getContext("2d");
		canvas.width = 752;
		canvas.height = 420;
		screenWidth = canvas.width;
		screenHeight = canvas.height;
		halfWidth = screenWidth / 2;
		halfHeight = screenHeight / 2;
		offsetX = container.offsetLeft;
		offsetY = container.offsetTop;
		INPUT_TYPE = null;
		filesToLoad = 58;
		filesLoaded = 0;
		GAME_STATE = "loading";
		gameLoaded = false;
		gameLoop = setInterval(updateScreen,33);

		gameWindow = document.getElementById("container");

		easeValue = .25;
		tweenSpring = .1;tweenFriction = .8;
		targetSpring = .4;targetFriction = .8;

		soundMuted = false;

		isPotraitMode = false;

		chosenObject = 0;
		objectImage = 0;
		stressObjectRadius = 0;

		wrapString = "";
		soundStatus = "mute audio";

		userText = document.getElementById("stressText");
		userText.value = "";

		stressButton = document.getElementById("stressButton");
		stressButton.addEventListener("click", function(){
			changeState();
		})

		stressSource = "";
		transitionComplete = false;

		currentBackground = 1;
		activeButton = 0;

		bgMenuOpen = false;
		allowInput = true;
		gameEnd = false;

		bgGradient = c.createLinearGradient(0,0,screenWidth,screenHeight);
		bgGradient.addColorStop(0,"#4892FF");
		bgGradient.addColorStop(1,"#000D37");

		fireAnimationFrames = [];
		crumpleAnimFrames = [];
		activeLogoObjects = [];
		activeFadeObjects = [];
		activeTitleObjects = [];
		activeTitlePopups = [];
		activeStressFade = [];
		activePaperCrumple = [];
		activeGameplayObject = [];
		activeBGMenu = [];
		activeHealthMeter = [];
		activeAnimationFX = [];
		activeDentObjects = [];
		activeChunkObjects = [];
		activeHitterObject = [];
		activeDogObject = [];

		dogFrames = [
			20,45,20,40,15,35,20,45,
			340,320,345,320,340,305,
			20,45,20,40,15,35,20,55
		]

		tipString = "";
		randomTips = [
			"Take a ten minute break every hour when studying",
			"List five positive things in your life",
			"Go for a jog or walk outside ",
			"Take ten deep breathes",
			"Watch your favourite movie",
			"Chill with your friends",
			"Do something nice for someone else",
			"Avoid drugs and alcohol ",
			"Laugh and smile",
			"Take a power nap"
		]

	}//End of init

//   /$$                           /$$ /$$                    
//  | $$                          | $$|__/                    
//  | $$  /$$$$$$   /$$$$$$   /$$$$$$$ /$$ /$$$$$$$   /$$$$$$ 
//  | $$ /$$__  $$ |____  $$ /$$__  $$| $$| $$__  $$ /$$__  $$
//  | $$| $$  \ $$  /$$$$$$$| $$  | $$| $$| $$  \ $$| $$  \ $$
//  | $$| $$  | $$ /$$__  $$| $$  | $$| $$| $$  | $$| $$  | $$
//  | $$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$  | $$|  $$$$$$$
//  |__/ \______/  \_______/ \_______/|__/|__/  |__/ \____  $$
//                                                   /$$  \ $$
//                                                  |  $$$$$$/

	function loadAssets(){
		//----------     INIT IMAGES    ----------
		mymLogo = new Image();
		brickBG = new Image();
		roadBG = new Image();
		hockeyBG = new Image();
		stressText = new Image();
		meText = new Image();
		lessText = new Image();
		subheadText = new Image();
		startButton = new Image();
		pickText = new Image();
		anText = new Image();
		objectText = new Image();
		chooseBG = new Image();
		selectedBG = new Image();
		chooseBeachball = new Image();
		chooseBasketball = new Image();
		choosePaper = new Image();
		nameTextBG = new Image();
		okButton = new Image();
		basketballFull = new Image();
		beachballFull = new Image();
		paperFull = new Image();
		paperCrumple01 = new Image();
		paperCrumple02 = new Image();
		paperCrumple03 = new Image();
		paperCrumple04 = new Image();
		pickToolHdr = new Image();
		pickBGHdr = new Image();
		destructHdr = new Image();
		tractorBtn = new Image();
		hammerBtn = new Image();
		golfBtn = new Image();
		dogBtn = new Image();
		fireBtn = new Image();
		BGBtn = new Image();
		trashCan = new Image();
		destructBG = new Image();
		bgSelectGrad = new Image();
		bgSelectBrick = new Image();
		bgSelectRoad = new Image();
		bgSelectHockey = new Image();
		buttonSelected = new Image();
		hammer = new Image();
		golfClub = new Image();
		healthMeter = new Image();
		dent = new Image();
		redChunk = new Image();
		whiteChunk = new Image();
		burnMark = new Image();
		tireTracks = new Image();
		fireFrame_01 = new Image();
		fireFrame_02 = new Image();
		fireFrame_03 = new Image();
		fireFrame_04 = new Image();
		fireFrame_05 = new Image();
		fireFrame_06 = new Image();
		fireFrame_07 = new Image();
		doggie_01 = new Image();
		doggie_02 = new Image();
		copingText = new Image();
		tipText = new Image();
		tipBG = new Image();
		pdfIcon = new Image();
		endLinkBG = new Image();
		doAgainBtn = new Image();

		//----------     ADD LISTENERS     ----------
		mymLogo.onload = updateLoading();
		brickBG.onload = updateLoading();
		roadBG.onload = updateLoading();
		hockeyBG.onload = updateLoading();
		stressText.onload = updateLoading();
		meText.onload = updateLoading();
		lessText.onload = updateLoading();
		subheadText.onload = updateLoading();
		startButton.onload = updateLoading();
		pickText.onload = updateLoading();
		anText.onload = updateLoading();
		objectText.onload = updateLoading();
		chooseBG.onload = updateLoading();
		selectedBG.onload = updateLoading();
		chooseBeachball.onload = updateLoading();
		chooseBasketball.onload = updateLoading();
		choosePaper.onload = updateLoading();
		nameTextBG.onload = updateLoading();
		okButton.onload = updateLoading();
		basketballFull.onload = updateLoading();
		beachballFull.onload = updateLoading();
		paperFull.onload = updateLoading();
		paperCrumple01.onload = updateLoading();
		paperCrumple02.onload = updateLoading();
		paperCrumple03.onload = updateLoading();
		paperCrumple04.onload = updateLoading();
		pickToolHdr.onload = updateLoading();
		pickBGHdr.onload = updateLoading();
		destructHdr.onload = updateLoading();
		tractorBtn.onload = updateLoading();
		hammerBtn.onload = updateLoading();
		golfBtn.onload = updateLoading();
		dogBtn.onload = updateLoading();
		fireBtn.onload = updateLoading();
		BGBtn.onload = updateLoading();
		trashCan.onload = updateLoading();
		destructBG.onload = updateLoading();
		bgSelectGrad.onload = updateLoading();
		bgSelectBrick.onload = updateLoading();
		bgSelectRoad.onload = updateLoading();
		bgSelectHockey.onload = updateLoading();
		buttonSelected.onload = updateLoading();
		hammer.onload = updateLoading();
		golfClub.onload = updateLoading();
		healthMeter.onload = updateLoading();
		dent.onload = updateLoading();
		redChunk.onload = updateLoading();
		whiteChunk.onload = updateLoading();
		burnMark.onload = updateLoading();
		tireTracks.onload = updateLoading();
		fireFrame_01.onload = updateLoading();
		fireFrame_02.onload = updateLoading();
		fireFrame_03.onload = updateLoading();
		fireFrame_04.onload = updateLoading();
		fireFrame_05.onload = updateLoading();
		fireFrame_06.onload = updateLoading();
		fireFrame_07.onload = updateLoading();
		doggie_01.onload = updateLoading();
		doggie_02.onload = updateLoading();
		copingText.onload = updateLoading();
		tipText.onload = updateLoading();
		tipBG.onload = updateLoading();
		pdfIcon.onload = updateLoading();
		endLinkBG.onload = updateLoading();
		doAgainBtn.onload = updateLoading();

		//----------     SET SOURCES    ----------
		mymLogo.src = "images/mym_logo.png";
		brickBG.src = "images/brick_bg.jpg";
		roadBG.src = "images/road_bg.jpg";
		hockeyBG.src = "images/hockey_bg.jpg";
		stressText.src = "images/stress_text.png";
		meText.src = "images/me_text.png";
		lessText.src = "images/less_text.png";
		subheadText.src = "images/title_subheading.png";
		startButton.src = "images/start_button.png";
		pickText.src = "images/pick_text.png";
		anText.src = "images/an_text.png";
		objectText.src = "images/object_text.png";
		chooseBG.src = "images/choose_button_bg.png";
		selectedBG.src = "images/selected_button_bg.png";
		chooseBeachball.src = "images/choose_beachball.png";
		chooseBasketball.src = "images/choose_basketball.png";
		choosePaper.src = "images/choose_paper.png";
		nameTextBG.src = "images/name_text_bg.png";
		okButton.src = "images/ok_button.png";
		basketballFull.src = "images/basketball_full.png";
		beachballFull.src = "images/beachball_full.png";
		paperFull.src = "images/paper_full.png";
		paperCrumple01.src = "images/paper_crumple_01.png";
		paperCrumple02.src = "images/paper_crumple_02.png";
		paperCrumple03.src = "images/paper_crumple_03.png";
		paperCrumple04.src = "images/paper_crumple_04.png";
		pickToolHdr.src = "images/pick_tool_hdr.png";
		pickBGHdr.src = "images/pick_backdrop_hdr.png";
		destructHdr.src = "images/destruct_hdr.png";
		tractorBtn.src = "images/tractor_btn.png";
		hammerBtn.src = "images/hammer_btn.png";
		golfBtn.src = "images/golf_btn.png";
		dogBtn.src = "images/dog_btn.png";
		fireBtn.src = "images/fire_btn.png";
		BGBtn.src = "images/backdrop_btn.png";
		trashCan.src = "images/trash_can.png";
		destructBG.src = "images/destructo_bg.png";
		bgSelectGrad.src = "images/bg_select_grad.png";
		bgSelectBrick.src = "images/bg_select_brick.png";
		bgSelectRoad.src = "images/bg_select_road.png";
		bgSelectHockey.src = "images/bg_select_hcky.png";
		buttonSelected.src = "images/button_selected.png";
		hammer.src = "images/hammer.png";
		golfClub.src = "images/golf_club.png";
		healthMeter.src = "images/health_meter.png";
		dent.src = "images/dent.png";
		redChunk.src = "images/red_chunk.png";
		whiteChunk.src = "images/white_chunk.png";
		burnMark.src = "images/burn_mark.png";
		tireTracks.src = "images/tire_treads.png";
		fireFrame_01.src = "images/fire_frame_01.png";
		fireFrame_02.src = "images/fire_frame_02.png";
		fireFrame_03.src = "images/fire_frame_03.png";
		fireFrame_04.src = "images/fire_frame_04.png";
		fireFrame_05.src = "images/fire_frame_05.png";
		fireFrame_06.src = "images/fire_frame_06.png";
		fireFrame_07.src = "images/fire_frame_07.png";
		doggie_01.src = "images/doggie_01.png";
		doggie_02.src = "images/doggie_02.png";
		copingText.src = "images/coping_text.png";
		tipText.src = "images/tip_text.png";
		tipBG.src = "images/tip_bg.png";
		pdfIcon.src = "images/pdf_icon.png";
		endLinkBG.src = "images/end_links_bg.png";
		doAgainBtn.src = "images/do_again_btn.png";


		//SOUNDS

	    bloopSnd = new Howl({
	      src: ['sounds/bloop_sound.mp3'],
	      volume: 0.6
	    });

	    selectSnd = new Howl({
	      src: ['sounds/select_sound.mp3'],
	      volume: 0.6
	    });

	    swingSnd = new Howl({
	      src: ['sounds/swing_sound.mp3'],
	      volume: 0.6
	    });

	    hitSnd = new Howl({
	      src: ['sounds/hit_sound.mp3'],
	      volume: 0.7
	    });

	    tractorSnd = new Howl({
	      src: ['sounds/tractor_sound.mp3'],
	      volume: 0.6
	    });

	    fireSnd = new Howl({
	      src: ['sounds/fire_sound.mp3'],
	      volume: 0.7
	    });

	    growlSnd = new Howl({
	      src: ['sounds/growl_sound.mp3'],
	      volume: 0.75
	    });

	    dogSnd = new Howl({
	      src: ['sounds/dog_sound.mp3'],
	      volume: 0.7
	    });
	}//End of loadAssets

	//************************************
	//******     UPDATE LOADING     ******
	//************************************
	function updateLoading(){
		filesLoaded++;
		loadingProgress = filesLoaded / filesToLoad;
		if(!gameLoaded){
			if(filesLoaded >= filesToLoad){
				gameLoaded = true;
				if(INPUT_TYPE){
					addListeners();
				}else{
					container.addEventListener("touchstart",onTouch);
					container.addEventListener("mousedown",onTouch);
				}
			}
		}
	}

//             /$$                                 /$$             
//            | $$                                | $$             
//    /$$$$$$ | $$$$$$$  /$$  /$$$$$$   /$$$$$$$ /$$$$$$   /$$$$$$$
//   /$$__  $$| $$__  $$|__/ /$$__  $$ /$$_____/|_  $$_/  /$$_____/
//  | $$  \ $$| $$  \ $$ /$$| $$$$$$$$| $$        | $$   |  $$$$$$ 
//  | $$  | $$| $$  | $$| $$| $$_____/| $$        | $$ /$$\____  $$
//  |  $$$$$$/| $$$$$$$/| $$|  $$$$$$$|  $$$$$$$  |  $$$$//$$$$$$$/
//   \______/ |_______/ | $$ \_______/ \_______/   \___/ |_______/ 
//                 /$$  | $$                                       
//                |  $$$$$$/                                       
//                 \______/           
	function initObjects(){


		healthMeterObject = function(){
			var that = this;
			that.x = 695;
			that.y = 144;
			that.height = healthMeter.height;
			that.width = healthMeter.width;
			that.yOffset = 0;
			that.yDrawHeight = 0;
			that.health = 1;

			that.deduct = function(amt){
				that.health -= amt;
				if(that.health <= 0){
					gameEnd = true;
				}
			}

			that.update = function(){
				that.yOffset = that.height - Math.floor(that.height * that.health);
				that.yDrawHeight = Math.floor(that.height * that.health)

				c.drawImage(healthMeter,

					0,that.yOffset,
					that.width,that.height,
					that.x,that.y + that.yOffset,
					that.width,that.height
				);
			}
		}//end of health meter object


		dogObject = function(startX, startY, targX, targY){
			var that = this;
			that.active = true;
			that.x = startX;
			that.y = startY;
			that.targX = targX;
			that.targY = targY;
			that.angle = 55;
			that.update = function(){
				if(that.active === true){
					var dx = that.targX - that.x;
					var dy = that.targY - that.y;
					var velx = Math.ceil(dx*easeValue);
					var vely = Math.ceil(dy*easeValue);
					that.x += velx;
					that.y += vely;
					if(dx < 0){dx *= -1};
					if(dy < 0){dy *= -1};
					if(dx < 4 && dy < 4){
						that.x = that.targX;
						that.y = that.targY;
						that.active = false;
					}
				}

				c.save();
					c.translate(that.x,that.y);
					c.rotate(that.angle * Math.PI / 180);
					c.drawImage(doggie_01,0,0);
				c.restore();
			}

		}


		hitObject = function(xPos, yPos, type){
			var that = this;
			that.x = xPos;
			that.y = yPos;
			that.type = type;

			if(that.type === "hammer"){
				that.image = hammer;
				that.offsetX = -200;
				that.offsetY = -80;
				that.angle = 0;
			}else{
				that.image = golfClub;
				that.offsetX = -200;
				that.offsetY = -60;
				that.angle = -40;
			}
			that.active = true;
			that.centerX = that.image.width / 2;
			that.centerY = that.image.height / 2;
			that.alpha = 1;
			var currentTime = new Date().getTime();
			that.nextUpdate = currentTime + 90;
			that.fadeStart = currentTime + 300;
			that.life = currentTime + 750;

			that.update = function(){
				var currentTime = new Date().getTime();
				if(currentTime >= that.life){
					that.active = false;
				}else{
					if(currentTime >= that.nextUpdate){
						if(that.type === "hammer"){
							that.angle = 60;
							that.offsetX = -160;
							that.offsetY = -10;
						}else{
							that.angle = 55;
							that.offsetX = -140;
							that.offsetY = 20;	
						}

					}
					if(currentTime >= that.fadeStart){
						that.alpha -= 0.25;
						if(that.alpha < 0){
							that.alpha = 0;
							that.active = false;
						}
					}
					c.save();
						c.translate(that.x + that.centerX,that.y + that.centerY);
						c.rotate(that.angle * Math.PI / 180);
						c.globalAlpha = that.alpha;
						c.drawImage(that.image,that.offsetX,that.offsetY);
					c.restore();
				}
			}
		}//End of hammer object

		chunkObject = function(xPos,yPos){
			var that = this;
			that.x = xPos;
			that.y = yPos;
			that.active = true;
			that.xSpeed = Math.floor(Math.random() * 40) - 20;
			that.ySpeed = (Math.floor(Math.random() * 13) + 8) * -1;
			-13;
			if(chosenObject === 2){
				that.image = redChunk;
			}else{
				that.image = whiteChunk;
			}

			that.update = function(){
				if(that.active === true){
					that.x += that.xSpeed;
					that.y += that.ySpeed;
					if(that.y > screenHeight){
						that.active = false;
					}else{
						that.ySpeed += 3;
					}
					c.drawImage(that.image,that.x,that.y);
				}
			}
		}

		dentObject = function(xPos,yPos){
			var that = this;
			that.x = xPos - 16;
			that.y = yPos - 35;
			that.active = true;
			that.alpha = 1;

			that.update = function(){
				if(that.active === true){
					that.alpha -= 0.08;
					if(that.alpha < 0){
						that.alpha = 0;
					}
					c.save()
						c.globalAlpha = that.alpha;
						c.drawImage(dent,that.x,that.y);
					c.restore();
				}
			}
		}//end of dent object

		tractorObject = function(){
			var that = this;
			that.active = true;
			that.drawOn = 0;
			that.x = halfWidth;
			that.y = halfHeight;
			that.height = tireTracks.height;
			that.width = tireTracks.width;
			that.centerX = that.width/2;
			that.centerY = that.height/2;
			that.angle = 180 + (Math.floor(Math.random() * 90) -45);
			that.fadeOut = false;
			that.alpha = 1;
			that.fadeTimer = 0;

			that.update = function(){
				if(that.active === true){
					that.drawOn += 15;
					if(that.drawOn >= that.height){
						that.drawOn = that.height;
						if(that.fadeOut === false){
							that.fadeOut = true;
							that.fadeTimer = new Date().getTime() + 450;
						}
					}

					if(that.fadeOut === true){
						var currentTime = new Date().getTime();
						if(currentTime >= that.fadeTimer){
							that.alpha -= 0.04;
							if(that.alpha <= 0){
								that.alpha = 0;
								that.active = false;
							}
						}
					}

					c.save();
						c.translate(that.x,that.y);
						c.rotate(that.angle * Math.PI / 180);
						c.globalCompositeOperation = "overlay";
						c.globalAlpha = that.alpha;
						c.drawImage(tireTracks,
							0,that.height-that.drawOn,
							that.width,that.drawOn,
							-that.centerX,-that.centerY,
							that.width,that.drawOn
							);
					c.restore();

				}
			}
		}//End of tractor object

		fireObject = function(){
			var that = this;
			that.active = true;
			that.frame = 0;
			var currentTime = new Date().getTime();
			that.nextFrame = currentTime + 42;
			that.life = currentTime + 4500;
			that.fadeStart = currentTime + 3300;
			that.fading = true;
			that.alpha = 0;
			that.targetAlpha = 1;
			that.alphaStep = .03;

			that.update = function(){
				var currentTime = new Date().getTime();

				if(currentTime >= that.life){
					that.active = false;
				}else{
					if(currentTime >= that.nextFrame){
						that.frame++;
						if(that.frame > 6){
							that.frame = 0
						}
						that.nextFrame = currentTime + 42;
					}

					if(that.fading === false){
						if(currentTime >= that.fadeStart){
							that.fading = true;
							that.targetAlpha = 0;
							that.alphaStep = -0.03;
						}
					}

					if(that.fading === true){
						that.alpha += that.alphaStep;
						if(that.alpha > 1){
							that.alpha = 1;
							that.fading = false;
						}
						if(that.alpha < 0){
							that.alpha = 0;
						}
					}

					c.save()
						c.globalAlpha = that.alpha;
						c.drawImage(fireAnimationFrames[that.frame],0,0);
					c.restore();

				}
			}
		}//End of fire animation effect

		bgMenuObject = function(image,xpos,ypos,xtarg,ytarg){
			var that = this;
			that.active = true;
			that.image = image;
			that.x = xpos;
			that.y = ypos;
			that.targX = xtarg;
			that.targY = ytarg;

			that.update = function(){
				if(that.active === true){
					var dx = that.targX - that.x;
					var dy = that.targY - that.y;
					var velx = Math.ceil(dx*easeValue);
					var vely = Math.ceil(dy*easeValue);
					that.x += velx;
					that.y += vely;
					if(dx < 0){dx *= -1};
					if(dy < 0){dy *= -1};
					if(dx < 4 && dy < 4){
						that.x = that.targX;
						that.y = that.targY;
						that.active = false;
					}
				}
				c.drawImage(BGBtn,that.x,that.y)
				c.drawImage(that.image,that.x - 8,that.y);
			}
		}//End of bg menu object

		gameplayStressObject = function(){
			var that = this;
			switch(chosenObject){
				case 1:
					that.image = beachballFull;
					break;
				case 2:
					that.image = basketballFull;
					break;
				case 3:
					that.image = paperFull;
					break
			}
			that.width = that.image.width;
			that.height = that.image.height;
			that.xPos = halfWidth - (that.width / 2);
			that.yPos = halfHeight - (that.height / 2);
			that.currentAnimation = "static";
			that.animDuration = 0;
			that.nextUpdate = 0;
			that.offsetX = 0;
			that.offsetY = 0;
			that.currentFrame = 0;
			/*that.nextFrame = 0;*/
			that.releaseChunks = false;
			that.shakeDamage = false;
			that.shakeDamageAmount = 0;
			that.nextChunk = 0;
			that.angle = 0;

			//----------     UPDATE     ----------
			that.update = function(){

				if(that.currentAnimation === "shake"){
					that.offsetX = Math.floor(Math.random() * 20) - 10;
					that.offsetY = Math.floor(Math.random() * 20) - 10;
					if(that.shakeDamage === true){
						activeHealthMeter[0].deduct(that.shakeDamageAmount);
					}
					var currentTime = new Date().getTime();
					if(currentTime >= that.animDuration){
						that.offsetX = 0;
						that.offsetY = 0;
						that.currentAnimation = "static";
						that.releaseChunks = false;
						that.shakeDamage = false;
						checkGameEnd();
					}
					if(that.releaseChunks === true){
						if(currentTime >= that.nextChunk){
							var randX = Math.floor(Math.random() * 160) - 80;
							var randY = Math.floor(Math.random() * 120) - 80;
							activeChunkObjects[activeChunkObjects.length] = new chunkObject(halfWidth + randX,halfHeight + randY);
							that.nextChunk = currentTime + Math.floor(Math.random() * 250) + 200;
						}
					}
				}

				if(activeButton === 5 && that.currentAnimation === "dog"){

					var currentTime = new Date().getTime();
					if(currentTime >= that.nextUpdate){
						that.currentFrame++;
						if(that.currentFrame > dogFrames.length){
							that.currentFrame = 0;
							that.currentAnimation = "none";
							activeButton = 0;
							allowInput = true;
							that.angle = 0;
							activeDogObject[0] = new dogObject(551,-34,340,80);
							setTimeout(function(){
								activeDogObject = [];
								checkGameEnd();
							},500);
						}else{
							that.angle = dogFrames[that.currentFrame];
							that.nextUpdate = currentTime + 82;
							activeHealthMeter[0].deduct(0.01);
						}	
					}

					if(that.releaseChunks === true){
						if(currentTime >= that.nextChunk){
							var randX = Math.floor(Math.random() * 160) - 80;
							var randY = Math.floor(Math.random() * 120) - 80;
							activeChunkObjects[activeChunkObjects.length] = new chunkObject(halfWidth + randX,halfHeight + randY);
							that.nextChunk = currentTime + Math.floor(Math.random() * 250) + 200;
						}
					}

					c.save();
						c.translate(halfWidth,halfHeight);
						c.rotate(that.angle * Math.PI / 180);
						
						c.drawImage(that.image,-188,-188);
						c.drawImage(doggie_02,-112,-270);
					c.restore();

				}else{
					c.drawImage(that.image,
						that.xPos + that.offsetX,
						that.yPos + that.offsetY
						);	
				}

				if(activeButton === 6 && that.currentAnimation === "shake"){
					c.drawImage(burnMark,
						that.xPos + 60 + that.offsetX,
						that.yPos + 180 + that.offsetY
						);
				}
			}
		}//End of gameplay stress object

		paperCrumpleAnim = function(){
			var that = this;
			that.currentFrame = 0;
			that.width = crumpleAnimFrames[0].width;
			that.height = crumpleAnimFrames[0].height;
			var currentTime = new Date().getTime();
			that.nextUpdate = currentTime + 150;

			//----------     UPDATE     ----------
			that.update = function(){
				var currentTime = new Date().getTime();

				if(currentTime >= that.nextUpdate){
					if(that.currentFrame < 4){
						that.currentFrame++;
						that.nextUpdate = currentTime + 150;
						that.width = crumpleAnimFrames[that.currentFrame].width;
						that.height = crumpleAnimFrames[that.currentFrame].height;
					}else{
						changeState();
					}
				}

				c.drawImage(crumpleAnimFrames[that.currentFrame],
					halfWidth - (that.width / 2),
					halfHeight - (that.height / 2)
					);
			}
		}//End of paper crumple anim

		screenFade = function(startAlpha,targetAlpha,fadeColor){
			//----------     INIT     ----------
			var that = this;
			that.alpha = startAlpha;
			that.targetAlpha = targetAlpha;
			that.color = fadeColor;
			that.active = true;

			//----------     UPDATE     ----------
			that.update = function(){
				if(that.active == true){
					if(that.alpha > that.targetAlpha){
						that.alpha -= .05;
						if(that.alpha <= that.targetAlpha){
							that.alpha = that.targetAlpha;
							that.active = false;
						}
					}else{
						that.alpha += .05;
						if(that.alpha >= that.targetAlpha){
							that.alpha = that.targetAlpha;
						}
					}
					c.fillStyle = that.color;
					c.save()
						c.globalAlpha = that.alpha;
						c.fillRect(0,0,screenWidth,screenHeight);
					c.restore();
				}
			}
		}//End of screenfade

		stressTextFade = function(startAlpha, targetAlpha){
			//----------     INIT     ----------
			var that = this;
			that.alpha = startAlpha;
			that.targetAlpha = targetAlpha;
			that.active = true;

			//----------     UPDATE     ----------
			that.update = function(){
				if(that.active == true){
					if(that.alpha > that.targetAlpha){
						that.alpha -= .05;
						if(that.alpha <= that.targetAlpha){
							that.alpha = that.targetAlpha;
							that.active = false;
						}
					}else{
						that.alpha += .05;
						if(that.alpha >= that.targetAlpha){
							that.alpha = that.targetAlpha;
						}
					}

					c.font = "32px cooper-black-std, serif";
					c.textAlign = "center";

					c.save()
						c.globalAlpha = that.alpha;
						c.fillStyle = "#000";
						c.fillText(stressSource,halfWidth+3,halfHeight+3);
						c.fillStyle = "#FFF";
						c.fillText(stressSource,halfWidth,halfHeight);
					c.restore();
				}
			}
		}//End of stress text fade

		logoPopUp = function(srcImage){
			var that = this;
			that.image = srcImage;
			that.scale = .05;
			that.scaleTarget = 1;
			that.width = that.image.width;
			that.height = that.image.height;
			that.x = halfWidth;
			that.y = halfHeight;
			that.timer;
			that.delay = 1200;
			that.active = true;
			that.update = function(){
				if(that.scaleTarget === 1 && that.scale < 1){
					that.scale += 0.15;
					if(that.scale >= 1){
						that.scale = 1;
						that.timer = new Date().getTime();
					}
				}else if(that.scaleTarget === 0 && that.scale > 0){
					that.scale -= 0.15;
					if(that.scale <= 0){
						that.scale = 0;
						that.active = false;
					}
				}else{
					var timerCheck = new Date().getTime();
					if(timerCheck >= that.timer + that.delay){
						that.scaleTarget = 0;
					}
				}
				c.save();
					var drawPositionX = Math.floor(-(that.width * that.scale) / 2);
					var drawPositionY = Math.floor(-(that.height * that.scale) / 2);
					c.translate(that.x + drawPositionX,that.y + drawPositionY);
					c.scale(that.scale,that.scale);
					c.drawImage(that.image,0,0);
				c.restore();
			}
		}//End of logo pop up

		titleObject = function(image,xpos,ypos,xtarg,ytarg){
			var that = this;
			that.active = true;
			that.image = image;
			that.x = xpos;
			that.y = ypos;
			that.targX = xtarg;
			that.targY = ytarg;

			that.update = function(){
				if(that.active === true){
					var dx = that.targX - that.x;
					var dy = that.targY - that.y;
					var velx = Math.ceil(dx*easeValue);
					var vely = Math.ceil(dy*easeValue);
					that.x += velx;
					that.y += vely;
					if(dx < 0){dx *= -1};
					if(dy < 0){dy *= -1};
					if(dx < 4 && dy < 4){
						that.x = that.targX;
						that.y = that.targY;
						that.active = false;
					}
				}
				c.drawImage(that.image,that.x,that.y);
			}
		}//End of title object

		titlePopUp = function(srcImage,xPos,yPos){
			var that = this;
			that.image = srcImage;
			that.x = xPos;
			that.y = yPos;
			that.scale = .2;
			that.scaleTarget = 1;
			that.scaleVel = 0;
			that.width = that.image.width;
			that.height = that.image.height;
			that.timer = new Date().getTime(), 
			that.life = 1200;
			that.active = true;
			that.update = function(){
				var timerCheck = new Date().getTime();
				if(timerCheck >= that.timer + that.life){
					that.active = false;
				}else{
					var distance = that.scaleTarget - that.scale;
					var accel = distance * targetSpring;
					that.scaleVel += accel;
					that.scaleVel *= targetFriction;
					that.scale += that.scaleVel;
				}
				if(that.active == true){
					c.save();
						var drawPositionX = Math.floor(-(that.width * that.scale) / 2);
						var drawPositionY = Math.floor(-(that.height * that.scale) / 2);
						c.translate(that.x + drawPositionX,that.y + drawPositionY);
						c.scale(that.scale,that.scale);
						c.drawImage(that.image,0,0);
					c.restore();
				}else{
					c.drawImage(that.image,that.x - that.width/2,that.y - that.height/2);
				}
			}
		}//End of title popup
	}//End of initObjects

//                             /$$             /$$              
//                            | $$            | $$              
//   /$$   /$$  /$$$$$$   /$$$$$$$  /$$$$$$  /$$$$$$    /$$$$$$ 
//  | $$  | $$ /$$__  $$ /$$__  $$ |____  $$|_  $$_/   /$$__  $$
//  | $$  | $$| $$  \ $$| $$  | $$  /$$$$$$$  | $$    | $$$$$$$$
//  | $$  | $$| $$  | $$| $$  | $$ /$$__  $$  | $$ /$$| $$_____/
//  |  $$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$  |  $$$$/|  $$$$$$$
//   \______/ | $$____/  \_______/ \_______/   \___/   \_______/
//            | $$                                              
//            | $$                                              
//            |__/      

	function updateScreen(){
		//----------     LOADING SCREEN     ---------
		if(GAME_STATE === "loading"){
			c.fillStyle = "#FFF";
			c.fillRect(0,0,screenWidth,screenHeight)
			c.fillStyle = "#347BB9";
			c.textAlign = "center";
			c.font = "italic 42px arial, sans-serif";
			if(gameLoaded == false){
				c.fillText("loading...",halfWidth,halfHeight);
			}else{
				c.fillText("Tap to Start",halfWidth,halfHeight);
			}
		}

		//----------     LOGOS SCREEN     ---------
		if(GAME_STATE === "logos"){
			c.fillStyle = "#FFF";
			c.fillRect(0,0,screenWidth,screenHeight)
			activeLogoObjects.forEach(function(logoPopUp,index){
				logoPopUp.update();
				if(logoPopUp.active === false){
					activeLogoObjects.splice(index,1);
				}
			});
		}

		if(GAME_STATE === "title"){
			c.drawImage(brickBG,0,0);

			c.font = "20px cooper-black-std, serif";
			c.textAlign = "center";
			wrapString = "The goal of the game is to destroy your stress beyond repair. Watch your Destruc-o-meter to keep track of the stress you have worked off.";


			c.fillStyle = "#000";
			c.fillText(soundStatus,71,34);
			wrapText(c, 
					wrapString,
					halfWidth+3,328,
					440,22
					);


			c.fillStyle = "#FFF";
			c.fillText(soundStatus,68,30);
			wrapText(c,
					wrapString,
					halfWidth,325,
					440,22
					);

			activeTitleObjects.forEach(function(titleObject,index){
				titleObject.update();
			});

			activeTitlePopups.forEach(function(titlePopup,index){
				titlePopup.update();
			});

			activeFadeObjects.forEach(function(fadeObject,index){
				fadeObject.update();
			});
		}



		if(GAME_STATE === "stressname"){

			c.drawImage(brickBG,0,0);

			c.fillStyle = "#000";
			c.fillText("What stresses you out?",halfWidth+3,111);


			c.fillStyle = "#FFF";
			c.fillText("What stresses you out?",halfWidth,110);


			activeTitleObjects.forEach(function(titleObject,index){
				titleObject.update();
			});


		}


		if(GAME_STATE === "select"){
			c.drawImage(brickBG,0,0);

			c.font = "20px cooper-black-std, serif";
			c.textAlign = "center";
			wrapString = "";
			wrapString = "Select the object to represent your stress and then type in what is stressing you out. Click OK to begin.";



			c.fillStyle = "#000";
			wrapText(c, 
					wrapString,
					halfWidth+3,108,
					585,20
					);


			c.fillStyle = "#FFF";
			wrapText(c,
					wrapString,
					halfWidth,105,
					585,20
					);

			activeTitleObjects.forEach(function(titleObject,index){
				titleObject.update();
			});

			switch(chosenObject){
				case 1:
					c.drawImage(selectedBG,98,128);
					break;
				case 2:
					c.drawImage(selectedBG,283,128);
					break;
				case 3:
					c.drawImage(selectedBG,469,128);
					break;
			}

			activeTitlePopups.forEach(function(titlePopup,index){
				titlePopup.update();
			});

			activeFadeObjects.forEach(function(fadeObject,index){
				fadeObject.update();
			});
		}

		if(GAME_STATE === "transition"){


			c.fillStyle = bgGradient;
			c.fillRect(0,0,screenWidth,screenHeight);

			activeTitlePopups.forEach(function(titlePopup,index){
				titlePopup.update();
			});

			if(activePaperCrumple[0]){
				activePaperCrumple[0].update();
			}

			activeStressFade.forEach(function(stressFade,index){
				stressFade.update();
			});

			activeFadeObjects.forEach(function(fadeObject,index){
				fadeObject.update();
			});			
		}

		if(GAME_STATE === "gameplay"){

			switch(currentBackground){
				case 1:
					c.fillStyle = bgGradient;
					c.fillRect(0,0,screenWidth,screenHeight);
					break;
				case 2:
					c.drawImage(brickBG,0,0);
					break;
				case 3:
					c.drawImage(roadBG,0,0);
					break;
				case 4:
					c.drawImage(hockeyBG,0,0);
					break;
			}

			
			if(activeButton === 3 || activeButton === 4){
				c.font = "20px cooper-black-std, serif";
				c.textAlign = "center";
				c.fillStyle = "#FFF";
				if(INPUT_TYPE === "mouse"){
					c.fillText("Click to hit!", halfWidth, 400);
				}else{
					c.fillText("Tap to hit!", halfWidth, 400);
				}
			}

			if(activeDogObject[0]){
				activeDogObject[0].update();
			}

			activeGameplayObject[0].update();

			if(activeAnimationFX[0]){
				if(activeAnimationFX[0].active === true){
					activeAnimationFX[0].update();
				}else{
					activeButton = 0;
					allowInput = true;
					activeAnimationFX = [];
				}
			}

			activeDentObjects.forEach(function(dentObject,index){
				if(dentObject.active === true){
					dentObject.update();
				}else{
					activeDentObjects.splice(index,1);
				}
			})

			if(activeHitterObject[0]){
				activeHitterObject[0].update();
			}

			activeChunkObjects.forEach(function(chunkObject,index){
				if(chunkObject.active === true){
					chunkObject.update();
				}else{
					activeChunkObjects.splice(index,1);
				}
			})

			activeTitleObjects.forEach(function(titleObject,index){
				titleObject.update();
			});

			if(activeHealthMeter[0]){
				activeHealthMeter[0].update();
			}
			
			if(activeButton > 0){
				switch(activeButton){
					case 1:
						c.drawImage(buttonSelected,650,27);
						break;
					case 2:
						c.drawImage(buttonSelected,-4,36);
						break;
					case 3:
						c.drawImage(buttonSelected,-4,103);
						break;
					case 4:
						c.drawImage(buttonSelected,-4,172);
						break;
					case 5:
						c.drawImage(buttonSelected,-4,241);
						break;
					case 6:
						c.drawImage(buttonSelected,-4,311);
						break;
				}

			}

			if(bgMenuOpen === true){
				activeBGMenu.forEach(function(menuObject,index){
					menuObject.update();
				});
			}

			if(transitionComplete === true){
				switch(currentBackground){
					case 1:
						c.drawImage(bgSelectGrad,650,37);
						break;
					case 2:
						c.drawImage(bgSelectBrick,650,37);
						break;
					case 3:
						c.drawImage(bgSelectRoad,650,37);
						break;
					case 4:
						c.drawImage(bgSelectHockey,650,37);
						break;
				}
			}

			activeFadeObjects.forEach(function(fadeObject,index){
				fadeObject.update();
			});	
		}


		if(GAME_STATE === "endscreen"){
			c.drawImage(brickBG,0,0);


			c.drawImage(pdfIcon,220,175);
			c.drawImage(endLinkBG,240,185);

			c.drawImage(endLinkBG,240,302);

			c.font = "20px cooper-black-std, serif";
			c.textAlign = "center";

			c.fillStyle = "#000";
			c.fillText("If you're feeling stressed...",halfWidth+3,109);

		
			wrapText(c, 
					"If you still find yourself struggling with an issue, consider talking with a professional.",
					halfWidth+3,270,
					592,20
					);


			c.fillStyle = "#FFF";
			c.fillText("If you're feeling stressed...",halfWidth,106);
			wrapText(c,
					"If you still find yourself struggling with an issue, consider talking with a professional.",
					halfWidth,268,
					592,20
					);


			activeTitleObjects.forEach(function(titleObject,index){
				titleObject.update();
			});
			activeTitlePopups.forEach(function(titlePopup,index){
				titlePopup.update();
			});

			


			c.font = "18px cooper-black-std, serif";
			c.fillText(tipString,halfWidth,142);

			c.fillText("Find more tips here!",halfWidth,213);
			c.fillText("Find one here",halfWidth,330);


			activeFadeObjects.forEach(function(fadeObject,index){
				fadeObject.update();
			});		
		}
	}

//               /$$                 /$$              
//              | $$                | $$              
//    /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$ 
//   /$$_____/|_  $$_/   |____  $$|_  $$_/   /$$__  $$
//  |  $$$$$$   | $$      /$$$$$$$  | $$    | $$$$$$$$
//   \____  $$  | $$ /$$ /$$__  $$  | $$ /$$| $$_____/
//   /$$$$$$$/  |  $$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$
//  |_______/    \___/   \_______/   \___/   \_______/
//  
	function changeState(){
		resetScene();
		switch(GAME_STATE){
			case "loading":
				activeLogoObjects[activeLogoObjects.length] = new logoPopUp(mymLogo);
				setTimeout(changeState,2000);
				GAME_STATE = "logos";
/*				if(INPUT_TYPE === "touch"){
					toggleFullScreen();
				}*/
				
				break;
			case "logos":
				activeFadeObjects[activeLogoObjects.length] = new screenFade(1,0,"#FFF");
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(stressText,225,-200,225,-3);
				},450);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(meText,285,screenHeight + 100,285,85);
				},350);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(lessText,256,screenHeight + 100,256,135);
				},550);

				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(subheadText,screenWidth + 100,245,170,245);
				},750);			

				setTimeout(function(){
					activeTitlePopups[activeTitlePopups.length] = new titlePopUp(startButton,675,347);
				},1500);	

				GAME_STATE = "title";
				break;

			case "title":


				stressButton.style.display = "block";

				userText.style.display = "block";
/*				userText.addEventListener("keydown",function(e){
					if(e.keyCode === 13){
						console.log('enter');
						e.preventDefault();
						userText.blur();
						addListeners();
						return false;
					}
				})*/

				removeListeners();

				/*GAME_STATE = "select"*/
				GAME_STATE = "stressname";
				break;

			case "stressname":
				addListeners();
				stressButton.style.display = "none";
				userText.style.display = "none";
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(pickText,screenWidth,6,6,6);
				},50);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(anText,screenWidth,22,136,22);
				},200);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(objectText,screenWidth,-5,211,-5);
				},350);

				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(chooseBG,98,screenHeight,98,128);
				},350);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(chooseBG,283,screenHeight,283,128);
				},550);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(chooseBG,469,screenHeight,469,128);
				},750);

/*				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(nameTextBG,screenWidth,174,235,174);
				},950);*/

				setTimeout(function(){
					activeTitlePopups[activeTitlePopups.length] = new titlePopUp(chooseBeachball,184,217);
						if(soundMuted===false){
						bloopSnd.play();
					}
				},1200);
				setTimeout(function(){
					activeTitlePopups[activeTitlePopups.length] = new titlePopUp(chooseBasketball,374,217);
					if(soundMuted===false){
						bloopSnd.play();
					}
				},1350);
				setTimeout(function(){
					activeTitlePopups[activeTitlePopups.length] = new titlePopUp(choosePaper,559,217);
					if(soundMuted===false){
						bloopSnd.play();
					}
				},1500);

				GAME_STATE = "select"
				break;

			case "select":
				resetScene();
				activeFadeObjects[activeLogoObjects.length] = new screenFade(1,0,"#FFF");

				switch(chosenObject){
					case 1:
						objectImage = beachballFull;
						break;
					case 2:
						objectImage = basketballFull;
						break;
					case 3:
						objectImage = paperCrumple01;
						break;
				}
				setTimeout(function(){
					activeTitlePopups[activeTitlePopups.length] = new titlePopUp(objectImage,halfWidth,halfHeight);
					if(soundMuted === false){
						bloopSnd.play();
					}
				},850);
				setTimeout(function(){
					activeStressFade[0] = new stressTextFade(0,1);
				},1550);
				setTimeout(function(){
					activeStressFade[0] = new stressTextFade(1,0);
				},3800);

				fireAnimationFrames = [
					fireFrame_01,
					fireFrame_02,
					fireFrame_03,
					fireFrame_04,
					fireFrame_05,
					fireFrame_06,
					fireFrame_07
				]

				if(chosenObject === 3){
					crumpleAnimFrames = [
						paperCrumple01,
						paperCrumple02,
						paperCrumple03,
						paperCrumple04,
						paperFull
					];
					setTimeout(function(){
						activeTitlePopups = [];
						activePaperCrumple[0] = new paperCrumpleAnim();
					},4200);
				}else{
					setTimeout(changeState,5000);
				}
				allowInput = true;
				GAME_STATE = "transition";
				break;

			case "transition":
				resetScene();

				activeGameplayObject[0] = new gameplayStressObject();

				activeTitleObjects[0] = new titleObject(pickToolHdr,7,-60,7,0);
				activeTitleObjects[1] = new titleObject(pickBGHdr,641,-60,641,0);

				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(tractorBtn,-70,46,7,46);
				},700);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(BGBtn,screenWidth,37,658,37);
				},750);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(hammerBtn,-70,114,7,114);
				},800);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(golfBtn,-70,182,7,182);
				},900);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(dogBtn,-70,251,7,251);
					activeTitleObjects[activeTitleObjects.length] = new titleObject(trashCan,683,screenHeight,683,339);
					activeTitleObjects[activeTitleObjects.length] = new titleObject(destructBG,686,screenHeight,686,136);
					activeHealthMeter[0] = new healthMeterObject();
					activeTitleObjects[activeTitleObjects.length] = new titleObject(destructHdr,621,screenHeight,621,360);
				},1000);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(fireBtn,-70,322,7,322);
				},1100);

				setTimeout(function(){
					transitionComplete = true;
				},1400);	

				GAME_STATE = "gameplay";
				break;

			case "gameplay":
				resetScene();
				activeFadeObjects[activeLogoObjects.length] = new screenFade(1,0,"#FFF");
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(copingText,screenWidth,1,201,1);
				},150);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(tipText,screenWidth,2,400,2);
				},700);

				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(tipBG,95,screenHeight,95,106);
				},1100);
				setTimeout(function(){
					activeTitlePopups[activeTitlePopups.length] = new titlePopUp(doAgainBtn,680,355);
				},1500);	
				GAME_STATE = "endscreen";
				break;
			case "endscreen":
				resetScene();
				resetGame();
				activeFadeObjects[activeLogoObjects.length] = new screenFade(1,0,"#FFF");
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(stressText,225,-200,225,-3);
				},450);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(meText,285,screenHeight + 100,285,85);
				},350);
				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(lessText,256,screenHeight + 100,256,135);
				},550);

				setTimeout(function(){
					activeTitleObjects[activeTitleObjects.length] = new titleObject(subheadText,screenWidth + 100,245,170,245);
				},750);			

				setTimeout(function(){
					activeTitlePopups[activeTitlePopups.length] = new titlePopUp(startButton,675,347);
				},1500);	
				GAME_STATE = "title";
				break;
		}
	}


//   /$$                                 /$$    
//  |__/                                | $$    
//   /$$ /$$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$  
//  | $$| $$__  $$ /$$__  $$| $$  | $$|_  $$_/  
//  | $$| $$  \ $$| $$  \ $$| $$  | $$  | $$    
//  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
//  | $$| $$  | $$| $$$$$$$/|  $$$$$$/  |  $$$$/
//  |__/|__/  |__/| $$____/  \______/    \___/  
//                | $$                          
//                | $$                          
//                |__/   

	function onTouch(e){
/*		window.scrollTo(0,1);
		e.preventDefault();*/

		if(!INPUT_TYPE){
			if(e.clientX){
				INPUT_TYPE = "mouse";
				container.removeEventListener("touchstart",onTouch);
				container.addEventListener("mousemove",onMove);
				container.addEventListener("mouseup",onRelease);
			}else{
				INPUT_TYPE = "touch";
				container.removeEventListener("mousedown",onTouch);
				container.addEventListener("touchend",onRelease);
			}
		}
		if(INPUT_TYPE == "mouse"){
			clickX = e.clientX - offsetX;clickY = e.clientY - offsetY;
		}else{
			clickX = e.touches[0].pageX - offsetX;clickY = e.touches[0].pageY - offsetY;
		}
	}//End of onTouch

	function onRelease(e){
/*		window.scrollTo(0,1);
		e.preventDefault();*/

		var modelY = clickY * (canvas.height / canvas.offsetHeight);
		var modelX = clickX * (canvas.width / canvas.offsetWidth);

		switch(GAME_STATE){
			case "loading":
				bloopSnd.play();
				changeState();	

				break;

			case "title":
				//Sound Button
				if(modelX > 20 && modelX < 130){
					if(modelY > 9 && modelY < 40){
						if(soundStatus === "mute audio"){
							soundStatus = "play audio";
							soundMuted = true;
						}else{
							soundStatus = "mute audio";
							soundMuted = false;
						}
					}
				}
				//Start Button
				if(modelX > 615 && modelX < 730){
					if(modelY > 287 && modelY < 405){
						if(soundMuted === false){
							selectSnd.play();
						}
						changeState();
					}
				}
				break;

			case "select":
				if(modelY > 131 && modelY < 302){
					if(modelX > 96 && modelX < 275){
						showChosenButton();
						chosenObject = 1;
						stressObjectRadius = 162
						if(soundMuted === false){
							selectSnd.play();
						}
					}
					if(modelX > 282 && modelX < 461){
						showChosenButton();
						chosenObject = 2;
						stressObjectRadius = 162
						if(soundMuted === false){
							selectSnd.play();
						}
					}
					if(modelX > 468 && modelX < 647){
						showChosenButton();
						chosenObject = 3;
						stressObjectRadius = 142
						if(soundMuted === false){
							selectSnd.play();
						}
					}
				}

				if(chosenObject > 0 && allowInput === true){
					if(modelY > 305 && modelY < 415){
						if(modelX > 641 && modelX < 747){
							stressSource = userText.value;
							if(stressSource === ""){
								stressSource = "This is your stress";
							}
							userText.style.display = "none";
							activeFadeObjects[activeLogoObjects.length] = new screenFade(0,1,"#FFF");
							allowInput = false;
							if(soundMuted === false){
								selectSnd.play();
							}
							setTimeout(changeState,800);
						}
					}
				}

				break;

			case "gameplay":

				//******     ACTION BUTTONS     ******
				if(modelX < 76 && allowInput === true){

					//******     TRACTOR BUTTON     ******
					if(modelY > 43 && modelY < 109){
						if(soundMuted === false){
							tractorSnd.play();
						}
						activeButton = 2;
						allowInput = false;
						activeAnimationFX[0] = new tractorObject();
						setTimeout(function(){
							activeGameplayObject[0].currentAnimation = "shake";
							activeGameplayObject[0].shakeDamage = true;
							activeGameplayObject[0].shakeDamageAmount = 0.008;
							activeGameplayObject[0].releaseChunks = true;
							var currentTime = new Date().getTime();
							activeGameplayObject[0].animDuration = currentTime + 700;
						},200);
					}

					//******     HAMMER BUTTON     ******
					if(modelY > 111 && modelY < 177){
						activeButton = 3;
					}

					//******     GOLF BUTTON     ******
					if(modelY > 179 && modelY < 250){
						activeButton = 4;
					}

					//******     DOG BUTTON     ******
					if(modelY > 252 && modelY < 320){
						activeButton = 5;
						allowInput = false;
						if(soundMuted === false){
							growlSnd.play();
						}
						activeDogObject[0] = new dogObject(265,112,551,-34);
						setTimeout(function(){
							activeDogObject[0] = new dogObject(551,-34,340,80);
						},1500);
						setTimeout(function(){
							if(soundMuted === false){
								dogSnd.play();
							}
							activeDogObject = [];
							activeGameplayObject[0].currentAnimation = "dog";
							activeGameplayObject[0].releaseChunks = true;
							var currentTime = new Date().getTime();
							activeGameplayObject[0].nextUpdate = currentTime + 82;
						},1800);
					}

					//******     FIRE BUTTON     ******
					if(modelY > 322 && modelY < 393){
						activeButton = 6;
						allowInput = false;
						activeAnimationFX[0] = new fireObject();

						setTimeout(function(){
							if(soundMuted === false){
								fireSnd.play();
							}
						},750);

						setTimeout(function(){
							activeGameplayObject[0].currentAnimation = "shake";
							activeGameplayObject[0].releaseChunks = true;
							activeGameplayObject[0].shakeDamage = true;
							activeGameplayObject[0].shakeDamageAmount = 0.004;
							var currentTime = new Date().getTime();
							activeGameplayObject[0].animDuration = currentTime + 2500;
						},1200);
					}
				}


				//******     BACKDROP SELECTIONS     ******
				if(bgMenuOpen === true){
					if(modelY > 37 && modelY < 107){
						if(modelX > 377 && modelX < 442){
							currentBackground = 4;
							closeBGMenu();
						}
						if(modelX > 445 && modelX < 513){
							currentBackground = 3;
							closeBGMenu();
						}
						if(modelX > 515 && modelX < 585){
							currentBackground = 2;
							closeBGMenu();
						}
						if(modelX > 586 && modelX < 657){
							currentBackground = 1;
							closeBGMenu();
						}
					}
				}

				//******     BACKDROP BUTTON     ******
				if(modelX > 655 && allowInput === true){
					if(modelY > 37 && modelY < 110){
						allowInput = false;
						openBGMenu();
					}
				}

				//HAMMER ACTIVE
				if(activeButton === 3 && allowInput === true){
					if(hitCheck(modelX,modelY)){
						swingSnd.play();
						setTimeout(function(){
							hitSnd.play();
						},100);
						activeHitterObject[0] = new hitObject(modelX,modelY,"hammer");
						hitShakeAnim(modelX,modelY);
						activeHealthMeter[0].deduct(0.02);
					}
				}

				//GOLD CLUB ACTIVE
				if(activeButton === 4 && allowInput === true){
					if(hitCheck(modelX,modelY)){
						swingSnd.play();
						setTimeout(function(){
							hitSnd.play();
						},175);
						activeHitterObject[0] = new hitObject(modelX,modelY,"golf");
						hitShakeAnim(modelX,modelY);
						activeHealthMeter[0].deduct(0.02);
					}
				}
				break;

			case "endscreen":
				if(modelX > 230 && modelX < 514){
					if(modelY > 180 && modelY < 236){
						console.log('tips PDF');
					}
					if(modelY > 294 && modelY < 350){
						window.open("https://mindyourmind.ca/help"); 
					}
				}

				if(modelX > 622){
					if(modelY > 303 && modelY < 403){
						if(soundMuted === false){
							selectSnd.play();
						}
						changeState();
					}
				}
				break;
		}//end of switch statement
	}//End of onRelease

	function onMove(e){
/*		window.scrollTo(0,1);
		e.preventDefault();*/
	}//End of onMove


//   /$$$$$$$$                              /$$     /$$                              
//  | $$_____/                             | $$    |__/                              
//  | $$    /$$   /$$ /$$$$$$$   /$$$$$$$ /$$$$$$   /$$  /$$$$$$  /$$$$$$$   /$$$$$$$
//  | $$$$$| $$  | $$| $$__  $$ /$$_____/|_  $$_/  | $$ /$$__  $$| $$__  $$ /$$_____/
//  | $$__/| $$  | $$| $$  \ $$| $$        | $$    | $$| $$  \ $$| $$  \ $$|  $$$$$$ 
//  | $$   | $$  | $$| $$  | $$| $$        | $$ /$$| $$| $$  | $$| $$  | $$ \____  $$
//  | $$   |  $$$$$$/| $$  | $$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$ /$$$$$$$/
//  |__/    \______/ |__/  |__/ \_______/   \___/  |__/ \______/ |__/  |__/|_______/ 
//    

	function drawScaledImage(image, scale, x, y, alpha){
		c.save();
			c.globalAlpha = alpha;
			c.scale(scale,scale);
			c.drawImage(image,x,y);
		c.restore();
	}

	function wrapText(context, text, x, y, maxWidth, lineHeight) {
		var words = text.split(" ");
		var line = "";
		for(var n = 0; n < words.length; n++) {
		  var testLine = line + words[n] + " ";
		  var metrics = context.measureText(testLine);
		  var testWidth = metrics.width;
		  if(testWidth > maxWidth) {
			context.fillText(line, x, y);
			line = words[n] + " ";
			y += lineHeight;
		  }
		  else {
			line = testLine;
		  }
		}
		context.fillText(line, x, y);
	}

	//****************************
	//******     RESIZE     ******
	//****************************
	window.onresize = function() {
		//Needed to update offsets since it's part of the calculation
		offsetX = container.offsetLeft;
		offsetY = container.offsetTop;
	}

	function resetScene(){
/*		fireAnimationFrames = [];
		crumpleAnimFrames = [];*/
		activeLogoObjects = [];
		activeFadeObjects = [];
		activeTitleObjects = [];
		activeTitlePopups = [];
		activeStressFade = [];
		activePaperCrumple = [];
		activeGameplayObject = [];
		activeBGMenu = [];
		activeHealthMeter = [];
		activeAnimationFX = [];
		activeDentObjects = [];
		activeChunkObjects = [];
		activeHitterObject = [];
		activeDogObject = [];
	}

	function showChosenButton(){
		if(chosenObject === 0){
			activeTitlePopups[activeTitlePopups.length] = new titlePopUp(okButton,694,361);
		}
	}

	function openBGMenu(){
		if(soundMuted === false){
			bloopSnd.play();
		}
		activeButton = 1;
		bgMenuOpen = true;
		/*allowInput = false;*/
		activeBGMenu[0] = new bgMenuObject(bgSelectHockey,screenWidth,37,374,37);
		activeBGMenu[1] = new bgMenuObject(bgSelectRoad,screenWidth,37,443,37);
		activeBGMenu[2] = new bgMenuObject(bgSelectBrick,screenWidth,37,514,37);
		activeBGMenu[3] = new bgMenuObject(bgSelectGrad,screenWidth,37,585,37);
	}

	function closeBGMenu(){
		if(soundMuted === false){
			selectSnd.play();
		}
		activeButton = 0;
		bgMenuOpen = false;
		allowInput = true;
		activeBGMenu = [];
	}


	function hitCheck(hitX,hitY){

		var dx = hitX - (halfWidth);
		var dy = hitY - (halfHeight);
		var distance = Math.ceil(Math.sqrt(dx*dx + dy*dy));
		if(distance < stressObjectRadius){
			return true;
		}else{
			return false;
		}
	}


	function hitShakeAnim(modelX,modelY){
		setTimeout(function(){
			activeDentObjects[activeDentObjects.length] = new dentObject(modelX,modelY);

			var numChunks = Math.floor(Math.random() * 3) + 3;
			for(ii=0;ii<numChunks;ii++){
				activeChunkObjects[activeChunkObjects.length] = new chunkObject(modelX,modelY);
			}
			
			activeGameplayObject[0].currentAnimation = "shake";
			var currentTime = new Date().getTime();
			activeGameplayObject[0].animDuration = currentTime + 200;
		},75)
	}

	function checkGameEnd(){
		if(gameEnd === true){
			allowInput = false;
			gameEnd = false;
			var randTip = Math.floor(Math.random() * randomTips.length);
			tipString = randomTips[randTip];
			activeFadeObjects[activeLogoObjects.length] = new screenFade(0,1,"#FFF");
			setTimeout(changeState,750);
		}
	}

	function resetGame(){
		chosenObject = 0;
		objectImage = 0;
		stressObjectRadius = 0;

		wrapString = "";

		userText.value = "";

		stressSource = "";
		transitionComplete = false;

		currentBackground = 1;
		activeButton = 0;

		bgMenuOpen = false;
		allowInput = true;
		gameEnd = false;
	};

	function removeListeners(){
		activeListeners = false;
		if(INPUT_TYPE == "mouse"){
			container.removeEventListener("mousedown",onTouch);
			container.removeEventListener("mousemove",onMove);
			container.removeEventListener("mouseup",onRelease);
		}else{
			container.removeEventListener("touchstart",onTouch);
			container.removeEventListener("touchmove",onMove);
			container.removeEventListener("touchend",onRelease);
		}
	}
	function addListeners(){
		activeListeners = true;
		if(INPUT_TYPE == "mouse"){
			container.addEventListener("mousedown",onTouch);
			container.addEventListener("mousemove",onMove);
			container.addEventListener("mouseup",onRelease);
		}else{
			container.addEventListener("touchstart",onTouch);
			container.addEventListener("touchmove",onMove);
			container.addEventListener("touchend",onRelease);
		}
	}

	function setupObjectChoice(){

		setTimeout(function(){
			activeTitleObjects[activeTitleObjects.length] = new titleObject(chooseBG,98,screenHeight,98,128);
		},350);
		setTimeout(function(){
			activeTitleObjects[activeTitleObjects.length] = new titleObject(chooseBG,283,screenHeight,283,128);
		},550);
		setTimeout(function(){
			activeTitleObjects[activeTitleObjects.length] = new titleObject(chooseBG,469,screenHeight,469,128);
		},750);


		setTimeout(function(){
			activeTitlePopups[activeTitlePopups.length] = new titlePopUp(chooseBeachball,184,217);
				if(soundMuted===false){
				bloopSnd.play();
			}
		},1200);
		setTimeout(function(){
			activeTitlePopups[activeTitlePopups.length] = new titlePopUp(chooseBasketball,374,217);
			if(soundMuted===false){
				bloopSnd.play();
			}
		},1350);
		setTimeout(function(){
			activeTitlePopups[activeTitlePopups.length] = new titlePopUp(choosePaper,559,217);
			if(soundMuted===false){
				bloopSnd.play();
			}
		},1500);	
	}


/*function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.getElementById("canvas");

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}*/
}());//End of IIFE