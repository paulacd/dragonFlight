#pragma strict

import UnityEngine.SceneManagement;


var space: KeyCode;

//starting screen variables
var image: UnityEngine.UI.Image;
var GOimage: UnityEngine.UI.Image;
var scoreText: UnityEngine.UI.Text;


var isStarted: boolean = false;
var imageFade: float = 1;
var GOimageFade: float = 0;
var scoreTextFade: float;

var gameOver: boolean = false;
var restart: boolean = false;

//Score
var score: float = 0;
var highScore: float = 0;
var startTime: float =0;

//spawns
var grayCloud: GameObject;
var whiteCloud: GameObject;
//var book: GameObject;
//var paint: GameObject;
//var ball: GameObject;
var dragon: GameObject;

//individual timers
var lastTimeGrayCloud: float = 0;
var lastTimeWhiteCloud: float = 0;
//var lastTimeBook: float = 0;
//var lastTimePaint: float = 0;
//var lastTimeBall: float = 0;



function Start () {
print("starting");
highScore = PlayerPrefs.GetInt("High Score");

}

function Update () {

score = Mathf.Floor(Time.time - startTime);
Debug.Log(score);
scoreText.text = "Score: " + score + "\nHigh Score: " + highScore;


if (isStarted == false) {
	//Debug.Log("Title Screen");
	image.color = new Color (image.color.r, image.color.g, image.color.b, imageFade);
	//scoreText.color = new Color (scoreText.color.r, scoreText.color.g, scoreText.color.b, scoreTextFade);
	scoreText.color = new Color (0, 0, 0);
	GOimage.color = new Color (GOimage.color.r, GOimage.color.g, GOimage.color.b, GOimageFade);
	imageFade = 1;
	Time.timeScale= 1;




	if (Input.GetKeyDown(KeyCode.Space)){
	Debug.Log("Pressed Arrow, start the game!");
	Destroy(image);
	scoreText.color = new Color (255, 255, 255);
	//scoreText.text = "Score: " + score + "\nHigh Score: " + highScore;
	isStarted = true;
	spawnDragon();
	startTime = Time.time;
	}
}



if (Time.timeSinceLevelLoad - lastTimeGrayCloud > Random.Range(0.5, 1.5) && isStarted == true) {
spawnGrayClouds();
lastTimeGrayCloud = Time.timeSinceLevelLoad;

}

if (Time.timeSinceLevelLoad - lastTimeWhiteCloud > Random.Range(0.5, 1.5) && isStarted == true) {
spawnWhiteClouds();
lastTimeWhiteCloud = Time.timeSinceLevelLoad;

}


if (restart) {
if (Input.GetKeyDown(KeyCode.Space)){
	SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
}
}




}

function spawnGrayClouds(){

Instantiate(grayCloud, Vector3(15, Random.Range (-5.2,5.2), 0), Quaternion.identity);

}

function spawnWhiteClouds(){

Instantiate(whiteCloud, Vector3(15, Random.Range (-5.2,5.2), 0), Quaternion.identity);

}


function spawnDragon(){

Instantiate(dragon, Vector3(-6, 0, 0), Quaternion.identity);

}


function GameOver() {
//goText.text = "GAME OVER. Press button to restart";
GOimageFade = 1;
GOimage.color = new Color (GOimage.color.r, GOimage.color.g, GOimage.color.b, GOimageFade);
Debug.Log("Game Over in the GC");

if (score > highScore){
highScore = score;
PlayerPrefs.SetInt("High Score", highScore);
}

Time.timeScale = 0;

restart = true;

	}

//function Score() {
//score += Time.Time;
//
//}


