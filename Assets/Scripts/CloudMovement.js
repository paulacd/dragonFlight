#pragma strict

var speed: float;
var dead: boolean = false;
var animator: Animator; 

function Start () {

}

function Update () {

transform.position.x += -speed;

}

function OnCollisionEnter2D (coll: Collision2D) {

		if(coll != null && coll.gameObject.tag == "Player"){
			Debug.Log("Game over");
			//animator.SetInteger("hitCloud", 1);
			dead = true;
			//gameObject.Find("GameController").SendMessage("GameOver");
		}


		
	}