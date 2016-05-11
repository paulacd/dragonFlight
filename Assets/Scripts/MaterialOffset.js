#pragma strict

var scrollSpeed: float;

var rend: Renderer; 

var materialTile: float;

function Start () {

rend = GetComponent.<Renderer>();

}

function Update () {

//material tile is the number of tiles it's going to scroll through any given time
var x: float = Mathf.Repeat(Time.time * scrollSpeed, materialTile);

//you will offset it 0 in y because it's only moving in the x
var offset: Vector2 = new Vector2(x, 0);

rend.material.SetTextureOffset ("_MainTex", offset);

}