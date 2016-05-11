#pragma strict

	// Vector3 velocity = Vector3.zero;
	// public Vector3 gravity;
	// public Vector3 flapVelocity;
	// public float maxSpeed = 5f;
	// public float flapSpeed = 12f;
	// public float forwardSpeed = 1f;


	//var velocity: Vector3;
	var maxSpeed: float;
	var flapSpeed: float;
	var forwardSpeed: float;
	var flapVelocity: Vector3;
	var gravity: Vector3;

	var didFlap: boolean = false;
	var dead: boolean = false;

	var animator: Animator; 

	var rb: Rigidbody2D;

	//bool didFlap = false;
	// public bool dead = false;

function Start () {


		animator = GetComponent.<Animator> ();
		rb = GetComponent.<Rigidbody2D>();

	}
	
	// Update is called once per frame. Graphic & Input updates here
	function Update () {
		//if you tap anywhere on a mobile device it will return = MouseButtomDown(0)
		if(Input.GetKeyDown(KeyCode.Space)) {
			didFlap = true;

		}

				rb.velocity.x = forwardSpeed;
		rb.velocity += (gravity * Time.deltaTime);

		if(didFlap == true) {
			didFlap = false;
			if(rb.velocity.y <0){
				rb.velocity.y = 0;
			}
			rb.velocity += flapVelocity;
		}

		//this ensures that your velocity cannot exceed your max speed. Up, down, right or left
		rb.velocity = Vector3.ClampMagnitude (rb.velocity, maxSpeed);

		//transform.position += velocity * Time.deltaTime;

		//transform.velocity.y = Mathf.Clamp(transform.velocity.y, -3.7, 3.7);


	
	}

		function OnCollisionEnter2D (coll: Collision2D){

		if(coll.gameObject.tag == "BadCloud"){
		//Debug.Log("Dragon hit cloud");
		animator.SetInteger("hitCloud", 1); 
		gameObject.Find("GameController").SendMessage("GameOver");

		}

//		if (coll.gameObject.tag == "Ceiling" || coll.gameObject.tag == "Floor"){
//		flapVelocity.y *= -1;
//		}
	}
