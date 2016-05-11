using UnityEngine;
using System.Collections;

public class cameraTracksPlayer : MonoBehaviour {

	Transform player;

	float offsetX;

	// Use this for initialization
	void Start () {
		GameObject player_go = GameObject.FindGameObjectWithTag ("Player");

		if (player_go == null) {
			//Debug.LogError("Couldn't find an object with tag 'player'!");
			return;
		}

		player = player_go.transform;

		offsetX = transform.position.x - player.position.x;
	
	}
	
	// Update is called once per frame
	void Update () {
		
		//just to check the player didn't die, add the if statement
		if (player != null){
			Vector3 pos = transform.position;
			//you can this in JS, but in C# you can't write to the x as is directly, so you create the vector 3
			pos.x = player.position.x + offsetX;
			transform.position = pos;
	}
}
}