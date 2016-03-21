var gameCtrls = angular.module('gameCtrls', []);
	gameCtrls.controller('testCtrl', ['$scope',
	    function($scope) {
	    	var flag=1;
	    	var board=[];
	    	var history=[];
	    	$scope.board=[];
	    	$scope.count=5;
	    	var init=function(){
		    	for (var i = 0; i < 225; i++) {
		    		 $scope.board[i]={
		    		 	mclass:'b',
		    		 	mindex:i
		    		 };
		    		 board[i]={
		    		 	occupied:0,    //是否有棋子
		    		 	color:0,       //0是黑棋，1是白棋（前提：occpied=1）
		    		 	visited:0      //访问标记
		    		 };
		    	}
	    	}
	    	init();
	    	var refresh=function(){
	    		for (var i = 0; i < 225; i++) {
	    			if(board[i].occupied==0){
	    				$scope.board[i]={
			    		 	mclass:'b',
			    		 	mindex:i
		    		 	};
	    			}else{
	    				if(board[i].color==0){
	    					$scope.board[i]={
			    		 		mclass:'b1',
			    		 		mindex:i
		    		 		};
	    				}else{
	    					$scope.board[i]={
			    		 		mclass:'b2',
			    		 		mindex:i
		    		 		};
	    				}
	    			}
	    		};
	    	}
	    	var score = function(index,color){
	    		//横向
	    		var maxscore=0;
	    		var tempscore=0;
	    		var flaga=1;
	    		var flagb=1;
	    		for (var i = 1; i<5 ; i++) {
	    			if(index%15+i<15&&flaga==1){  //同一行
	    				if(board[index+i].occupied==1&&board[index+i].color==color){
	    					tempscore+=3;
	    				}else{
	    					if(board[index+i].occupied==0){
	    						tempscore++;
	    					}
	    					flaga=0;
	    				}
	    			}
	    			if(index%15-i>=0&&flagb==1){  //同一行
	    				if(board[index-i].occupied==1&&board[index-i].color==color){
	    					tempscore+=3;
	    				}else{
	    					if(board[index-i].occupied==0){
	    						tempscore++;
	    					}
	    					flagb=0;
	    				}
	    			}
	    		};
	    		if(tempscore>maxscore)
	    			maxscore=tempscore;
	    		tempscore=0;
	    		flaga=1;
	    		flagb=1;
	    		//纵向
	    		for (var i = 1; i<5 ; i++) {
	    			if(index+i*15<225&&flaga==1){  //同一行
	    				if(board[index+i*15].occupied==1&&board[index+i*15].color==color){
	    					tempscore+=3;
	    				}else{
	    					if(board[index+15*i].occupied==0){
	    						tempscore++;
	    					}
	    					flaga=0;
	    				}
	    			}
	    			if(index-i*15>=0&&flagb==1){  //同一行
	    				if(board[index-i*15].occupied==1&&board[index-i*15].color==color){
	    					tempscore+=3;
	    				}else{
	    					if(board[index-i*15].occupied==0){
	    						tempscore++;
	    					}
	    					flagb=0;
	    				}
	    			}
	    		};
	    		if(tempscore>maxscore)
	    			maxscore=tempscore;
	    		tempscore=0;
	    		flaga=1;
	    		flagb=1;
	    		//右斜向
	    		for (var i = 1; i<5 ; i++) {
	    			if(index+i-15*i>=0&&index%15+i<15&&flaga==1){  //同一行
	    				if(board[index+i-15*i].occupied==1&&board[index+i-15*i].color==color){
	    					tempscore+=3;
	    				}else{
	    					if(board[index+i-15*i].occupied==0){
	    						tempscore++;
	    					}
	    					flaga=0;
	    				}
	    			}
	    			if(index-i+15*i<225&&index%15-i>=0&&flagb==1){  //同一行
	    				if(board[index-i+15*i].occupied==1&&board[index-i+15*i].color==color){
	    					tempscore+=3;
	    				}else{
	    					if(board[index-i+15*i].occupied==0){
	    						tempscore++;
	    					}
	    					flagb=0;
	    				}
	    			}
	    		};
	    		if(tempscore>maxscore)
	    			maxscore=tempscore;
	    		tempscore=0;
	    		flaga=1;
	    		flagb=1;
	    		//左斜向
	    		for (var i = 1; i<5 ; i++) {
	    			if(index+i+15*i<225&&index%15+i<15&&flaga==1){  //同一行
	    				if(board[index+i+15*i].occupied==1&&board[index+i+15*i].color==color){
	    					tempscore+=3;
	    				}else{
	    					if(board[index+i+15*i].occupied==0){
	    						tempscore++;
	    					}
	    					flaga=0;
	    				}
	    			}
	    			if(index-i-15*i>=0&&index%15-i>=0&&flagb==1){  //同一行
	    				if(board[index-i-15*i].occupied==1&&board[index-i-15*i].color==color){
	    					tempscore+=3;
	    				}else{
	    					if(board[index-i-15*i].occupied==0){
	    						tempscore++;
	    					}
	    					flagb=0;
	    				}
	    			}
	    		};
	    		if(tempscore>maxscore)
	    			maxscore=tempscore;
	    		//
	    		return maxscore;
	    	}
	    	var gameover = function(who){
	    		if(who==0){
	    			var t=setTimeout('alert("你赢了")',300);
	    		}else{
	    			var t=setTimeout('alert("你输了")',300);
	    		}
	    		var t=setTimeout('history.go(0);',400);
	    	}
		    $scope.test=function(mindex){
		    	if(flag=1){
		    		flag=0;
			    	if(board[mindex].occupied==0){
			    		var tempscore = score(mindex,0);
			    		board[mindex].occupied=1;
			    		board[mindex].color=0;
			    		refresh();
			    		if(tempscore>=12){
			    			gameover(0);
			    			return
			    		}
			    		var aiscore=0;
			    		var aipos=0;
			    		for (var i = 0; i < 225; i++) {
			    			if(board[i].occupied==1){
			    				continue;
			    			}
			    			var tempscore = score(i,1);
			    			if(tempscore>aiscore){
			    				aiscore=tempscore;
			    				aipos=i;
			    			}
			    			//console.log(aipos+"   "+aiscore);
			    		};
			    		var playerscore=0;
			    		var playerpos=0;
			    		for (var i = 0; i < 225; i++) {
			    			if(board[i].occupied==1){
			    				continue;
			    			}
			    			var tempscore = score(i,0);
			    			if(tempscore>playerscore){
			    				playerscore=tempscore;
			    				playerpos=i;
			    			}
			    		};
			    		if(playerpos>aiscore&&aiscore<11){
			    			aipos=playerpos;
			    		}
			    		board[aipos].occupied=1;
			    		board[aipos].color=1;
			    		refresh();
			    		history.push({
			    			a:mindex,
			    			b:aipos
			    		});
			    		if(aiscore>=12){
			    			gameover(1);
			    			return
			    		}
		    		}
		    	}
		    	flag=1;
		    };
		    $scope.back = function(){
		    	if(history.length<=0||$scope.count==0){
		    		return;
		    	}
		    	history.pop();
		    	for (var i = 0; i < 225; i++) {
		    		board[i].occupied=0;
		    		board[i].color=0;
		    	};
		    	for (var i = 0; i < history.length; i++) {
		    		board[history[i].a].occupied=1;
		    		board[history[i].a].color=0;
		    		board[history[i].b].occupied=1;
		    		board[history[i].b].color=1;
		    	};
		    	$scope.count--;
		    	refresh();
		    }
	    }
	]);