#pragma strict

private var y = transform.position.y;

function Start () {

}

function Update () {
	transform.position.y -= 1 * Time.deltaTime;
}